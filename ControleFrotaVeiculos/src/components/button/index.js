import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import stylesCustom from './styles';
import TouchableScale from 'react-native-touchable-scale';

export const Button = (props) => {
    let { big, style, text, styleText, color, outline } = props

    if (!color) color = 'primary'
    if (!outline) outline = false

    typeTextFont = 'regular'
    if (big) typeTextFont = 'big'

    return( 
        
        <TouchableScale 
        
            onPress={props.onPress} 
            activeScale={0.95}   
            style={[ 
            stylesCustom.btn,
            stylesCustom[`btn-${color}`],
            (outline) ? stylesCustom[`btn-outline`] : {}, 
            style
            ]}>

            <Text style={[
                stylesCustom[`btn-text-${color}`],
                stylesCustom[`btn-text-${typeTextFont}`],
                stylesCustom.textBtn,
                (outline) ? stylesCustom[`btn-text-${color}-outline`] : {},
                styleText,
                ]}>{text}</Text> 

        </TouchableScale> 
    
    )
}
