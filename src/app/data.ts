export const levelDataList: {
  level: number;
  threshold: number;
  totalThreshold: number;
}[] = [
  { level: 1, threshold: 0, totalThreshold: 0 },
  { level: 2, threshold: 50, totalThreshold: 50 },
  { level: 3, threshold: 100, totalThreshold: 150 },
  { level: 4, threshold: 150, totalThreshold: 300 },
  { level: 5, threshold: 200, totalThreshold: 500 },
  { level: 6, threshold: 300, totalThreshold: 800 },
  { level: 7, threshold: 450, totalThreshold: 1250 },
  { level: 8, threshold: 500, totalThreshold: 1750 },
  { level: 9, threshold: 560, totalThreshold: 2310 },
  { level: 10, threshold: 670, totalThreshold: 2980 },
  { level: 11, threshold: 800, totalThreshold: 3780 },
  { level: 12, threshold: 930, totalThreshold: 4710 },
  { level: 13, threshold: 1070, totalThreshold: 5780 },
  { level: 14, threshold: 1210, totalThreshold: 6990 },
  { level: 15, threshold: 1360, totalThreshold: 8350 },
  { level: 16, threshold: 1520, totalThreshold: 9870 },
  { level: 17, threshold: 1690, totalThreshold: 11560 },
  { level: 18, threshold: 1860, totalThreshold: 13420 },
  { level: 19, threshold: 2040, totalThreshold: 15460 },
  { level: 20, threshold: 2220, totalThreshold: 17680 },
  { level: 21, threshold: 2410, totalThreshold: 20090 },
  { level: 22, threshold: 2610, totalThreshold: 22700 },
  { level: 23, threshold: 2810, totalThreshold: 25510 },
  { level: 24, threshold: 3020, totalThreshold: 28530 },
  { level: 25, threshold: 3230, totalThreshold: 31760 },
  { level: 26, threshold: 3450, totalThreshold: 35210 },
  { level: 27, threshold: 3670, totalThreshold: 38880 },
  { level: 28, threshold: 3900, totalThreshold: 42780 },
  { level: 29, threshold: 4140, totalThreshold: 46920 },
  { level: 30, threshold: 4370, totalThreshold: 51290 },
];

export const mapDataList: {
  name: string;
  experience: number;
  matches: number;
}[] = [
  { name: "ティーモ(4戦)", experience: 100, matches: 4 },
  { name: "ガレン(7戦) or ルル(7戦)", experience: 305, matches: 7 },
  {
    name: "ガングプランク(7戦) or エズリアル(7戦)",
    experience: 605,
    matches: 7,
  },
  { name: "ゼド(7戦) or ノーチラス", experience: 985, matches: 7 },
  { name: "ゼド(8戦)", experience: 1110, matches: 8 },
  { name: "ビクター(6戦)", experience: 1245, matches: 6 },
  { name: "ビクター(7戦) or ドレイブン(7戦)", experience: 1425, matches: 7 },
  { name: "カイ＝サ(7戦) or スレッシュ(7戦)", experience: 1925, matches: 7 },
  { name: "ガリオ(9戦)", experience: 3100, matches: 9 },
  { name: "オレリオン・ソル(12戦)", experience: 4505, matches: 12 },
  { name: "ウィークリーアドベンチャー☆0.5(7戦)", experience: 170, matches: 7 },
  { name: "ウィークリーアドベンチャー☆3.5(3戦)", experience: 1230, matches: 3 },
  { name: "ウィークリーアドベンチャー☆3.5(7戦)", experience: 3015, matches: 7 },
  { name: "ウィークリーアドベンチャー☆4(3戦)", experience: 1505, matches: 3 },
  { name: "ウィークリーアドベンチャー☆4(7戦)", experience: 3200, matches: 7 },
];
