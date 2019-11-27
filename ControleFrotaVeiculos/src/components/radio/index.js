import React,{Component} from 'react'
import { View,Text, TouchableWithoutFeedback } from 'react-native';

import stylesCustom from './styles';


export const Radio = (props) => {
    let {options,value,onValueChange,radioLable,radioValue } = props;

    radioLable = radioLable?radioLable:'label';
    radioValue = radioValue?radioValue:'value';

    let itemAcao = (item,key) => {
        if(onValueChange){
            onValueChange(item[radioValue],item[radioLable],key);
        }
    }

    return( 

        <View style={[stylesCustom.radioBox]}>
            {options.map((item,key)=>{
                return (
                    <TouchableWithoutFeedback key={key} onPress={()=>{itemAcao(item,key)}}>
                        <View style={[stylesCustom.radioItem]}>
                            <View style={[stylesCustom.radioBall,(value == item[radioValue]?stylesCustom.selected:stylesCustom.simple)]}></View>
                            <Text style={[stylesCustom.radioLabel,(value == item[radioValue]?stylesCustom.textSelected:'')]}>{item[radioLable]}</Text>
                        </View> 
                    </TouchableWithoutFeedback>

                )
            })}
        </View> 
    
    )
}
