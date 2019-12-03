import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

export default StyleSheet.create({

    'btn': {

        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 4,
        paddingVertical: 17,
        marginBottom: 10,
        backgroundColor: colors.default,
        elevation: 4,

    },

    textBtn: {  

        fontSize: fonts.regular,
        fontFamily: fonts.assExtraBold,
        color: colors.white, 
        textTransform: 'uppercase',

    },

    // btn primary
    

    "btn-primary": {

        backgroundColor: '#333',

    },

    'btn-text-primary': {

        color: colors.white,

    },

    // btn outline

    'btn-outline': {

        
        backgroundColor: colors.greyLight,
        borderColor: colors.greyLight,

    },

    'btn-text-primary-outline': {

        color: colors.for,

    },
    
    'btn-text-big': {

        fontSize: fonts.big

    },

    'btn-text-regular': {

        fontSize: fonts.regular

    }

});
