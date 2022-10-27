import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaGithubAlt, FaComment } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text textTransform={"uppercase"} color="gray.500" fontSize="xs" as="b">Or</Text>
        <Divider />
      </HStack>
      <VStack>
        <Button
          as="a"
          href="https://github.com/login/oauth/authorize?client_id=11c00206d771c01a81bf&scope=read:user,user:email"
          w={"100%"}
          leftIcon={<FaGithubAlt />}>
          Continue with GitHub
        </Button>
        <Button w={"100%"} leftIcon={<FaComment />} colorScheme={"yellow"}>
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}

