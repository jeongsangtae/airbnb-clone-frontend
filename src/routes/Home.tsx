import { Box, Button, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar, FaRegHeart } from "react-icons/fa";

export default function Home() {
  return (
    <Grid 
      mt={10} 
      px={{base:10, lg:40, }} 
      columnGap={4} 
      rowGap={8} 
      templateColumns={{sm:"1fr", md: "1fr 1fr", lg:"repeat(3, 1fr)", xl:"repeat(4, 1fr)", "2xl":"repeat(5, 1fr)"}}
    >
    {[
        1, 2, 3, 4, 5, 7, 5, 6, 7, 3, 2, 1
      ].map(index =>(
      <VStack key={index} alignItems={"flex-start"}>
        <Box position={"relative"} overflow={"hidden"} mb={3} rounded={"2xl"}>
        <Image minH="280"
        src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720"/>
          <Button variant={"unstyled"} position={"absolute"} top={0} right={0} color="white">
            <FaRegHeart size={"23"} />
          </Button>
        </Box>
        <Box>
          <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text as="b" noOfLines={1} fontSize={"md"}>
            Ganggu-myeon, Yeongdeok-gun, 경상북도, 한국
          </Text>
          <HStack spacing={1}>
            <FaStar size={15} />
            <Text>5.0</Text>
          </HStack>
          </Grid>
          <Text fontSize={"sm"} color="gray.600">Seoul, S. Korea</Text>
        </Box>
        <Text fontSize={"sm"} color="black">
          <Text as="b">₩351,567</Text>/박
        </Text>
      </VStack>
      ))}
    </Grid>
  );
}