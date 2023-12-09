import { levelDataList, mapDataList } from "@/app/data";
import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

export const ExpInfo: FC<{ targetLevel: number }> = ({ targetLevel }) => {
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
            {Math.ceil(levelData.totalThreshold / mapData.experience)}周/
            {Math.ceil(levelData.totalThreshold / mapData.experience) *
              mapData.matches}
            戦
          </Text>
        </Box>
      ))}
    </>
  );
};
