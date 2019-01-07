/**
 * @providesModule LoginStyle
 */

import { StyleSheet } from 'react-native';
import StyleConfig from './config';

export default StyleSheet.create({
    container: {
        paddingHorizontal: StyleConfig.countPixelRatio(25),
        width: '100%',
    },
    gridView: {
        marginTop: StyleConfig.countPixelRatio(50),
    },
    gridRow: {
      justifyContent:'center',
      alignItems:'center'
    },
    logo: {
        //width:StyleConfig.countPixelRatio(200),
        //height:StyleConfig.countPixelRatio(200),
        marginTop:StyleConfig.countPixelRatio(25),
        marginBottom:StyleConfig.countPixelRatio(5),
        resizeMode:'contain',
        alignItems: 'center'
    },
    langLabel: {
        marginBottom:StyleConfig.countPixelRatio(20),
    },
    btnDisabled: {
        backgroundColor: StyleConfig.lightGray,
        shadowColor: StyleConfig.black,
        shadowOffset:{ width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
    },
    btnEnabled: {
        shadowColor: StyleConfig.gray,
        backgroundColor: StyleConfig.white,
    },
    loginBtnRow: {
        marginTop: StyleConfig.countPixelRatio(10),
        marginBottom: StyleConfig.countPixelRatio(20)
    },
    linksRow: {
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: StyleConfig.countPixelRatio(48)
    },
    btnTextDisabled: {
        color:StyleConfig.arrowGray,
    },
    btnTextEnabled: {
        color:StyleConfig.brilliantRose,
    },
    btnTextGoogle: {
        color: StyleConfig.catlinaBlue
    },
    loginBtnCol: {
        alignItems:'center',
    },
    deviderCol: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: StyleConfig.countPixelRatio(20),
        marginBottom: StyleConfig.countPixelRatio(50),
        alignItems:'center',
    },
    deviderText: {
        fontSize: StyleConfig.fontSizeH4,
        fontFamily: StyleConfig.medium,
        color: StyleConfig.catlinaBlue
    },
    inputRow: {
        width: '100%',
    },
    linkText: {
        fontSize: StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.regular,
        color: StyleConfig.brilliantRose,
        textAlign:'center',
        alignSelf:'center'
    },
    deviderImg: {
        width: '44%',
        alignSelf: 'center'
    },
    inputIconBtn: {
    }
});
