import { Box, Center, Heading } from "@chakra-ui/react";
import { InputForm } from "./components/input-form";

export default function Home() {
  return (
    <Box m={4}>
      <Center>
        <Heading as="h1" size="lg" mb={6}>
          それぞれの旅路周回計算
        </Heading>
      </Center>
      <InputForm />
    </Box>
  );
}
