import { Box, useDisclosure, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import SingleProCard from "../Components/SingleProCard";
import UserNavbar from "../Components/UserNavbar";
import { cartPostData, getPostsDetailsById } from "../HttpSevices/posts";
import { addItemToCart } from "../redux/cart/cart.action";

function CartSinglePage() {
  const [proData, setProData] = useState({});
  console.log(proData, "//////\\\\\\");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const { isAuth, loading, error, token, role, email } = useSelector(
    (store) => store.auth
  );
  const { id } = useParams();
  console.log(id, "|||");
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    getPostsDetailsById(id)
      .then((res) => {
        console.log(res.data, "in the Singlepost-------**------");
        setProData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleAddToCart = () => {
    // console.log(el)
    dispatch(
      addItemToCart({
        ...proData,
        productId: id,
        count: 1,
      })
    );
    navigate("/cart");
  };

  return (
    <>
      <UserNavbar />
      <SingleProCard
        key={proData._id}
        title={proData.title}
        proImage={proData.imageFileSet}
        body={proData.description}
        id={proData._id}
        buttonText="Add To Cart"
        price={proData.price}
        handleCartClick={handleAddToCart}
      />
    </>
  );
}
export default CartSinglePage;
