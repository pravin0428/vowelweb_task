import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItemOption,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import ModalComp from "../Components/ModalComp";
import SingleProCard from "../Components/SingleProCard";
import { getPostsDetailsById } from "../HttpSevices/posts";

function SinglePost() {
  const [proData, setProData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(proData);
  const { id } = useParams();
   console.log(id , "||||||");
  useEffect(() => {
    getPostsDetailsById(id)
      .then((res) => {
        console.log(res.data ,"in the Singlepost-------**------")
        setProData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const opneModelCom = () => {
    setIsModalOpen(true);
  };

  // just for date addition
  const dateFormat = () => {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  return (
    <>
      <Box 
      // border="4px solid red"
      p={5}
       display="flex" justifyItems="start">
        <Menu closeOnSelect={false} >
          <MenuButton as={Button} colorScheme='red' variant='outline'>
            DELETE
          </MenuButton>
          <MenuList minWidth="240px">
            
            <MenuItemOption as={Button} onClick={opneModelCom}>
              <ModalComp
                isOpen={isModalOpen}
                setIsOpe={setIsModalOpen}
                title={proData.title}
                id={id}
              />
            </MenuItemOption>
            <MenuItemOption   as={Link} to={`/posts/${id}/edit`} >future expansion</MenuItemOption>
          </MenuList>
        </Menu>
      </Box>

      <SingleProCard
        key={proData._id}
        title={proData.title}
        proImage={proData.imageFileSet}
        body={proData.publishedAt}
        id={proData._id}
        price={proData.price}
        buttonText="Edit Product Information"
      />
    </>
  );
}
export default SinglePost;
