import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import { getColumnCount, wp } from "@/helpers/common";
import ImageCard from "./ImageCard";

const ImageGrid = ({ images }: { images: any }) => {
  const columns = getColumnCount();

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={columns}
        renderItem={({ item, index }) => (
          <ImageCard item={item} columns={columns} index={index} />
        )}
        contentContainerStyle={styles.listContainerStyle}
        estimatedItemSize={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 3,
    width: wp(100),
  },

  listContainerStyle: {
    paddingHorizontal: wp(4),
  },
});

export default ImageGrid;
