import {
  Box,
  Button,
  Container,
  Editable,
  EditablePreview,
  EditableTextarea,
  Input,
  useToast,
  FormLabel,
  Heading,
  Image,
} from "@chakra-ui/react";

import React from "react";
import { useState } from "react";
import { postData } from "../HttpSevices/posts";
import { useNavigate } from "react-router-dom";
import ToastComp from "../Components/TostComp";

const initState = {
  title: "",
  imageFileSet: "",
  body: "",
  publishedAt : "",
  price : null,
  quantity : 1
};

function AddPost() {
  const [formData, setFormData] = useState(initState);
  //  console.log(formData,"--------))))-------");
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData).then((res)=>{
      // console.log(res , "----in addpost comp--------");
     if(formData.title !== "" ||  formData.imageFileSet !== "" || formData.body !== "" ||  formData.imageFileSet !== "" ){
      toast({
        position: "bottom-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Product Added successfully
          </Box>
        ),
      });
      navigate("/posts");
     }
      
    }).catch((err) => {
      console.log(err.response.data);
           toast({
          position: "top",
          render: () => (
            <Box color="white" p={3} bg="orange">
             {err.response.data}
            </Box>
          ),
        });
    })
  };

 

  return (
    <Box
    backgroundImage={"https://th.bing.com/th/id/R.39bd85ccce948909803868621a2cc050?rik=Sm0Vu8hXHf5mJw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fHD-Nature-Backgrounds-Images-Download.jpg&ehk=BUfEe8Tl1kYxxNDDlFxMCRKKjwKA64sKN7i%2biRuJ6r4%3d&risl=1&pid=ImgRaw&r=0"}
    bgSize="100%"
    height="550px"
    >
    <Container 
    p={10}
    display="flex"
    //  border="4px solid teal"
     maxW='100%'
     
     height="auto"
     justifyContent="space-between"
 
    >
      <Box 
      // border={ "4px solid teal"}  
      width="70%" 
       borderRadius="0px 0px 0px 30px"
      >
      <Image
            objectFit="cover"
            boxSize="100%"
            src={formData.imageFileSet}
            color="white"
            alt="once you add the image will appeare here"
            borderRadius="0px 0px 0px 30px"
          />
      </Box>

      <Box 
      padding={4} 
      // border="2px solid green"
        borderRadius="0px 30px 0px 0px"
         backgroundColor="rgb(77, 207, 250)"
         width="400px"
      >
        <form onSubmit={handleSubmit}>
        <FormLabel>Date</FormLabel>
          <Input
            type="date"
            border="2px solid black"
            placeholder="Enter Date"
            name="publishedAt"
            value={formData.publishedAt}
            onChange={(e) => handleChange(e)}
          />
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

          <FormLabel>description</FormLabel>
          {/* <Input type='text' border="2px solid black" placeholder='enter product body'  /> */}
          <Editable defaultValue="Enter Product Description" border="2px solid black" p={2}  textAlign="start" >
            <EditablePreview />
            <EditableTextarea
            
              name="body"
              value={formData.body}
              onChange={(e) => handleChange(e)}
            />
          </Editable>

          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            border="2px solid black"
            placeholder="Enter Price Of Product"
            name="price"
            value={formData.price}
            onChange={(e) => handleChange(e)}
          />

          <br />
          <br />


          <Button
          w="200px"
            color={"white"}
            bg="blue.800"
            _hover={{
              bg: "blue",
            }}
            onClick={(e) => handleSubmit(e)}
          >
            ADD
          </Button>
        </form>
      </Box>
    </Container>
    </Box>
  );
}

export default AddPost;
