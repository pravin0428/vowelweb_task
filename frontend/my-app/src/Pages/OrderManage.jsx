import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCartItems } from "../redux/cart/cart.action";
import {
  SimpleGrid,
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";
import AdminNavbar from "../Components/AdminNavbar";

export default function Ordermanage() {
  const { data } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <>
      <AdminNavbar />
      <Heading style={{ marginTop: "25px" }}>Order Management</Heading>

      <SimpleGrid columns={[1, 2, null, 3]} spacing="40px" margin="auto" p={17}>
        {data?.map((elem) => {
          return (
            <Card maxW="xs">
              <CardBody>
                <Image
                  src={elem.imageFileSet}
                  alt="proImg"
                  borderRadius="10px"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{elem.title}</Heading>

                  <Text color="orange.600" fontSize="30px">
                    ${elem.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
}
