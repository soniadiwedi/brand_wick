import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'

import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const [show,setshow]=useState(false)

  const [inp, setInp] = useState({ name: "",username:"" ,email: "",phone:"", password: "" });
 const handleShow=()=>{
    return setshow(!show)
   }
  const handleInput = (e) => {
    let val = e.target.value;
    let name = e.target.name;
    setInp((prev) => {
      return { ...prev, [name]: val };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(
        `https://sore-plum-donkey-tie.cyclic.app/api/auth/register`,
        inp
      );
      console.log("res", res.data.message);
      toast.success(res.data.message, {
        position: "top-right", 
        autoClose: 3000, 
      });
      window.location.href="/"
   
    } catch (err) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right", 
        autoClose: 3000, 
      });
    }
  };

  return (
    <VStack>
       <FormControl id="name" isRequired>
      <FormLabel>Name </FormLabel>
        <Input type="text" placeholder="Enter Your Name" name="name" onChange={handleInput}/>
    </FormControl>
    <FormControl id="username" isRequired>
      <FormLabel>User Name </FormLabel>
        <Input type="text" placeholder="Enter Your UserName" name="username" onChange={handleInput}/>
    </FormControl>
    <FormControl id="email" isRequired>
      <FormLabel>Email </FormLabel>
        <Input type="email" placeholder="Enter Your Email" name="email" onChange={handleInput}/>
    </FormControl>


    <FormControl id="phone" isRequired>
      <FormLabel>Mobile No. </FormLabel>
        <Input type="number" placeholder="Enter Your Mobile No." name="phone" onChange={handleInput}/>
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Password </FormLabel>
      <InputGroup>
       <Input type={show?"text":"password"} placeholder="Enter Your Password" name="password" onChange={handleInput}/>
       <InputRightElement>
        <Button onClick={handleShow} h="2" w='5' size="sm">{show?'Hide':'Show'}</Button>
       </InputRightElement>
      </InputGroup>
    </FormControl>

    <Button colorScheme="green" w="100%" style={{marginTop:"20px"}} onClick={handleLogin}>Sign Up</Button>
   
    
  </VStack>
  );
};

export default Register;
