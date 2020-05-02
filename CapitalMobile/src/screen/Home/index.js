import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import {connect} from 'react-redux';
import {headerAction} from '../../redux/actions';

const Home = (props) => {
  const {header, setCount} = props;
  const incrementCount = (props) => {
    setCount(header.count+1);
  }
  const decrementCount = (props) => {
    setCount(header.count-1);
  }
  return (
    <View style={styles.container}>
      <Button
        title="increment"
        onPress={() => incrementCount()}
      />
      <Text>{header.count}</Text>
      <Button
        title="decrement"
        onPress={() => decrementCount()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
  header: state.headerReducer
});
const mapActionToProps = headerAction;
export default connect(mapStateToProps, mapActionToProps)(Home);
