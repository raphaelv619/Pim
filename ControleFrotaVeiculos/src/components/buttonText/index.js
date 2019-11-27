import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import stylesCustom from './styles';
import TouchableScale from 'react-native-touchable-scale';

export const ButtonText = (props) => {

    let { big, style, text, styleText, color, outline } = props

    return( 
        
        <TouchableScale 
        onPress={props.onPress} 
        activeScale={0.95}   
        style={[ stylesCustom.btn, style]}>

            <Text style={stylesCustom.textBtn}>{text}</Text> 

        </TouchableScale>  
    
    )
}
