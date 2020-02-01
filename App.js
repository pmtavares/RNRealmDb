import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/pages/HomeScreen';
import RegisterUser from './src/pages/RegisterUser';
import UpdateUser from './src/pages/UpdateUser';
import ViewUser from './src/pages/ViewUser';
import ViewAllUser from './src/pages/ViewAllUser';
import DeleteUser from './src/pages/DeleteUser';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions:{
      title: "HomeScreen",
      headerStyle: {backgroundColor: '#3a59b7'},
      headerTintColor: '#ffffff'
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    }
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  Delete:{
    screen: DeleteUser,
    navigationOptions:{
      title: "Delete User",
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    }
  }

});

export default createAppContainer(App);