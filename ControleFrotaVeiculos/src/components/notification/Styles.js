import { StyleSheet, Dimensions, } from 'react-native';

import colors from '../../theme/Colors';

 const styles = StyleSheet.create({
    headder: {
        height: 60,
        paddingLeft: 13,
        paddingRight: 13,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: colors.cinzaHeadder,
    },

    headderText: {
        fontSize: 28,
        color: "#f0f0f0",
        marginLeft: 20,
    },

    btnMenu: {
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconMenu: {
        width: 28,
        height: 28,
    },

    container: {
        flex: 1,
        marginBottom: 13,
        borderRadius: 5,
        padding: 10,
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: colors.branco,
    },

    msg: {
        fontSize: 14,
    },

    sub_msg: {
        fontSize: 12,
        color: "#ccc",
    }
});

 export default styles;
