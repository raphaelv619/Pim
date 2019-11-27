import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import Headder from '../../theme/header';

import styles from './Styles';

import {  } from '../../actions';


class Notification extends Component{

  _renderHeader() {
    return (
      <View style={{height: 20}} />
    );
  };

  _renderFooter() {
    return (
      <View style={{height: 20}} />
    );
  };

  _renderEmpty() {
    if (this.props.loading) return null;
    return (
      <View style={styles.container}>
        <Text>Nenhuma notificação encontrada</Text>
      </View>
    );
  };

  _ver(item) {
    let aux = (item.extra+"").split(':');
    item.lido = 1;
    global.dao.mensagem.update(item.id, item).then((data) => {
      this._getAll();

      if (aux[0] == "RTR") {
        Actions.verRtr({id: aux[1]*1})
      } else if (aux[0] == "ANALISE") {
        Actions.visualizar({id: aux[1]*1})
      } else if (aux[0] == "TALHAO") {
        Actions.verTalhao({id: aux[1]*1})
      } else {
        global.alert.alert(item.mensagem, null, "Mensagem");
      }
    });
  }

  _getAll() {
    global.firebase.getAllMsg();
  }

  _deletar(item) {
    global.dao.mensagem.del(item.id).then(() => {
      this._getAll();
    }).catch(() => {
      this._getAll();
    });
  }

  _deletarAll() {
    global.dao.mensagem.set().then(() => {
      this._getAll();
    }).catch(() => {
      this._getAll();
    });
  }

  _renderItem({item, index}) {
    let data = [
      {name: "VER", func: () => {
        this._ver(item);
      }},
      {name: "Deletar", func: () => {
        global.alert.confirm("Gostaria de deletar esta Notificação?", () => {
          this._deletar(item);
        });
      }},
      {name: "Deletar Todas", func: () => {
        global.alert.confirm("Gostaria de deletar todas as Notificações?", () => {
          this._deletarAll();
        });
      }}
    ];
    return(
      <TouchableNativeFeedback onPress={() => this._ver(item)} onLongPress={() => Actions.menuLightbox({data})}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.container}>
          <Text style={styles.msg}>{item.mensagem}</Text>
          <Text style={styles.sub_msg}>{moment(item.data).fromNow()}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <Headder menu={false} sincronizar={false} sino={false} />

        <FlatList showsVerticalScrollIndicator={false}
          renderItem={ ({item, index}) => this._renderItem({item, index}) }
          data={this.props.msgs}
          data={this.props.msgs}
          style={{marginHorizontal: 15}}
          ListEmptyComponent={() => this._renderEmpty()}
          ListFooterComponent={() => this._renderFooter()}
          ListHeaderComponent={() => this._renderHeader()}
            />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let msgs = state.MsgsReducer.msgs.sort((a,b) => {
    if (a.data == b.data) {
      if (a.mensagem > b.mensagem) return -1;
      else if (a.mensagem < b.mensagem) return 1;
      else return 0;
    } else if (a.data > b.data) return -1;
    else if (a.data < b.data) return 1;
    else return 0;
  });

  return {
    msgs
  }
}

export default connect(mapStateToProps, {  })(Notification);
