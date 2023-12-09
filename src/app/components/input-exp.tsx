import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";

export const InputExp: FC<{
  setCurrentExp: Dispatch<SetStateAction<number>>;
}> = ({ setCurrentExp }) => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <FormLabel mb={0} htmlFor="inputCurrentExp">
        現在の経験値
      </FormLabel>
      <Input
        id="inputCurrentExp"
        onChange={(e) => {
          setCurrentExp(Number(e.target.value));
        }}
        w={24}
        type="number"
        placeholder="0"
      />
    </Flex>
  );
};
