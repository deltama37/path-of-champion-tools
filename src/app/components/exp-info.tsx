import { mapDataList } from "@/app/data";
import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

export const ExpInfo: FC<{ requiredExp: number }> = ({ requiredExp }) => {
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
            {Math.ceil(requiredExp / mapData.experience)}
            周/
            {Math.ceil(requiredExp / mapData.experience) * mapData.matches}戦
          </Text>
        </Box>
      ))}
    </>
  );
};
