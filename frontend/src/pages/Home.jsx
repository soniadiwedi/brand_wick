import React from 'react'
import { Box, Container, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Login from './Login'
import Register from './Register'

export const Home = () => {
  return (
   <Container maxW='xl' centerContent>
    <Box bg={'white'} p={5} w="100%"  borderRadius='lg' borderWidth="2px" >
    <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab w={'50%'}>Login</Tab>
    <Tab w={'50%'}>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Register/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
    
   </Container>
  )
}
