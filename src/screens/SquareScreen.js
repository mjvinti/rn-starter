import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        color="Red"
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
