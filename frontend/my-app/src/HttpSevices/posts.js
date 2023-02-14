import axios from "axios";
// import { wait } from "joi-browser";

export const getAllPosts = () => {
  return axios.get("http://localhost:8080/posts");
};

export const getPostsDetailsById = (id) => {
  // console.log(id , "******");
  return axios.get(`http://localhost:8080/posts/${id}`);
};

export const postData = async(creds) => {
  //  console.log(creds,"----------post data")
  // return axios.post(`http://localhost:8080/posts`, creds);

  let res = await axios.post("http://localhost:8080/posts" , creds)
   return res 

};

export const cartPostData = async(creds) => {
  //  console.log(creds,"----------post data")
  // return axios.post(`http://localhost:8080/posts`, creds);

  let res = await axios.post("http://localhost:8080/cart" , creds)
   return res 

};

// export const postData = (creds) => {
//   fetch("http://localhost:8080/posts", {
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
  let newData = await axios.put(`http://localhost:8080/posts/${id}`, formData)
    return newData
}

export const deletePost = (id) => {
  console.log(id);
  return axios.delete(`http://localhost:8080/posts/${id}`);
};