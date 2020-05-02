import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CapitalButton from '../../components/CapitalButton';

const Product = (props) => {
  const goToDetail = () => {
    props.navigation.navigate("ProductDetail", {
      params: {
        name: "Bob"
      },
    });
  }
  return(
    <View style={styles.container}>
      <CapitalButton text="Go to detail" onPress={goToDetail} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Product;