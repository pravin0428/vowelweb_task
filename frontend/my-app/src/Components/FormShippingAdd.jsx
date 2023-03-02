import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";


const initState = {
  firstname : "",
  lastname : "",
  email : "",
  address : "",
  city : "",
  state : "",
  pincode : "",
  mobno : null,
  landmark : ""
}

  function ShippingAdd() {
  const [showPassword, setShowPassword] = useState(false);

  const [state , setState] = useState(initState)

  const handleDataChange = (e) => {
    setState({...state , [e.target.name] : e.target.value})
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Fill Paymet Details form
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool Products ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name="firstname" value={state.firstname} onChange={(e) => handleDataChange(e)}    />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name="lastname" value={state.lastname} onChange={(e) => handleDataChange(e)}   />
                </FormControl>
              </Box>
            </HStack>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={state.email} onChange={(e) => handleDataChange(e)}   />
            </FormControl>

            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <Input type="text" name="address" value={state.address} onChange={(e) => handleDataChange(e)}   />
            </FormControl>

            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>City</FormLabel>
                  <Input type="text" name="city" value={state.city}  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>State</FormLabel>
                  <Input type="text" name="state" value={state.state}  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Pin Code</FormLabel>
                  <Input type="text" name="pincode" value={state.pincode} onChange={(e) => handleDataChange(e)}   />
                </FormControl>
              </Box>
            </HStack>

            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Mob. no.</FormLabel>
                  <Input type="text" name="mobno" value={state.mobno} onChange={(e) => handleDataChange(e)}   />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>landmark/street</FormLabel>
                  <Input type="text" name="landmark" value={state.landmark} onChange={(e) => handleDataChange(e)}   />
                </FormControl>
              </Box>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default ShippingAdd