import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react";
import { VStack, Image, SimpleGrid } from "@chakra-ui/react";

import { featureBox, servicesBox } from "../Data/data";

export default function Landing() {
  return (
    <Box pt={"95px"} textAlign={"center"}>
      <Text style={content} textAlign={"center"}>
        WELCOME TO CREATIVE PROXIES
      </Text>
      <Heading style={contents}>
        We are the{" "}
        <Highlight query="Fastest" styles={{ color: "#077BFF" }}>
          Fastest
        </Highlight>{" "}
        and the{" "}
        <Highlight query="Most" styles={{ color: "#16D113" }}>
          Most
        </Highlight>{" "}
        <Highlight query="Reliable" styles={{ color: "#16D113" }}>
          Reliable
        </Highlight>{" "}
        Proxy Service since 2020
      </Heading>
      <Image src={"blueStar.svg"} pos={"absolute"} top="192px" left="800px" />
      <Image src={"greenStar.svg"} pos={"absolute"} top="265px" left="523px" />
      <Text style={bodyStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue
        sit amet mollis molestie.
      </Text>
      <Button
        w="222px"
        h="47px"
        p="10px"
        borderRadius={"10px"}
        bgColor={"#077BFF"}
        color="white"
      >
        Get Started
        <ArrowForwardIcon />
      </Button>

      <Box
        background="rgba(0, 182, 122, 0.1)"
        borderRadius="10px"
        w="222px"
        h="90px"
        py="16px"
        m="22px auto"
      >
        <HStack mx="35.5px">
          <Box
            bgColor={"#00B67A"}
            w="28.31px"
            h="28.31px"
            px="4.25px"
            py="4.78px"
          >
            <Image src={"Star.svg"} alt="star" />
          </Box>
          <Box
            bgColor={"#00B67A"}
            w="28.31px"
            h="28.31px"
            px="4.25px"
            py="4.78px"
          >
            <Image src={"Star.svg"} alt="star" />
          </Box>
          <Box
            bgColor={"#00B67A"}
            w="28.31px"
            h="28.31px"
            px="4.25px"
            py="4.78px"
          >
            <Image src={"Star.svg"} alt="star" />
          </Box>
          <Box
            bgColor={"#00B67A"}
            w="28.31px"
            h="28.31px"
            px="4.25px"
            py="4.78px"
          >
            <Image src={"Star.svg"} alt="star" />
          </Box>
          <Box
            bgColor={"#00B67A"}
            w="28.31px"
            h="28.31px"
            px="4.25px"
            py="4.78px"
          >
            <Image src={"Star.svg"} alt="star" zIndex={10} pos={"relative"} />
            <Box
              w="12px"
              h="28.31px"
              bgColor={"#dcdce6"}
              pos="relative"
              top="-19px"
              left="8px"
            ></Box>
          </Box>
        </HStack>
        <HStack mx="16px" gap="0" mt="9px">
          <Text style={{ content, opacity: 1, fontSize: "14.5px" }}>
            Rated 4.5 on
          </Text>
          <Image src={"greenRatingStar.svg"} alt="star" w="23.23px" />
          <Text
            style={{
              content,
              opacity: 1,
              fontSize: "14.5px",
              paddingTop: "5px",
            }}
          >
            Trustpilot
          </Text>
        </HStack>
        <Image
          src={"greenStarMark.svg"}
          alt="mark on green star"
          zIndex={2}
          pos="relative"
          top="-12.1px"
          left="116.8px"
        />
      </Box>
      <Box w="588px" border={"1px solid #d9d8d6"} m="36.36px auto"></Box>

      <SimpleGrid
        columns={{ base: 2, lg: 4 }}
        gap="16px"
        mb="139px"
        mx={{ base: "90px", lg: "192px" }}
      >
        {servicesBox?.map((el, i) => (
          <HStack
            key={i}
            box-sizing="border-box"
            width="254px"
            height="95px"
            borderRadius="5px"
            bgColor={el.bgColor}
            border={el.border}
            p="26px 32px"
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              background={el.background}
              p="8px"
              w="40px"
              h="40px"
              borderRadius={"8px"}
            >
              <Image src={el.image} alt={el.image} w="24px" h="24px" />
            </Box>
            <Text textAlign={"left"} w="137px">
              {el.text}
            </Text>
          </HStack>
        ))}
      </SimpleGrid>

      <Box
        w="full"
        bgColor={"#0566D4"}
        p={{ base: "166px 90px", lg: "115px 192px" }}
        mb="177px"
      >
        <Heading
          style={{ featureHead, fontSize: { base: "55px", lg: "36px" } }}
          color="#ffffff"
        >
          Why we are the Best Proxy Providers
        </Heading>
        <Text
          style={{
            featureText,
            fontSize: { base: "27.5px", lg: "18px" },
            opacity: 0.5,
          }}
          color="#ffffff"
          m="10px auto 30px auto"
          w="465px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
        <SimpleGrid
          columns={{ base: 2, lg: 4 }}
          rowGap={"27px"}
          columnGap={"12px"}
          w="1148px"
        >
          {featureBox?.map((el, i) => (
            <VStack
              border={"1px solid rgba(255, 255, 255, 0.25)"}
              p="22px 14px"
              borderRadius={"5px"}
              w="248px"
              h="160px"
              alignItems={"flex-start"}
            >
              <Box w="24px" h="24px">
                <Image src={el.image} alt={el.image} />
              </Box>
              <Heading
                style={{
                  featureHead,
                  fontSize: { base: "30.5px", lg: "20px" },
                }}
                color="#ffffff"
              >
                {el.heading}
              </Heading>
              <Text style={featureText} textAlign={"left"} color="#ffffff">
                {el.text}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
      <Text fontSize={"36px"} fontWeight={600}>
        <Highlight query={"Deliver!"} styles={{ color: "#077BFF" }}>
          You choose, we Deliver!
        </Highlight>
      </Text>
      <Text
        style={{ featureText, fontSize: "18px", opacity: 0.5 }}
        color="#111822"
        w="465px"
        m="auto"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue
        sit amet mollis molestie.
      </Text>
    </Box>
  );
}

const bodyStyle = {
    margin: "17px auto",
  fontSize: "22px",
  letterSpacing: "-0.02em",
  lineHeight: "26px",
  opacity: "0.5",
  width: "509px",
  fontWeight: 500,
  color: "#111822",
  textAlign: "center",
};
const content = {
  fontWeight: 600,
  letterSpacing: "-0.02em",
  fontSize: { base: "40px", lg: "16px" },
  lineHeight: { base: "48px", lg: "19px" },
  color: "#111822",
  opacity: "0.5",
};

const featureHead = {
  fontWeight: 600,
  letterSpacing: "-0.02em",
};
const contents = {
  fontWeight: 600,
  fontSize: { base: "86px", lg: "56px" },
  lineHeight: { base: "103px", lg: "67px" },
  letterSpacing: "-0.02em",
  margin: "3px auto",
  color: "#111822",
  width: "824px",
};

const featureText = {
  lineHeight: { base: "26px", lg: "17px" },
  fontSize: { base: "21px", lg: "14px" },
  fontWeight: 400,
  opacity: 0.5,
  letterSpacing: "-0.02em",
};



