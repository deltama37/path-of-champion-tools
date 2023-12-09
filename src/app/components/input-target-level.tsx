import { Flex, FormLabel, Select } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { levelDataList } from "../data";

export const InputTargetLevel: FC<{
  setTargetLevel: Dispatch<SetStateAction<number>>;
}> = ({ setTargetLevel }) => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <FormLabel mb={0} htmlFor="inputTargetLevel">
        目標のレベル
      </FormLabel>
      <Select
        id="inputTargetLevel"
        w={24}
        onChange={(e) => setTargetLevel(Number(e.target.value))}
        defaultValue={30}
      >
        {levelDataList.map((levelData) => {
          return (
            <option key={levelData.level} value={levelData.level}>
              {levelData.level}
            </option>
          );
        })}
      </Select>
    </Flex>
  );
};
