"use client";

import { ExpInfo } from "@/app/components/exp-info";
import { InputExp } from "@/app/components/input-exp";
import { InputTargetLevel } from "@/app/components/input-target-level";
import { RequiredExp } from "@/app/components/required-exp";
import { levelDataList } from "@/app/data";
import { Box, FormControl } from "@chakra-ui/react";
import { useState } from "react";

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
        <ExpInfo requiredExp={requiredExp} />
      </Box>
    </FormControl>
  );
};
