import axios from "axios";
// import { wait } from "joi-browser";

export const getAllPosts = () => {
  return axios.get("https://vowel-xj54.onrender.com/posts");
};

export const getCartData = () => {
  return axios.get("https://vowel-xj54.onrender.com/cart");
};

export const getPostsDetailsById = (id) => {
  // console.log(id , "******");
  return axios.get(`https://vowel-xj54.onrender.com/posts/${id}`);
};

export const postData = async(creds) => {
  //  console.log(creds,"----------post data")
  // return axios.post(`https://vowel-xj54.onrender.com/posts/posts`, creds);

  let res = await axios.post("https://vowel-xj54.onrender.com/posts" , creds)
   return res 

};

export const cartPostData = async(creds) => {
  //  console.log(creds,"----------post data")
  // return axios.post(`https://vowel-xj54.onrender.com/posts/posts`, creds);

  let res = await axios.post("https://vowel-xj54.onrender.com/cart" , creds)
   return res 

};

// export const postData = (creds) => {
//   fetch("https://vowel-xj54.onrender.com/posts/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(creds)
//   })
//     .then((res) => res.json())
//     .then((res) => {
     
//         console.log(res  , "res----*******")
      
//     });
// }


export const putDataEdit  = async(id , formData) =>{
  let newData = await axios.put(`https://vowel-xj54.onrender.com/posts/${id}`, formData)
    return newData
}

export const deletePost = (id) => {
  console.log(id);
  return axios.delete(`https://vowel-xj54.onrender.com/posts/${id}`);
};

export const deleteCartData = (id) => {
  console.log(id);
  return axios.delete(`https://vowel-xj54.onrender.com/cart/${id}`);
};