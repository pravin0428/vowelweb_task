import {
  Box,
  Button,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import axios from "axios";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import UserNavbar from "../Components/UserNavbar";
import {
  alldlt,
  getCartItems,
  removeItemFromCart,
  updateCartItem,
} from "../redux/cart/cart.action";
import { MdDelete } from "react-icons/md";
import ShippingAdd from "../Components/FormShippingAdd";
const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.cart);
  console.log(data, "******in cart page");
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    total += data[i].price * data[i].count;
  }
  let discount = Math.floor((total / 100) * 10);

  const handleUpdate = (id, newCount) => {
    if (newCount === 0) {
      dispatch(removeItemFromCart(id));
    } else {
      console.log(id);
      dispatch(updateCartItem(id, { count: newCount }));
    }
    // dispatch(getCartItems())
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  function loadRazorpay(amnt) {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        const result = await axios.post(
          "https://cultfit.onrender.com/create-order",
          {
            amount: amnt + "00",
          }
        );
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get("https://cultfit.onrender.com/get-razorpay-key");

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: "Pravin Mohite",
          description: "Product Payment",
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post(
              "https://cultfit.onrender.com/pay-order",
              {
                amount: amount,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
              }
            );
            dispatch(alldlt());
            alert(result.data.msg);
          },

          prefill: {
            name: "experimental name",
            email: "experiment@gmail.com",
            contact: "8766535472",
          },
          notes: {
            address: "experimental address",
          },
          theme: {
            color: "#80c0f0",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
      }
    };
    document.body.appendChild(script);
  }

  return (
    <>
      <UserNavbar />
      <Heading p={4}>Checkout Your Favorite Products</Heading>

      <Box
        display={{ lg: "flex" }}
        justifyContent="space-around"
        w="90%"
        m="auto"
        // border="4px solid teal"
      >
        <Box
        //  border="2px solid yellow"
        >
          <Box
          // border="3px solid grey"
          >
            <ShippingAdd />
          </Box>
          <Box w={{ sm: "100vw", md: "60vw", lg: "30vw" }} m="auto">
            <TableContainer boxShadow={"xl"} mt="10px" mb="25px">
              <Table variant="striped" colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th>Label</Th>
                    <Th isNumeric>Ammount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Total Ammount</Td>
                    <Td isNumeric>₹ {Math.floor(total)}</Td>
                  </Tr>
                  <Tr>
                    <Td>Discount</Td>
                    <Td isNumeric>- ₹ {discount}</Td>
                  </Tr>

                  <Tr>
                    <Td>Finel Ammount</Td>
                    <Td isNumeric>₹ {Math.floor(total - discount)}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Box
              boxShadow={"2xl"}
              background="black"
              textAlign={"center"}
              p={"3"}
              w={{ sm: "40vw", md: "25vw", lg: "20vw" }}
              m={"auto"}
              color="white"
              cursor={"pointer"}
              onClick={() => loadRazorpay(Math.floor(total - discount))}
            >
              PAY NOW
            </Box>
          </Box>
        </Box>

        {/* cart cards */}

        <Box
          w={{ sm: "100%", md: "40%", lg: "40%" }}
          margin="auto"
          // border="4px solid purple"
          p={4}
          boxShadow="xl"
        >
          <p>List of Your cart Products</p>
          <br />
          {data?.map((el) => (
            <Box
              key={el._id}
              width="100%"
              h="200px"
              m="auto"
              pb={2}
              display="flex"
              justifyContent="space-between"
              // border="2px solid green"
            >
              <Box h="100%">
                <Image h="100%" src={el.imageFileSet} />
              </Box>
              <Box
                h="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
              >
                <h1
                  style={{
                    fontWeight: "700",
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                >
                  {el.title}
                </h1>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  g={{ sm: "10vw", lg: "20vw" }}
                  //  border="2px solid red"
                  width="240px"
                >
                  <p style={{ textAlign: "left" }}>Price: ₹{el.price}</p>
                  <Box display="flex" justifyContent="space-evenly">
                    <Button
                      backgroundColor="red"
                      color="white"
                      textAlign={"center"}
                      cursor={"pointer"}
                      onClick={() => handleUpdate(el._id, el.count - 1)}
                    >
                      {el.count !== 1 ? "-" : <MdDelete />}
                    </Button>
                    <Button textAlign={"center"} cursor={"pointer"}>
                      {el.count}
                    </Button>
                    <Button
                      backgroundColor="green.500"
                      color="white"
                      textAlign={"center"}
                      cursor={"pointer"}
                      onClick={() => handleUpdate(el._id, el.count + 1)}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CartPage;
