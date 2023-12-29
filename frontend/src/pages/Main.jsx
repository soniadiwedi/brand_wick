import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate=useNavigate()
  const handleLogout = () => {
   
    localStorage.removeItem('token');
   navigate("/")
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
       <h1>
       Welcome to The Brand Wick Home Page
        </h1> 
        <Button colorScheme="red" 
        mt={4} onClick={handleLogout}>Log Out</Button>
        </div>
  )
}

export default Main