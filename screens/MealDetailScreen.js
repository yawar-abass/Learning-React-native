import React from "react";
import { Text, View } from "react-native";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Meal Detials</Text>
    </View>
  );
};

export default MealDetailScreen;
