// @flow
import { createStackNavigator } from 'react-navigation';
import { Screen1, Screen2 } from './../screens/Screens.sample';

const RootNavigator = createStackNavigator({
  Home: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1',
    }),
  },
  /* Add more screen here */
});

export default RootNavigator;
