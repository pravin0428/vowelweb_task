import {
    Card,
      CardBody,
      CardFooter,
      CardHeader,
      Heading,
      Img,
      SimpleGrid,
     
    } from "@chakra-ui/react";
    import React from "react";
    import { useState ,useEffect } from "react";
    import { Link } from "react-router-dom";
    import ButtonComp from "../Components/ButtonComp";
import UserNavbar from "../Components/UserNavbar";
    import { getAllPosts } from "../HttpSevices/posts";
    
    function Home() {
      const [data, setData] = useState([]);
     const [loading , setLoading] = useState(false)
      useEffect(() => {
        setLoading(true)
        getAllPosts()
          .then((res) => {
      console.log(res.data,"in the post-------**------")
      setLoading(false)
            setData(res.data.data);
          })
          .catch((err) => {
            setLoading(false)
            console.log(err.message);
          });
      }, []);

      if(loading){
        return <h1>Loading....</h1>
      }
    
      return (
        <>
        <UserNavbar/>
         
        <SimpleGrid
          spacing={4}
          // border="3px solid"
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          p={1}
        >
          {data?.map((elem) => (
              <div key={elem._id}>
                <Card 
            //  border="3px solid" 
            height="100%"
             
                  >
                  <CardHeader>
                    <Heading size="md" overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      maxWidth="250px">{elem.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Img src={elem.imageFileSet} mb={4} />
                  </CardBody>
                  <CardFooter  
                  // border="2px solid red"
                   margin="auto" 
                   justifyItems="center" 
                   marginTop="-35px" >
                    <Link to={`/user/${elem._id}`}  >
                      <ButtonComp name="Details"    />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
        </SimpleGrid>
        </>
      )
    }
    
    export default Home;