import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Checkbox, Textarea, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
 

function Payment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    shipping: false,
    notes: '',
  });

  const toast = useToast()
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
 
    toast({
        position: "top",
        render: () => (
          <Box color="white" p={3} bg="green.500">
             Payment Success
          </Box>
        ),
      });
      navigate("/")
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  return (
    <Box maxW="container.lg" mx="auto" p={4}>
      <Heading as="h1" size="2xl" mb={8}>
        Checkout
      </Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl id="firstName" mb={4}>
          <FormLabel>First Name</FormLabel>
          <Input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </FormControl>
        <FormControl id="lastName" mb={4}>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </FormControl>
        <FormControl id="phone" mb={4}>
          <FormLabel>Phone</FormLabel>
          <Input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
        </FormControl>
        <FormControl id="address" mb={4}>
          <FormLabel>Address</FormLabel>
          <Input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </FormControl>
        <FormControl id="city" mb={4}>
          <FormLabel>City</FormLabel>
          <Input type="text" name="city" value={formData.city} onChange={handleInputChange} />
        </FormControl>
        <FormControl id="state" mb={4}>
          <FormLabel>State</FormLabel>
          <Input type="text" name="state" value={formData.state} onChange={handleInputChange} />
        </FormControl>
        <FormControl id="zip" mb={4}>
          <FormLabel>Zip</FormLabel>
          <Input type="text" name="zip" value={formData.zip} onChange={handleInputChange} />
        </FormControl>
        <Checkbox id="shipping" name="shipping" mb={4} isChecked={formData.shipping} onChange={handleCheckboxChange}>
          Shipping address is the same as my billing address
        </Checkbox>
        <FormControl id="notes" mb={4}>
          <FormLabel>Notes</FormLabel>
          <Textarea name="notes" value={formData.notes} onChange={handleInputChange} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>Place Order</Button>
      </Box>
    </Box>
  );
}

export default Payment;
