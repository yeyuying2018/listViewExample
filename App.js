/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Button
} from 'react-native';

export default class App extends Component {

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Button
            title={"ListViewTest"}
            onPress={()=>{
              navigation.navigate('ListViewTest');
            }}
            />
          <Button
              title={"FetchTest"}
              onPress={()=>{
              navigation.navigate('FetchTest');
            }}
              />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
