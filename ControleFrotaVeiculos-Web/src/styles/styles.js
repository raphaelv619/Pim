import { StyleSheet, Dimensions } from 'react-native';

import { colors, fonts, metrics } from '.';

const styles = StyleSheet.create({


    // ---> Styles full

    content: {

        // backgroundColor: colors.white,
        // padding: metrics.padding,
        zIndex: 20,
        flex: 1,

    },

    contentRelative: {

        position: 'relative',
        flex: 1,

    },

    section: {

        backgroundColor: colors.white,
        paddingHorizontal: metrics.padding,

    },

    btnHead: {

        width: 42,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',

    },

    backgroundDefault: {

        flex: 1,
        // width: '100%',  
        height: '100%',
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0,
        top: 0,
        zIndex: 10,
    },

    // ---> Login Styles

    contentLogin: {

        flex: 1,
        backgroundColor: colors.white,
        padding: 18,
        position: 'relative',
        marginTop: -20,
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,

    },

    gradLinearLogin: {

        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },

    titleFormLogin: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: fonts.assRegular,
        color: colors.brown,
        marginTop: 4,
        marginBottom: 34,
        textAlign: 'center',
        fontSize: fonts.default,

    },

    imageLogin: {

        height: 320,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.dark,
        overflow: 'hidden',
        position: 'relative',

    },

    imageLoginContent: {

        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flex: 1,

    },

    textRecovery: {

        color: colors.primaryText,
        textDecorationColor: colors.primaryText,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'

    },

    viewRecovery: {

        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20

    },

    // ---> form styles

    titleForm: {

        fontSize: fonts.bigger,
        fontWeight: '800',
        color: colors.dark,
        marginBottom: 16,

    },

    contentForm: {// backgroundColor: colors.primary,
    },

    contentSwitch: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 4,
        backgroundColor: colors.greyLight,
        marginTop: 14,

    },

    textAceite: {

        fontSize: fonts.regular,
        color: colors.dark,
        fontFamily: 'Asap-Regular',

    },

    // ---> sing style

    contentAddUserImage: {

        paddingVertical: metrics.padding,
        justifyContent: 'center',
        alignItems: 'center',

    },

    addImageUser: {

        width: 180,
        height: 180,
        borderRadius: 90,

    },

    iconAddUserImage: {

        width: 30,
        height: 30,
        borderRadius: 15,
        overflow: 'hidden',
        position: 'absolute',
        right: 12,
        bottom: 12,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.greyLight,
        zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center',

    },

    readTermsBtn: {

        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: metrics.padding,

    },

    textDefault: {

        fontSize: fonts.regular,
        color: colors.dark,
        textDecorationLine: 'underline',

    },

    // ---> input none

    contentInput: {

        flexDirection: 'column',
        marginBottom: 13,

    },

    labelInput: {

        fontSize: fonts.default,
        color: colors.grey,

    },

    sectionInput: {

        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingTop: 2,

    },

    inputView: {

        flex: 1,
        flexDirection: 'column',

    },

    inputDefault: {

        marginRight: 12,
        paddingLeft: 0,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },


    textInputNone: {

        fontSize: fonts.default,
        color: colors.dark,
        marginRight: 12,

    },

    borderInput: {

        height: 1,
        backgroundColor: colors.greyLight,

    },

    // ---> home

    imageHome: {

        flex: 1,
        width: '100%',
        height: '100%',

    },


    // flat categoria 

    itemListFilter: {

        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        
        paddingHorizontal: 10,
        
        elevation: 4,
        flex: 1,
        //backgroundColor: colors.white,
        marginHorizontal:10,
        marginVertical: 15,
        elevation: 1,

    },

    itemListFilterActive: {

        backgroundColor: colors.white,
    },

    textItemListFilter: {

        fontSize: fonts.regular,
        fontFamily: fonts.assRegular,
        color: colors.caramelo,

    },

    flatFilter: {

        flex: 1,
        marginTop: -10,

    },

    // 

    contentDefaultHome: {

        flex: 1,
        backgroundColor: colors.white,
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        // overflow: 'hidden', 
        // padding: 18,
        paddingVertical: 8,

    },

    // 

    contentSearchProduct: {

        // margin: 16 ,
        marginHorizontal: 20,
        marginVertical: 15,
        // marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'red',

    },

    inputSearchProduct: {

        height: 46,
        borderWidth: 1,
        borderColor: colors.greyLine,
        flex: 1,
        overflow: 'hidden',
        borderRadius: 6,
        paddingLeft: 56,
        paddingRight: 14,
        fontFamily: fonts.assRegular,
        color: colors.brown,
        fontSize: fonts.default,

    },

    iconSeachProduct: {

        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'purple',
        position: 'absolute',
        left: 14,

    },

    inputSearchProductPlace: {

        color: colors.greyText,

    },

    // card default

    cardProduct: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginTop: 12,
        marginBottom: 16,
        flex: 1,
        paddingBottom: 28,
        borderBottomWidth: 1,
        borderBottomColor: colors.greyLine,

    },

    cardProductImage: {

        width: 104,
        height: 111,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 12,
        elevation: 8,

    },

    cardProductText: {

        paddingLeft: 15,
        position: 'relative',
        flexDirection: 'column',
        // alignItems: 'flex-start',
        flex: 1,
        overflow: 'hidden',

    },

    cardProductTitle: {

        fontSize: fonts.default,
        color: 'black',
        fontFamily: fonts.assBold,
        marginBottom: 5,

    },

    cardProductSubTitle: {

        fontSize: fonts.regular,
        color: 'black',
        fontFamily: fonts.assRegular,
        marginBottom: 10,

    },

    cardProductContentPrice: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        // flex: 1, 

    },

    cardProductMainPrice: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },


    cardProductSubPrice: {

        fontSize: fonts.regular,
        color: colors.greyText,
        fontFamily: fonts.assRegular,
        textDecorationLine: 'line-through',


    },

    cardProductPrice: {

        fontSize: fonts.default,
        color:  '#a67c00',
        fontFamily: fonts.assExtraBold,
        marginLeft: 0,

    },

    cardProductMorePay: {

        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.greyLine,
        borderRadius: 4,
        height: 22,
        // width: 70,

    },

    cardProductMorePayText: {

        fontSize: 10,
        color: colors.sucess,
        textTransform: 'uppercase',

    },

    // 

    headInfoHome: {

        // flex: 1,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
        // elevation: 8,
        flexDirection: 'column',
      
        position: 'relative',
        // top: 76,
        // zIndex: 100,

    },

    titleHeadInfoHome: {

        fontSize: fonts.regular,
        color: colors.greyText,
        fontFamily: fonts.assRegular,
        marginBottom: 6,

    },

    blockInfoHome: {

        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },


    blockInfoHomeTitle: {

        color: colors.caramelo,
        fontSize: 46,
        fontFamily: fonts.assExtraBold,
        margin: 0,
    },

    blockInfoHomeSubtitle: {

        fontSize: fonts.small,
        color: colors.greyText,
        textTransform: 'uppercase',
        marginLeft: 4,
        fontFamily: fonts.assRegular,
        position: 'absolute',
        right: -25,
        bottom: 12,
    },

    ballInfoHeadInfo: {

        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        borderRadius: 14,
        backgroundColor: colors.default,
        position: 'absolute',
        right: 26,
        top: 16,
    },


    // button full

    buttonFull: {

        flex: 1,
        position: 'absolute',
        paddingHorizontal: 20,
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.default,
        bottom: 0,
        left: 0,
        right: 0

    },

    btnChoco: {
        // flex:1, 
        paddingHorizontal: 20,
        height: 35,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.default,
    },

    itemCar: {

        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    numberItemCar: {

        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.defaultLight,
        overflow: 'hidden',
        borderRadius: 6,
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.assRegular,
        fontSize: fonts.regular,
        lineHeight: 26,

    },

    textItemCar: {

        fontSize: fonts.regular,
        color: colors.white,
        fontFamily: fonts.assExtraBold,
        textTransform: 'uppercase',
        marginLeft: 10,

    },

    line: {
        borderBottomWidth: 1,
        borderBottomColor: colors.greyLine,
        borderRadius: 4,
    },

    _btnChoco: {
        paddingHorizontal: 20,
        height: 54,
        justifyContent: 'center',
        backgroundColor: colors.default,
        overflow: 'hidden',
    },

    _btnText: {
        fontSize: fonts.regular,
        color: colors.white,
        fontFamily: fonts.assExtraBold,
        textTransform: 'uppercase',
        textAlign: 'center'
    },

    inputDefaultLine: {
        textAlign: 'left',
        borderBottomWidth: 1,
        borderColor: colors.divider,
        fontSize: fonts.big,
        paddingTop: 0,
        paddingBottom: 10,
    },

    // ---->Lojas
    cardLojas: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        flexDirection: 'column',
    },

    cardLojasEndereco: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        flexWrap: 'wrap',
        marginBottom: 10,
    },

    cardLojasDistancia: {
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    // ---->Title Nav
    contTitle: {
        // flex: 1,
        backgroundColor: colors.white,
        elevation: 4,
        maxHeight: 110,
        marginBottom: 30,
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22
    },

    contArea: {
        margin: 20,
        paddingBottom: 10,
        // flex: 1, 
        overflow: 'hidden'
    },

    rowTitle: {
        flexDirection: 'row',
        // flex: 1, 
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },

    // ---->Inputs
    contInput: {
        backgroundColor: colors.white,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 30,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    btnCount: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.greyLight,
        justifyContent: 'center',
        alignItems: 'center',
    },

    adicionais: {
        display: 'flex',
        borderTopWidth: 1,
        borderColor: colors.divider,
        marginTop: 10,
        paddingTop: 25,
        paddingBottom: 10,
    },
});

export default styles;
