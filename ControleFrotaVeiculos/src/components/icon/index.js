import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const MyIcon = (props) => {
    let { type } = props
    if (!type) type = "Custom"

    if (type != "Custom") {
        return (
            <IconNative name={props.name} size={props.size} style={props.style} />
        )
    }

    return (
        <Icon name={props.name} size={props.size} style={props.style} />
    )
}