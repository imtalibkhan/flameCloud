import { HStack, Heading, Image, Text,  VStack, Button} from "@chakra-ui/react";


export default function Footer() {
    return (
        <HStack p='34px 10px' borderTop={'1px solid #D9D8D6'} h='224px' mb='14px' mx={{base:'90px',lg:'192px'}}>
            <VStack justifyContent={'center'} alignItems={'flex-start'} mr='240px'>
                <HStack>
                    <Image src={'creativeproxies.png'} alt='logo' />
                    <Heading style={contents}>CreativeProxies</Heading>
                </HStack>
                <Text style={cont2} pl='11px' w='225px'>Copyright © 2023 Creative Proxies.
                    All rights reserved.
                </Text>
                <Button
                    border='1px solid #5865F2'
                    w={{base:'376px',lg:'221px'}}
                    h={{base:'75px',lg:'44px'}}
                    boxSizing="border-box"
                    background={'rgba(88,101,242,0.1)'}
                    borderRadius={{base:'17px',lg:'10px'}}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={{base:'17px',lg:'10px'}}
                    p={{base:'17px',lg:'10px'}}
                >
                    <Image src={'discord.svg'} alt="discord" />
                    <Text style={{cont3, color:'#5865F2'}}>Join Our Discord</Text>
                </Button>
            </VStack>

            {/* 2nd Box */}
            <HStack justifyContent={'space-evenly'} gap='70px' alignItems={"flex-start"} pt='34px'>
                <VStack alignItems={'flex-start'} gap='10px' w='165px'>
                    <Text style={cont2}>Explore</Text>
                    <Text style={cont3}>Proxy Location Checker</Text>
                    <Text style={cont3}>IPv6 Compatibility</Text>
                    <Text style={cont3}>Blogs</Text>
                </VStack>
                <VStack alignItems={'flex-start'} gap='10px' w='165px'>
                    <Text style={cont2}>Resources</Text>
                    <Text style={cont3}>FAQs</Text>
                    <Text style={cont3}>Branding</Text>
                    <Text style={cont3}>Network Information</Text>
                    <Text style={cont3}>Imprint</Text>
                </VStack>
                <VStack alignItems={'flex-start'} gap='10px' w='165px'>
                    <Text style={cont2}>Support</Text>
                    <Text style={cont3}>Status</Text>
                    <Text style={cont3}>Terms of Service</Text>
                    <Text style={cont3}>Privacy Policy</Text>
                </VStack>
            </HStack>
        </HStack>
    )
};




const contents = {
    lineHeight:{base:'53px',lg:'31px'},
    fontSize:{base:'44px',lg:'26px'},
    fontWeight:600,
    color:'#111822',
   
    letterSpacing:'-0.02em'
}


const cont2 = {
    fontSize:{base:'24px',lg:'14px'},
    fontWeight:400,
    lineHeight:{base:'29px',lg:'17px'},
    color:'#111822',
    
    letterSpacing:'-0.02em',
    opacity:0.5
}

const cont3 = {
    fontSize:{base:'27px',lg:'16px'},
    fontWeight:500,
    lineHeight:{base:'33px',lg:'19px'},
   
    color:'#111822',
 
    letterSpacing:'-0.02em'
}
