import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({

    // header style

    header: {
        
        height: metrics.headerHeight, // height full header
        paddingTop: metrics.headerPadding, // this if u need on IOS
        paddingHorizontal: metrics.padding, // padding horizontal buttons header
        backgroundColor: '#333', // background color header 
        alignItems: 'center',
        flexDirection: 'row', 
        elevation: 4,
   
    },

    headerHome: {

       

    },

    // 

    headInfoHome: {

        // flex: 1,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
        // elevation: 8,
        flexDirection: 'column',  
        paddingBottom: 14,
        position: 'relative',
        
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

        width:28,
        height:28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        borderRadius: 14,
        backgroundColor: colors.choco,
        position: 'absolute',
        right: 26,
        top: 16,
    },
 
    // left flex header
 
    headerViewLeft: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    // center flex header 

    headerViewCenter: {

        flex: 6, // six because title head, if have another icon in right content this is not necessery
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 

    },

    // right flex header

    headerViewRight: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
 
    },

    // title text header

    headerText: {

        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18,
        flexDirection: 'row',

    },
    
    // logo header 

    logo: {

        width: 100, 
        height: 48, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'transparent',
        flexDirection:'row',
        marginBottom:15

    },

    // btns header

    btnHead: {

        width: 42,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',

    },

    // bell notify

    haveNotify: {

        top: -0,
        right: -0,
        width: 25,
        height: 25,
        position: 'absolute',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',

    },

    notify: {

        height: 15,
        width: 15,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: colors.white,

    },

    numberNotify: {

        fontSize: 10,
        color: colors.primary,
        position: 'absolute',

    },

});

export default styles;
