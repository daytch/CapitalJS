import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import Icon from '../Icon';

const CapitalButton = (props) => {
  return(
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <Icon name="login-variant" size={20} color="white" style={styles.icon} />
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: "#3b5998"
  },
  containerInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  icon: {
    marginRight: 10
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  }
})

export default CapitalButton;