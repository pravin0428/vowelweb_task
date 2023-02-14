import {
  Box,
 useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
 
import SingleProCard from "../Components/SingleProCard";
import { cartPostData, getPostsDetailsById } from "../HttpSevices/posts";

function CartSinglePage() {
  const [proData, setProData] = useState({});
  
 
  const { id } = useParams();
   console.log(id , "|||");
   const toast = useToast();
   const navigate = useNavigate();
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

 

 


  const handleAddToCart = () =>{
      cartPostData(proData).then((res)=>{
      console.log(res , "----in addpost comp--------");
     if(proData.title !== "" ||  proData.imageFileSet !== "" || proData.body !== "" ||  proData.imageFileSet !== "" ){
      toast({
        position: "bottom-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Product added to cart
          </Box>
        ),
      });
      navigate("/");
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
    
  }

  return (
    <>
      <SingleProCard
        key={proData._id}
        title={proData.title}
        proImage={proData.imageFileSet}
        body={proData.description}
        id={proData._id}
        buttonText="Add To Cart"
        handleCartClick={handleAddToCart}
      />
    </>
  );
}
export default CartSinglePage;
