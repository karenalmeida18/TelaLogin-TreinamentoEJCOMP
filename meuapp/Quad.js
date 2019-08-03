import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtAtt: 'Clique no botão!',
            colorAtt: this.props.color,
            nameCorrect: 'Karen',
            passwordCorrect: '123'
        };
    }
    addTxt = () => {
        const TxtCorrect = ' login efetuado com sucesso!';
        const TxtError = 'Login ou senha incorretos'
        const ColorCorrect = backgroundColor = 'green';
        const ColorError = backgroundColor = 'red';
        if (this.props.text0 === this.state.nameCorrect && this.props.text1 === this.state.passwordCorrect) {
            this.setState({ txtAtt: TxtCorrect, colorAtt: ColorCorrect });
        } else {
            this.setState({ txtAtt: TxtError, colorAtt: ColorError });
        }

    }
    render() {
        return (
            <TouchableOpacity onPress={this.addTxt} style={[styles.quad, { backgroundColor: this.state.colorAtt }]}>
                <Text>{this.state.txtAtt}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    quad: {
        width: 130,
        height: 130,
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    }
});