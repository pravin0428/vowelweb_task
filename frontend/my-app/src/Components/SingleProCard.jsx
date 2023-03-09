import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SingleProCard({ title, proImage, body, id ,  buttonText , handleCartClick ,price  }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Container maxW={"7xl"}
    //  border="4px solid green"
     >
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 18 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Product Name,
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              {title}
            </Text>
          </Heading>
          <p>{`Price : ${price}`}</p>
          <Text color={"gray.500"}>description : {body}</Text>
          
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            display="flex"
            justifyContent="center"
          >
            {buttonText === "Edit Product Information" ? (
               <Button
               rounded={"full"}
               size={"lg"}
               fontWeight={"normal"}
               px={6}
               colorScheme={"red"}
               bg={"red.400"}
               _hover={{ bg: "red.500" }}
               as={Link}
               to={`/posts/${id}/edit`}
             >
               { buttonText}
             </Button>
            ) : (

              <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}
              
            onClick={handleCartClick}
        
            >
              { buttonText}
            </Button>

            )}


          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"500px"}
            width="500px"
            rounded={"2xl"}
            boxShadow={"2xl"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              // w={"100%"}
              // h={"100%"}
              w="500px"
              height="500px"
              src={proImage}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}




