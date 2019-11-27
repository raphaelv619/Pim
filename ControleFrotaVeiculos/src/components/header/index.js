import React, { Component, } from 'react';
import { ActivityIndicator, View, Text, Image, StatusBar, TouchableWithoutFeedback, Dimensions } from 'react-native';

import styles from './styles';
import { colors } from '../../styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { MyIcon } from '..';
import TouchableScale from 'react-native-touchable-scale';

class Header extends Component {

  // this is when u have in dev. your app ( a line red in header)

  

  // menu left position

  _menuLeft() {

    // menu MyIcon

    if (this.props.hasOwnProperty("menu") && this.props.menu) {

      return (

        <TouchableWithoutFeedback onPressOut={() => Actions.drawerOpen()}>

          <View style={styles.btnHead}>

            <MyIcon name='bars' size={22} style={{ color: 'white' }} />

          </View>

        </TouchableWithoutFeedback>

      );

    }

    // arrow left

    return (

      <TouchableWithoutFeedback onPress={() => { Actions.pop() }}>

        <View style={styles.btnHead}>

          <MyIcon name='arrow-left' size={22} style={{ color: 'white' }} />

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
        <TouchableWithoutFeedback onPress={() => { Actions.home() }}>
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
        <TouchableWithoutFeedback onPressOut={() => { return Actions.notification() }}>

          <View style={styles.btnHead}>

            <MyIcon name='bell' size={22} style={{ color: 'white' }} />

            <View style={[styles.haveNotify,]}>

              {this.props.total_msg > 0 && this.props.total_msg <= 9 && <View style={styles.notify}>

                <Text style={styles.numberNotify}>{this.props.total_msg}</Text>

              </View>}

              {this.props.total_msg > 9 && <View style={styles.notify}>

                <Text style={styles.numberNotify}>9+</Text>

              </View>}

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

        <View style={{backgroundColor:'#333'}}>

          <View style={[styles.header, styles.headerHome]}>

            <StatusBar backgroundColor={'#333'} backgroundColor='#333' barStyle="light-content" />

            {/* {this.dev()} */}

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

          {/* <View style={styles.headInfoHome}>

              <Text style={styles.titleHeadInfoHome}>Fidelidade</Text>

              <View style={styles.blockInfoHome}>

                  <Text style={styles.blockInfoHomeTitle}>4.368</Text> 
                  
                  <Text style={styles.blockInfoHomeSubtitle}>Pts</Text>

              </View>

              <TouchableScale style={styles.ballInfoHeadInfo}>

                  <MyIcon name='question1' size={14} style={{color: colors.white}}/>

              </TouchableScale>

          </View> */}

        </View>

      );

    } else {

      return (

        <View style={[styles.header, { backgroundColor: this.props.headerChoco ? colors.default : colors.white }]}>

          <StatusBar backgroundColor={colors.white} backgroundColor={this.props.headerChoco ? colors.default : "#fff0"} barStyle="dark-content" />

          {/* {this.dev()} */}

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
    total_msg: state.MsgsReducer.total_msg
  }
)

export default connect(mapStateToProps, {})(Header);
