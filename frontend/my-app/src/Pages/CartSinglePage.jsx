import {
  Box,
 useDisclosure,
 useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
 
import SingleProCard from "../Components/SingleProCard";
import { cartPostData, getPostsDetailsById } from "../HttpSevices/posts";

function CartSinglePage() {
  const [proData, setProData] = useState({});
  
  const { isAuth, loading, error, token , role , email } = useSelector((store) => store.auth);
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
    if(isAuth){
    cartPostData(proData).then((res)=>{
        console.log(res.data.message , "----in addpost comp--------");
       
        if(res.data.message === "This product alredy exist in cart"){
          toast({
            position: "bottom-right",
            render: () => (
              <Box color="white" p={3} bg="orange">
                 {res.data.message}
              </Box>
              
            ),
          })
         }else{
          toast({
            position: "bottom-right",
            render: () => (
              <Box color="white" p={3} bg="blue.500">
                Product added to cart
              </Box>
            ),
          })
         }
         navigate("/cart")
      
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
    }else{
      toast({
        position: "bottom-right",
        render: () => (
          <Box color="white" p={3} bg="orange">
             Please login to add the product in cart
          </Box>
        ),
      })
      navigate(`/login/${id}`)
    }
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
