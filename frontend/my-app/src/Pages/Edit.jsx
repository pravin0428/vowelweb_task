import {
  Center,
  Flex,
  Image,
  Stack,
  useColorModeValue,
  Box,
  Button,
  Editable,
  EditablePreview,
  EditableTextarea,
  FormLabel,
  Grid,
  Input,
  useToast,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllPostsDetailsById,
  getPostsDetailsById,
  putDataEdit,
} from "../HttpSevices/posts";
// import FileBase64 from "react-file-base64";
import { useEffect } from "react";
// import joi from "joi-browser";
import axios from "axios";

const initState = {
  title: "",
  imageFileSet: "",
  body: "",
};

function Edit() {
  const [prevData, setPrevData] = useState([]);
  const [formData, setFormData] = useState(initState);
  // const [checkData , setCheckData] = useState({})
  // console.log(formData);

  const navigate = useNavigate();
  const toast = useToast();
  const { id } = useParams();
  const handleChange = (e) => {
    //validation
    // const { error } = joi.validate([e.target.name], schema[e.target.name], {
    //   abortEarly: true,
    // });
    // console.log("re----re", error);
    // // !error?error[target.name] = "" : error[target.name] = error.details[0].message
    // console.log(e.target.name, "|||||||||");
    // console.log(e.target.value, "||||||||||");

    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData, "%%%%%%%%%");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
   

       putDataEdit(id , formData).then((res)=>{
        let check = res.data.message._original  
  
       })
     
          toast({
            position: "bottom-right",
            render: () => (
              <Box color="white" p={3} bg="blue.500">
                Product Edited successfully
              </Box>
            ),
          });
          navigate("/posts");
 
      
    } catch (error) {
      console.log(error);
    }
  };

 
  useEffect(() => {
    getPostsDetailsById(id)
      .then(({ data: res }) => {
         console.log(res.data , "}}}}")
        console.log(formData, "check me before------");
         setFormData(res.data);
        console.log(formData, "check me after------");
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        // w={{ sm: '100%', md: '540px' }}
        width="80%"
        // height={{ sm: '476px', md: '20rem' }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
        
      >
        <Flex flex={1} bg="blue.200"   >
          <Image
           
            objectFit="cover"
            boxSize="100%"
            src={formData.imageFileSet}
            alt="productImage"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Grid Container>
            {/* for image updating */}
     

            {/* form container */}
            <Grid item xs={12} sm={8}  >
              <Box padding={2} border="2px solid yellow"  w="160%"  backgroundColor="green.400" borderRadius="0px 25px 0px 25px"  marginLeft="-14" >

                <form onSubmit={handleSubmit}>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    border="2px solid black"
                    placeholder="Enter Product Name"
                    name="title"
                    value={formData.title}
                    onChange={(e) => handleChange(e)}
                  />
                  <br />
                  <br />

          
                  <FormLabel>Image</FormLabel>
          <Box 
          border="2px solid black"
           mt={2} mb={1}
           p={4}
           textAlign="start"
           >
              <Input
            type="text"
            border="2px solid black"
            placeholder="Enter Image URL"
            name="imageFileSet"
            value={formData.imageFileSet}
            onChange={(e) => handleChange(e)}
          />
         
          </Box>
    

                  <FormLabel>body</FormLabel>
                  {/* <Input type='text' border="2px solid black" placeholder='enter product body'  /> */}
                  <Editable
                    defaultValue="Enter Product Description"
                    border="2px solid black"
                  >
                    <EditablePreview />
                    <EditableTextarea
                      name="body"
                      value={formData.body}
                      onChange={(e) => handleChange(e)}
                    />
                  </Editable>
                  <br />
                  <br />
                  <Button
                    color={"white"}
                    width="150px"
                    bg={"green"}
                    _hover={{
                      bg: "green.500",
                      border:"2px solid green"
                    }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    ADD
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Center>
  );
}
export default Edit;
