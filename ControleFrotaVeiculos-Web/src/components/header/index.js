import React, { Component, } from 'react';
import { View, Text, Image, StatusBar, TouchableWithoutFeedback,} from 'react-native';

import styles from './styles';
import { colors } from '../../styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { MyIcon } from '..';

class Header extends Component {


  // menu left position

  _menuLeft() {

    // menu MyIcon

    if (this.props.hasOwnProperty("menu") && this.props.menu) {

      return (

        <TouchableWithoutFeedback onPressOut={() => Actions.drawerOpen()}>

          <View style={styles.btnHead}>

            {/* <MyIcon name='bars' size={22} style={{ color: 'white' }} /> */}
            <Image source={require('../../assets/icons/menu.png')} style={{width:24, height:24}} />

          </View>

        </TouchableWithoutFeedback>

      );

    }

    // arrow left

    return (

      <TouchableWithoutFeedback onPress={() => { Actions.pop() }}>

        <View style={styles.btnHead}>

          {/* <MyIcon name='arrow-left' size={22} style={{ color: 'white' }} /> */}
          <Image source={require('../../assets/icons/arrow-left.png')} style={{width:24, height:24}} />

        </View>

      </TouchableWithoutFeedback>

    );

  }

  // menu center position

  _menuCenter() {

    // text

    if (this.props.hasOwnProperty("title") && this.props.title) {

      return <Text style={styles.headerText}>{this.props.title}</Text>;

    }

    // logo

    return (

      <View style={styles.logo}>
        <TouchableWithoutFeedback onPress={() => {} }>
          <Image source={require('../../assets/images/logo-drive.png')} style={{ width: 142, height: 56, }} />
          {/* <Text style={styles.headerText}>Controle Frota</Text> */}
        </TouchableWithoutFeedback>
      </View>

    );

  }

  // menu right position

  _menuRight() {

    if (this.props.hasOwnProperty("bell") && this.props.bell) {

      return (

        // bell &&
        <TouchableWithoutFeedback onPress={() => global.alert.alert('Em desenvolvimento.')}>

          <View style={styles.btnHead}>

            {/* <MyIcon name='bell' size={22} style={{ color: 'white' }} /> */}
            <Image source={require('../../assets/icons/alarm.png')} style={{width:24, height:24}} />

            <View style={[styles.haveNotify,]}>

            </View>

          </View>

        </TouchableWithoutFeedback>

      );

    }

    return


  }

  render() {

    if (this.props.hasOwnProperty("home")) {

      return (

        <View style={{backgroundColor:'#333', paddingTop:15}}>

          <View style={[styles.header, styles.headerHome]}>

            <StatusBar backgroundColor={'#333'} backgroundColor='#333' barStyle="light-content" />

            <View style={[styles.headerViewLeft]}>

              {this._menuLeft()}

            </View>

            <View style={[styles.headerViewCenter]}>

              {this._menuCenter()}

            </View>

            <View style={[styles.headerViewRight]}>

              {this._menuRight()}

            </View>

          </View>

        </View>

      );

    } else {

      return (

        <View style={[styles.header, { backgroundColor: this.props.headerChoco ? colors.default : colors.white }]}>

          <StatusBar backgroundColor={colors.white} backgroundColor={this.props.headerChoco ? colors.default : "#fff0"} barStyle="dark-content" />

          <View style={[styles.headerViewLeft]}>

            {this._menuLeft()}

          </View>

          <View style={[styles.headerViewCenter]}>

            {this._menuCenter()}

          </View>

          <View style={[styles.headerViewRight]}>

            {this._menuRight()}

          </View>

        </View>

      );

    }
  }

}

const mapStateToProps = state => (
  {

  }
)

export default connect(mapStateToProps, {})(Header);
