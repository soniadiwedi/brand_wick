import React, { useState } from "react";
import Register from "./Register";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate = useNavigate();
   const [show,setshow]=useState(false)
   
  const [inp, setInp] = useState({ name: "", email: "", password: "" });

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
        `https://sore-plum-donkey-tie.cyclic.app/api/auth/login`,
        inp
      );
      console.log("response ",res.data);
     let token=res.data.token
     let user = res.data.user
     localStorage.setItem("token",JSON.stringify(token))
     localStorage.setItem("user",JSON.stringify(user))
      toast.success(res.data.message, {
        position: "top-right", 
        autoClose: 3000, 
      });
      setTimeout(() => {
        navigate("/home")
      }, 5000);
    } catch (err) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right", 
        autoClose: 3000, 
      });
    }
  };
  return (
    <VStack>
    <FormControl id="email" isRequired>
      <FormLabel>Email </FormLabel>
        <Input type="email" placeholder="Enter Your Email" name="email" onChange={handleInput}/>
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

    <Button colorScheme="green" w="100%" style={{marginTop:"20px"}} onClick={handleLogin}>Log In</Button>
   
    
  </VStack>
  );
};

export default Login;

