import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';

import { colors } from '../../styles';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  content: {
    borderTopWidth: .6,

    // paddingVertical: 10,
    // borderBottomWidth: 1,
    borderTopColor: '#cdcdcd',
    // backgroundColor: colors.verdeTransparente,
  },

  contentNome: {
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.verdeTransparente,
  },

  botao: {
    flex: 1,
    height: 50,
    // elevation: 3,
    // borderRadius: 10,
    // marginVertical: 8,
    // marginHorizontal: 15,
    borderBottomWidth: .5,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomColor: '#cdcdcd',
    backgroundColor: colors.branco,
  },
  text: {
    fontSize: 18,
    color: colors.darkGreyText,
  },
  textTitulo: {
    fontSize: 22,
    fontWeight: '400',
    color: colors.branco,
  }
});

export default class MenuLightbox extends Component{

  constructor(props) {
    super(props);
  }

  _close(item) {
    Actions.pop();
    if (item.func) item.func();
  }

  _renderItem({item, index}) {
    return(
        <TouchableNativeFeedback onPress={() => this._close(item)}>
          <View style={styles.botao}>
            {item.icon && item.icon()}
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableNativeFeedback>
    );
  }

  render(){
    let data = [];

    for (let x in this.props.data) {
      data.push(this.props.data[x]);
    }

    data.push({name: "Cancelar"});

    return(
      <View style={styles.content} >
        {this.props.nome != "" &&
        <View style={styles.contentNome}>
          <Text style={[styles.text, styles.textTitulo]}>{this.props.nome}</Text>
        </View>}
        <FlatList
          renderItem={ ({item, index}) => this._renderItem({item, index}) }
          data={data} />
      </View>
    );
  }
}
