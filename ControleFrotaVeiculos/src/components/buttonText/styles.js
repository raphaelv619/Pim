import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

export default StyleSheet.create({

    'btn': {

        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 4,
        paddingVertical: 15,
        marginBottom: 10,
        backgroundColor: 'transparent',


    },

    textBtn: {

        fontSize: fonts.regular,
        fontFamily: fonts.assExtraBold,
        color: '#333', 
        textTransform: 'uppercase',

    },
  

});
