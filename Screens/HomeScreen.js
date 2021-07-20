import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Text> Lets Check if this updates</Text>
      <Button title='Components' onPress={()=> props.navigation.navigate('Components')}/>
    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
