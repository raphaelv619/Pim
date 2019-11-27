import React, { Component } from 'react'
import {Text, Input as InputNative, Label, Item} from 'native-base'
import {TextInput, Animated} from 'react-native'
import PropTypes from 'prop-types';
import {View} from 'react-native'
import styles from './styles'
import {MyIcon} from '..'
import { fonts, colors} from '../../styles';


export class LayoutInputCustom extends Component {


  state = {

    value: '',
    
  }

  handleTextChange =  (newText) => this.setState({value: newText});
 
  icon(obj) {
    
    if (obj) {

      let type = obj.type ? obj.type : ''
      let style = obj.style ? obj.style : {}
      return <MyIcon type={type} name={obj.name} style={[styles.icon, style]} />

    }
 
  }

  state = { isFocused: false, };

  componentWillMount() {

   this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);

  }
 
  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {  

    Animated.timing(this._animatedIsFocused, {

      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 150,
  
    }).start();       
 
  } 

  // console.log('chegguei aqui'); 
 
  render() { 

    // const { label, ...props } = this.props;

    const { isFocused } = this.state;
 
    const labelInput = {

      fontFamily: fonts.assRegular,
      position: 'absolute',
      color: colors.greyFontInput,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],  
        outputRange: [16, -12],
      }), 
    
      // left: 0, -- REMOVE BECAUSE THE CENTER CONTENT LABEL INPUT EFFECT

      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 14], 
      }), 

      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],   
        outputRange: [colors.grey, colors.brown], 
      }), 
        
    } 
    
    const leftWithIcon = {
       
      left: this._animatedIsFocused.interpolate({
        
        inputRange: [0, 1],
        outputRange: [34, 0], 

      }), 
 
    }

    const mgKJ = {  

      marginRight: 12,

    }

    if (this.props.hasOwnProperty("center")) { 

      return(

        <View style={[styles.contentInput, { }]}>
   
          <View style={{flex:1,alignItems: 'center',  justifyContent: 'center',}}><Animated.Text style={labelInput}>{this.props.label}</Animated.Text></View>

          <View style={styles.sectionInput}>  

            <View onFocus={this.handleFocus} onBlur={this.handleBlur} blurOnSubmit {...this.props}/>
 
          </View>    
      
          <View style={styles.borderInput} />

        </View> 

      )

    }
    
    return (

      <View style={[styles.contentInput]}> 
 
        <Animated.Text style={[labelInput, (this.props.iconLeft)? leftWithIcon: {}]}>{this.props.label}</Animated.Text>

        <View style={styles.sectionInput}> 
    
          <View style={[ (this.props.iconLeft)? mgKJ: {}]}>{this.icon(this.props.iconLeft)}</View>

          <View onFocus={this.handleFocus} onBlur={this.handleBlur} blurOnSubmit {...this.props}/>
  
          <View style={{marginLeft: 12,}}>{this.icon(this.props.iconRight)}</View>

        </View>    
    
        <View style={styles.borderInput} />

      </View> 

    );
  }
}

// export const PickerCustom = (props) => {
//   return (

//     <LayoutInputCustom {...props}>

//       <Picker {...props} />

//     </LayoutInputCustom>

//   )
// }  

export const Input = (props) => {
  
  return (

    <LayoutInputCustom {...props} style={styles.inputView}>
      <InputNative style={[styles.inputDefault, ]} {...props} />
    </LayoutInputCustom>  

  )
}   