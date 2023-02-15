// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure,
//   Button,
//   Input,
//   Flex,
//   Heading,
//   Box,
// } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
 
// import { getCartData } from '../HttpSevices/posts'

//  function Cart() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const btnRef = React.useRef()

//     const [cartData , setCartData] = useState([])
//     useEffect(() => {
//         fetch("http://localhost:8080/cart").then((res) => res.json()).then((res)=>{
//             console.log(res.data,"^^^in cart^^^^^");
//             setCartData(res.data)
//         }).catch((err) => {
//             console.log(err);
//         })
//       }, []);

//   return (
//   <>
//       <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
//           Open
//         </Button>
//         <Drawer
//           isOpen={isOpen}
//           placement='right'
//           onClose={onClose}
//           finalFocusRef={btnRef}
//         >
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerCloseButton />
//             <DrawerHeader>Create your account</DrawerHeader>
  
//             <DrawerBody>
//              {cartData.map((elem)=>(
//                  <Box>
//                   <h4>{elem.title}</h4>
//                   <Flex gap={20} >
//                   <Box> <img src={elem.imageFileSet} alt="image" /> </Box>
//                   <Box display="flex"  justifyContent="space-between" ><Button>+</Button> <Button>-</Button></Box>
//                 </Flex>
//                  </Box>
//               ))}  
//             </DrawerBody>
  
//             <DrawerFooter>
//               <Button variant='outline' mr={3} onClick={onClose}>
//                 Cancel
//               </Button>
//               <Button colorScheme='blue'>Save</Button>
//             </DrawerFooter>
//           </DrawerContent>
//         </Drawer>
//   </>
//   )
// }

// export default Cart

import React, { useState } from 'react';
import { Box, Heading, Table, Thead, Tr, Th, Tbody, Td, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'rewt', price: 500, quantity: 1 },
    { id: 2, name: 'goods', price: 200, quantity: 2 },
    { id: 3, name: 'shoe', price: 300, quantity: 3 },
  ]);

  // some future update 
  // const toast = useToast()
  // const navigate = useNavigate()
  // useEffect(() => {
  //       fetch("http://localhost:8080/cart").then((res) => res.json()).then((res)=>{
  //           console.log(res.data,"^^^in cart^^^^^");
  //           setCartItems(res.data)
  //       }).catch((err) => {
  //           console.log(err);
  //       })
  //     }, []);


  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <Box maxW="container.lg" mx="auto" p={4} >
      <Heading as="h1" size="2xl" mb={8}>
        Cart
      </Heading>
      {cartItems.length > 0 ? (
        <Table>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Total</Th>
              <Th>Action</Th>
              <Th>Purches</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map(item => (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td>{item.price}</Td>
                <Td>
                  <Box w="100px">
                    <Button variant="outline" size="xs" mr={2} onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</Button>
                    {item.quantity}
                    <Button variant="outline" size="xs" ml={2} onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</Button>
                  </Box>
                </Td>
                <Td>{item.price * item.quantity}</Td>
                <Td><Button variant="outline" size="sm" onClick={() => handleRemoveItem(item.id)}>Remove</Button></Td>
                <Td> <Link to="/payment" > <Button variant="outline" size="sm" bg={'green.200'} >Buy</Button> </Link></Td>
              </Tr>
            ))}
            <Tr>
              <Td colSpan={3}></Td>
              <Td>Subtotal:</Td>
              <Td>{getTotal()}</Td>
            </Tr>
          </Tbody>
          
        </Table>
      ) : (
        <Box>No items in cart</Box>
      )}
    </Box>
  );
}

export default CartPage;