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
import { Link, useNavigate } from "react-router-dom";
import ButtonComp from "./ButtonComp";
import PostAndAddPostLink from "./PostAndAddPostLink";
import MenuSmallScreen from "./MenuSmallScreen";
import { useState } from "react";
import { useSelector } from "react-redux";

function AdminNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuth, loading, error, token , role } = useSelector((store) => store.auth);
  const [logout , setLogot] = useState(role)
  const [authStaus , SetAuthStaus] = useState(isAuth)
  const navigate = useNavigate()
  const toast = useToast()
  const handleLogout = () =>{
    setLogot("User")
    SetAuthStaus(false)
    toast({
      position: "bottom-right",
      render: () => (
        <Box color="white" p={3} bg="orange">
           "Logout success"
        </Box>
    ),
    })
    navigate("/")
 
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/posts">
            <Box  width="40px" height="30px" > <img src="ecom-logo.png" alt="" /> </Box>
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7} 
            // border="1px solid red" 
            >
              {/* add post button */}

              <PostAndAddPostLink />

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
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />

                  <MenuItem>
                    <PostAndAddPostLink />
                  </MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem as="Button" onClick={handleLogout}  >Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default AdminNavbar;
