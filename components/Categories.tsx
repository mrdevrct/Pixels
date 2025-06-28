import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";
import Animated, { FadeInRight } from "react-native-reanimated";
import { data } from "@/constants/data";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";

interface CategoriesProps {
  activeCategory: string | null;
  handleChangeCategory: (category: string | null) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  handleChangeCategory,
}) => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <CategoryItem
          title={item}
          index={index}
          isActive={activeCategory === item}
          handleChangeCategory={handleChangeCategory}
        />
      )}
    />
  );
};

interface CategoryItemProps {
  title: string;
  index: number;
  isActive: boolean;
  handleChangeCategory: (category: string | null) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  index,
  isActive,
  handleChangeCategory,
}) => {
  const color = isActive ? theme.colors.white : theme.colors.neutral(0.8);
  const backgroundColor = isActive
    ? theme.colors.neutral(0.8)
    : theme.colors.white;

  return (
    <Animated.View
      entering={FadeInRight.delay(index * 200)
        .duration(1000)
        .springify()
        .damping(14)}
    >
      <Pressable
        style={[styles.category, { backgroundColor }]}
        onPress={() => handleChangeCategory(isActive ? null : title)}
      >
        <Text style={[styles.title, { color }]}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: wp(4),
    gap: 8,
  } as ViewStyle,

  category: {
    padding: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    borderRadius: theme.radius.lg,
    borderCurve: "continuous",
  } as ViewStyle,

  title: {
    fontSize: hp(1.8),
    fontWeight: "500",
  } as TextStyle,
});

export default Categories;
