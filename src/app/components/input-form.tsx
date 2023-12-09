"use client";

import { Box, Flex, FormControl, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { levelDataList, mapDataList } from "../data";
import { InputExp } from "./input-exp";
import { InputTargetLevel } from "./input-target-level";
import { RequiredExp } from "./required-exp";

const ExpInfo: FC<{ targetLevel: number }> = ({ targetLevel }) => {
  const levelData = levelDataList.find(
    (levelData) => levelData.level === targetLevel
  );

  if (levelData == null) {
    return <></>;
  }

  return (
    <>
      {mapDataList.map((mapData) => (
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          key={mapData.name}
          mb={2}
        >
          <Text minW={320}>{mapData.name}</Text>
          <Text minW={16} textAlign={"right"}>
            {Math.ceil(levelData.totalThreshold / mapData.experience)}周
          </Text>
        </Flex>
      ))}
    </>
  );
};

export const InputForm = () => {
  const [currentExp, setCurrentExp] = useState(0);
  const [targetLevel, setTargetLevel] = useState(30);
  const requiredExp =
    levelDataList[targetLevel - 1] == null
      ? 0
      : levelDataList[targetLevel - 1].totalThreshold - currentExp ?? 0;

  return (
    <FormControl>
      <Box>
        <InputExp setCurrentExp={setCurrentExp} />
      </Box>
      <Box mt={4}>
        <InputTargetLevel setTargetLevel={setTargetLevel} />
      </Box>

      <Box mt={16}>
        <RequiredExp requiredExp={requiredExp} />
      </Box>

      <Box mt={16}>
        <ExpInfo targetLevel={targetLevel} />
      </Box>
    </FormControl>
  );
};
