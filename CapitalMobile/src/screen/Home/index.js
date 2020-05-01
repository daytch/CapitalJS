import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
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
    <View styles={styles.container}>
      <View styles={styles.container}>
        <Button
          title="increment"
          onPress={() => incrementCount()}
        />
        <Text>{header.count}</Text>
        <Button
          title="decrement"
          onPress={() => decrementCount()}
        />
        <Icon name='area-chart' color="green" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
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
