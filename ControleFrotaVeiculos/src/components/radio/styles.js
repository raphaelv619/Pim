import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

export default StyleSheet.create({

    radioBox: {
        flexDirection: 'row'
    },
    radioItem: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
    },
    radioBall: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 10,
    },
    radioLabel: {
        fontSize: fonts.regular,
        fontFamily: fonts.assRegular,
    },
    selected: {
        borderColor: '#fff0',
        backgroundColor: colors.caramelo,
        elevation: 1,
    },
    simple: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.dark,
    },
    textSelected: {
        fontSize: fonts.default,
        color: colors.caramelo,
        fontFamily: fonts.assRegular,
    }

});
