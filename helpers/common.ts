import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const wp = (perecentage: any) => {
  const width = deviceWidth;
  return (perecentage * width) / 100;
};

export const hp = (perecentage: any) => {
  const height = deviceHeight;
  return (perecentage * height) / 100;
};

export const getColumnCount = () => {
  if (deviceWidth >= 1024) {
    //desktop
    return 4;
  } else if (deviceWidth >= 768) {
    //tablet
    return 3;
  } else {
    //phone
    return 2;
  }
};
