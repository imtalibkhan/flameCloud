import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import {ChevronDownIcon} from '@chakra-ui/icons'



export default function Navbar() {
    return (
        <Box 
        p={{ base: "4", md: "6" }}
            borderBottom={'3px solid lightgray'} 
            w={'1118px'} 
            pos={'sticky'} 
            top={0} 
            zIndex={100} 
            bgColor={'white'}
            m='0 192px'
        >
            <HStack justifyContent={'start'}>
                <HStack mr='31px'>
                    <Image src={'creativeproxies.png'} alt='logo' />
                    <Heading style={contents}>CreativeProxies</Heading>
                </HStack>
                <HStack alignItems={'center'} gap='24px'>
                    <Text style={con}>Pricing</Text>
                    <Text style={con}>Exploring Tools <ChevronDownIcon /></Text>
                    <Text style={con}>Resources <ChevronDownIcon /></Text>
                    <Text style={con}>FAQs</Text>
                    <Text style={con}>Blogs</Text>
                </HStack>
                <HStack pl='50px' pr='28px'>
                    <Image src={'discord.svg'} alt="discord" />
                    <Text style={{con, color:'#5865F2'}}>Join Discord</Text>
                    <Box w='0px' h='31.5px' border={'1px solid #D9D8D6'}></Box>
                    <Text style={con}>Log in</Text>
                </HStack>
                <Button ml='50px' p='10px 22px' borderRadius={'5px'} bgColor={'#077BFF'} color='white'>Get Started</Button>
            </HStack>
        </Box>
    )
};


const con = {
    color:'#111822',
    fontSize:'16px',
    lineHeight:'19px',
    letterSpacing:'-0.02em',
    fontWeight:500
    
    
}

const contents = {
    
   
    letterSpacing:'-0.02em',
    color:'#111822',
    fontSize:'26px',
    lineHeight:'31px',
   
    fontWeight:600
}



