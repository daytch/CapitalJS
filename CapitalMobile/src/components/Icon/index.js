import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Icon = (props) => {
  const {name} = props;
  let DynamicIcon;
  switch(name){
    case "ios-information-circle": DynamicIcon = Ionicons; break;
    case "ios-information-circle-outline": DynamicIcon = Ionicons; break;
    case "cart": DynamicIcon = MaterialCommunityIcons; break;
    case "cart-outline": DynamicIcon = MaterialCommunityIcons; break;
    case "facebook": DynamicIcon = FontAwesome; break;
    case "login-variant": DynamicIcon = MaterialCommunityIcons; break;
  }

  return(
    <DynamicIcon {...props}/>
  )
}

export default Icon;