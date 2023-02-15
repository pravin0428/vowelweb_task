import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/auth/action";

function Signup() {
  const { isRegister, loading, error } = useSelector((store) => store.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // username: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    dispatch(registerUser(formData));
  } 
  useEffect(() => {
    if (isRegister) {
      navigate("/login");
    }
   
  }, [isRegister]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  if (loading) {
    return <div>....Loading</div>;
  } else if (error) {
    return <div>....Error</div>;
  }
  return (
    <>
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg="gray.50">
        <Stack
          borderRadius="10px"
          boxShadow={"lg"}
          p="20px"
          marginTop="-4%"
        //   border="2px solid red"
        >
          <Heading fontSize={{ base: "2xl", sm: "3xl" }}>Signup Form</Heading>

          <FormControl id="userName" isRequired 
        //   border="2px solid green"
          >
            {/* <FormLabel>Full name</FormLabel>
            <Input
              placeholder="Enter Name"
              type="text"
              value={formData.username}
              name="username"
              onChange={(e) => handleChange(e)}
            /> */}
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="Enter Email"
              type="email"
              value={formData.email}
              name="email"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Enter Password"
              type="password"
              value={formData.password}
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <br />
          <Button
            color={"white"}
            bg={"green.400"}
            _hover={{
              bg: "green.500",
            }}
            onClick={(e) => handleSubmit(e)}
          >
            SignIn
          </Button>

          <br />
          <Link to="/login">Go To Login</Link>
        </Stack>
      </Flex>
    </>
  );
}

export default Signup;

