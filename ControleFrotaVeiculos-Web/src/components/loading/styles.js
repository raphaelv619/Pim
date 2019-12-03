import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

export default StyleSheet.create({

     // card destaque

     cardDefyDesc: {
 
        width: 188,    
        marginHorizontal: 9, 
        backgroundColor: 'transparent', 
        paddingBottom:10

    }, 

    imageCardDesc: {

        elevation: 6,
        backgroundColor: 'transparent', 
        overflow: 'hidden',
        height: 200, 
        borderRadius:14,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,  
 
    },

    imgCardDesc: {

        width: 188,  
        height: 200,       
   
    },

    textCardDesc: {

        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        paddingTop: 8,
        flex: 1,
     
    },
    branco:{
        color:colors.white
    },  
    nameCardDesc: {

        fontSize: fonts.regular,
        color: colors.dark,
        fontFamily: 'Asap-Bold',
        marginBottom: 2,
 
    },

    subNameCardDesc: {

        fontSize: fonts.small,
        color: colors.greyText,
        fontFamily: 'Asap-Regular', 
        marginBottom: 6, 

    }, 

    miniNameCardDesc: {

        fontSize: fonts.smaller,
        color: colors.greyText,
        fontFamily: 'Asap-Regular',
        marginBottom: 2, 

    }, 



    lightContent:{
        color:colors.white,
    },  
    //estilo especifico para o padrão topPlacementProd (eu inventei esse nome)
    topPlacementProd:{
        backgroundColor:colors.redFormula,
        marginHorizontal:0,
        flexDirection:'row',
        flex:1,
        paddingTop:15,
        paddingHorizontal:10,
        paddingBottom:10,
        marginBottom:30,
        minHeight:130
    },
    topPlacementProdImage: {

        elevation: 6,
        backgroundColor: 'transparent', 
        overflow: 'hidden',
        flex:2,
        //height: 200, 
        borderRadius:14,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4, 
        marginBottom:-30
 
    },
    subNameCardDescTopPlacement:{
        fontSize: fonts.small,
        color: colors.greyText,
        fontFamily: 'Asap-Regular', 
        marginBottom: 6, 
    },
    textCardDescPlacementTop:{
        paddingHorizontal:10,
        flex:3
    },
    imgCardDescFull: {

        width: '100%',  
        height: '100%',       
   
    }

});
