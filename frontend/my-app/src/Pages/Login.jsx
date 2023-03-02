import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { loginUser } from "../redux/auth/action";
import UserNavbar from "../Components/UserNavbar";

const Login = () => {
  const { isAuth, loading, error, token , role } = useSelector((store) => store.auth);
  console.log(role, "indide signin component");

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(formData));
  }
  useEffect(() => {
    if (isAuth) {
      if(role === "User"){
         navigate("/");
      }
      else if(role === "Admin"){
        navigate("/posts");
      }
    } 
  }, [isAuth , role]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error...</div>;
  }
  return (
    <>
    <UserNavbar/>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack maxW={"lg"} marginTop="-4%">
          <Box rounded={"lg"} bg={"white"} boxShadow={"xl"} p={10}>
            <Stack spacing={4}>
              <Heading fontSize={{ base: "2xl", sm: "3xl" }}>
                Login Form
              </Heading>

              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Enter email"
                  type="email"
                  value={formData.email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Enter password"
                  type="password"
                  value={formData.password}
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
                <Button
                  color={"white"}
                  bg={"green.400"}
                  _hover={{
                    bg: "green.500",
                  }}
                  onClick={(e) => handleSubmit(e)}
                >
                  LogIn
                </Button>
              </Stack>
            </Stack>
            <br />
            <Link to="/signup">Go to signup..</Link>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
