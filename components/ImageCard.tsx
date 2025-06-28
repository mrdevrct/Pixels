import { Pressable, Image, StyleSheet } from "react-native";
import React from "react";

const ImageCard = ({
  item,
  columns,
  index,
}: {
  item: any;
  columns: number;
  index: number;
}) => {
  return (
    <Pressable>
      <Image style={styles.image} source={{ uri: item?.webformatURL }} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
});

export default ImageCard;
