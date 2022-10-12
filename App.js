//alkometri + teeman vaihto

import React, { useState } from "react";
import {View,ScrollView,Alert,Pressable,Switch,Text,TextInput,} from "react-native";
// npm install react-native-numeric-input
import NumericInput from "react-native-numeric-input";
//npm install react-native-simple-radio-button
import RadioForm from "react-native-simple-radio-button";
import StyleSheet from "./styles.js";

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [result, setResult] = useState(0);
  const [gender, setGender] = useState("male");
  const [color, setColor] = useState("#83C5BE");

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  function calculate() {
    if (weight == 0) {
      Alert.alert("Error", "Weight missing!", [{ text: "X" }]);
      setResult(0);
    } else {
      const litres = bottles * 0.33;
      const grams = litres * 8 * 4.5;
      const gramsLeft = grams - burning * hours;
      const burning = weight / 10;
      const resultMale = gramsLeft / (weight * 0.7);
      const resultFemale = gramsLeft / (weight * 0.6);

      if (gender === "male") {
        if (resultMale < 0) {
          setColor("#4F772D"), setResult(0);
        } else {
          if (resultMale >= 3) {
            setColor("#9E2A2B"), setResult(resultMale);
          } else if (resultMale >= 2) {
            setColor("#F4D35E"), setResult(resultMale);
          } else {
            setColor("#4F772D"), setResult(resultMale);
          }
        }
      } else {
        if (resultFemale < 0) {
          setColor("#4F772D"), setResult(0);
        } else {
          if (resultMale >= 3) {
            setColor("#9E2A2B"), setResult(resultFemale);
          } else if (resultMale >= 2) {
            setColor("#F4D35E"), setResult(resultFemale);
          } else {
            setColor("#4F772D"), setResult(resultFemale);
          }
        }
      }
    }
  }

  return (
    <ScrollView
      contentContainerStyle={[
        StyleSheet.containerScroll,
        isEnabled ? StyleSheet.containerDark : StyleSheet.containerLight,
      ]}
    >
      <View style={StyleSheet.container}>
        <Switch
          thumbColor={isEnabled ? "#fff" : "#83C5BE"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={isEnabled ? StyleSheet.headDark : StyleSheet.headLight}>
          Alcometer
        </Text>

        <Text style={isEnabled ? StyleSheet.textDark : StyleSheet.textLight}>
          Weight
        </Text>
        <TextInput
          style={StyleSheet.textInput}
          value={weight}
          onChangeText={(text) => setWeight(text)}
          keyboardType="decimal-pad"
        />

        <Text style={isEnabled ? StyleSheet.textDark : StyleSheet.textLight}>
          Bottles
        </Text>
        <NumericInput
          onChange={(bottles) => setBottles(bottles)}
          minValue={0}
          textColor={isEnabled ? "white" : "black"}
          leftButtonBackgroundColor={"#84A59D"}
          rightButtonBackgroundColor={"#84A59D"}
        />

        <Text style={isEnabled ? StyleSheet.textDark : StyleSheet.textLight}>
          Hours
        </Text>
        <NumericInput
          onChange={(hours) => setHours(hours)}
          minValue={0}
          textColor={isEnabled ? "white" : "black"}
          rounded
          leftButtonBackgroundColor={"#84A59D"}
          rightButtonBackgroundColor={"#84A59D"}
        />
        <RadioForm
          style={StyleSheet.padding}
          buttonColor={"#84A59D"}
          labelStyle={isEnabled ? StyleSheet.labelDark : StyleSheet.labelLight}
          selectedButtonColor={"#84A59D"}
          buttonsize={10}
          radio_props={genders}
          initial={0}
          onPress={(value) => {
            setGender(value);
          }}
        />
      </View>
      <View style={StyleSheet.container}>
        <View style={StyleSheet.buttonContainer}>
          <Text style={[StyleSheet.headLight, { color: color }]}>
            {result.toFixed(2)}
          </Text>
          <Pressable style={StyleSheet.button} onPress={calculate}>
            <Text style={StyleSheet.buttonText}>Calculate</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}