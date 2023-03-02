import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    useToast,
  } from "@chakra-ui/react";
  import { MoonIcon, SunIcon } from "@chakra-ui/icons";
  import { Link, useNavigate} from "react-router-dom";
  import ButtonComp from "./ButtonComp";
  import PostAndAddPostLink from "./PostAndAddPostLink";
  import MenuSmallScreen from "./MenuSmallScreen";
import CartDrawer from "./CartDrawer";
import { useSelector } from "react-redux";
import Cart from "../Pages/Cart";
import { useState } from "react";
  
  function UserNavbar() {

   const { colorMode, toggleColorMode } = useColorMode();
   const { isAuth, loading, error, token , role , userEmail } = useSelector((store) => store.auth);
   const toast = useToast()
   const navigate = useNavigate()
   const[isauth , setIsauth] = useState(isAuth)

  //  const handleLogoutUser = () =>{
      
  //  }

   const handleSignout = () =>{
    console.log(isauth,"((((&&&))))")
     if(isauth === false){
      navigate("/login")
      toast({
        position: "bottom-right",
        render: () => (
          <Box color="white" p={3} bg="orange">
             Loading Login Page
          </Box>
        ),
      })
     
         
     }
     else{
      console.log(isauth,"((((******))))")
      toast({
        position: "bottom-right",
        render: () => (
          <Box color="white" p={3} bg="orange">
             logout success
          </Box>
        ),
      })
      navigate("/")
     }
   }

    return (
      <>
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Link to="/">
              <Box width="40px" height="30px" > <img src="ecom-logo.png" alt="" /> </Box>
            </Link>
  
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                {/* add post button */}
                
                 {/* <Cart/> */}
                 
                <MenuSmallScreen />
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
  
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
  
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={"https://avatars.dicebear.com/api/male/username.svg"}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p> {userEmail} </p>
                    </Center>
                    <br />
                    <MenuDivider />
  
                    <MenuItem><Link to="/cart" >Cart</Link></MenuItem>
                    <MenuItem> <Link to="/signup" >Signup</Link> </MenuItem>
                    <MenuItem><Button onClick={handleSignout}>{isAuth ? "Logout" : "Login"}</Button></MenuItem>

                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }
  
  export default UserNavbar;