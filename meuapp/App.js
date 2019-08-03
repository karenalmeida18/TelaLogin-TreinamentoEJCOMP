import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import Quad from './Quad';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }
  mostrarQuad = () => {
    this.setState({ isVisible: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Email</Text><TextInput style={styles.input} onChangeText={(text0) => (this.setState({ name: text0 }))}></TextInput>
        <Text>Senha</Text><TextInput style={styles.input} onChangeText={(text1) => (this.setState({ password: text1 }))}></TextInput>
        <TouchableOpacity style={styles.btn} onPress={this.mostrarQuad}>
          <Text style={{ color: 'white', padding: 8 }}>Login</Text>
        </TouchableOpacity>
        <View style={styles.box}>
          {
            this.state.isVisible ?
              <Quad color={'pink'} text0={this.state.name} text1={this.state.password} />
              :
              <View />

          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 28,
    justifyContent: 'center',
    alignItems: 'center'

  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,

  },
  btn: {
    backgroundColor: 'blueviolet',
    width: 50,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});