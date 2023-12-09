import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const RequiredExp: FC<{ requiredExp: number }> = ({ requiredExp }) => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Text mb={0} mr={4}>
        必要な経験値
      </Text>
      <Text w={24}>{requiredExp}</Text>
    </Flex>
  );
};
