"use client";

import { Box, FormControl, Text } from "@chakra-ui/react";
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
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          key={mapData.name}
          mb={2}
        >
          <Text>{mapData.name}</Text>
          <Text textAlign={"right"}>
            {Math.ceil(levelData.totalThreshold / mapData.experience)}周
          </Text>
        </Box>
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
      <Box mt={2}>
        <InputTargetLevel setTargetLevel={setTargetLevel} />
      </Box>

      <Box mt={6}>
        <RequiredExp requiredExp={requiredExp} />
      </Box>

      <Box mt={6}>
        <ExpInfo targetLevel={targetLevel} />
      </Box>
    </FormControl>
  );
};
