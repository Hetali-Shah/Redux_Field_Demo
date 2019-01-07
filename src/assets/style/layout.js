import { StyleSheet, Platform } from 'react-native';
import { WINDOW } from '../../common/global';
import StyleConfig from './config';

export default StyleSheet.create({
    rootContainer: {
        flex:1,
        backgroundColor: StyleConfig.white,
    },
    fullContainer: {
        flex:1,
        backgroundColor: StyleConfig.white,
        width: '100%'
    },
    container: {
        backgroundColor: StyleConfig.white,
    },
    content: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingHorizontal: StyleConfig.getScreenPadding
    },
    backgroundImage: {
        flex: 1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        resizeMode: 'stretch'
    },
    scrollView: {
        width: WINDOW.width,
        height: WINDOW.height - StyleConfig.headerHeight - (Platform.OS === 'android' ? 24 : 0),
        backgroundColor: StyleConfig.white
    },

    inputStyle: {
        flex: 1,
        fontFamily: StyleConfig.regular,
        color:StyleConfig.catlinaBlue,
        fontSize: StyleConfig.fontSizeH2,
        //letterSpacing: StyleConfig.countPixelRatio(0.5) >= 0.25 ? StyleConfig.countPixelRatio(0.5) : 0.25,
        padding: 0,
        marginBottom:StyleConfig.countPixelRatio(8),
        lineHeight: StyleConfig.countPixelRatio(24)
    },

    inputTextArea: {
        textAlignVertical: 'bottom',
        height: StyleConfig.countPixelRatio(120),
    },
    inputTextSmallArea: {
        textAlignVertical: 'bottom',
        height: StyleConfig.countPixelRatio(40),
    },

    inputPickerStyle: {
        flex: 1,
        color:StyleConfig.iron,
        padding: 0
    },

    labelInput: {
        color:StyleConfig.catlinaBlue,
        fontFamily: StyleConfig.bold,
        fontSize: StyleConfig.fontSizeH3,
        //letterSpacing:StyleConfig.countPixelRatio(1),
        lineHeight: StyleConfig.countPixelRatio(20),
        padding: 0,
        backgroundColor: 'transparent',
        marginTop:StyleConfig.countPixelRatio(5)
    },

    labelInputSuccess: {
        color:StyleConfig.brilliantRose,
        fontFamily: StyleConfig.bold,
        fontSize: StyleConfig.fontSizeH3,
        //letterSpacing:StyleConfig.countPixelRatio(1),
        lineHeight: StyleConfig.countPixelRatio(20),
        padding: 0,
        backgroundColor: 'transparent',
        marginTop:StyleConfig.countPixelRatio(5)
    },

    labelInputError: {
        color:StyleConfig.red,
        fontFamily: StyleConfig.medium,
        fontSize: StyleConfig.fontSizeH3,
        //letterSpacing: StyleConfig.countPixelRatio(1),
        lineHeight: StyleConfig.countPixelRatio(20),
        padding: 0,
        backgroundColor: 'transparent',
        marginTop:StyleConfig.countPixelRatio(5)
    },

    sideErrorInput: {
        color:StyleConfig.navyMediumDark,
        marginTop: StyleConfig.countPixelRatio(5),
        padding: StyleConfig.countPixelRatio(0),
        fontFamily: StyleConfig.regularItalic,
        //letterSpacing: StyleConfig.countPixelRatio(0.5) >= 0.25 ? StyleConfig.countPixelRatio(0.5) : 0.25,
        fontSize: StyleConfig.fontSizeH4
    },

    sideInputInfo: {
        color:StyleConfig.navyMediumDark,
        marginTop: StyleConfig.countPixelRatio(5),
        padding: StyleConfig.countPixelRatio(0),
        fontFamily: StyleConfig.regularItalic,
        //letterSpacing: StyleConfig.countPixelRatio(0.5) >= 0.25 ? StyleConfig.countPixelRatio(0.5) : 0.25,
        fontSize: StyleConfig.fontSizeH4
    },

    sideInputView: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1
    },

    labelInputView: {
        flex:1,
        flexDirection:'row'
    },

    placeholder: {
        borderColor:StyleConfig.gray,
        fontFamily: StyleConfig.medium,
        fontSize: StyleConfig.fontSizeH2
        //letterSpacing:1,
    },

    itemInput: {
        borderColor:StyleConfig.iron,
        borderWidth: StyleConfig.countPixelRatio(1),
        marginLeft:StyleConfig.countPixelRatio(0),
        fontSize: StyleConfig.fontSizeH2
    },

    itemInputError: {
        borderColor: StyleConfig.red,
        marginLeft:StyleConfig.countPixelRatio(0),
        fontSize: StyleConfig.fontSizeH2
    },

    itemInputSuccess: {
        borderColor:StyleConfig.brilliantRose,
        marginLeft:StyleConfig.countPixelRatio(0),
        fontSize: StyleConfig.fontSizeH2
    },

    labelInfo: {
        fontFamily: StyleConfig.regular,
        fontSize: StyleConfig.fontSizeH3,
        color:StyleConfig.navyMediumDark,
        //letterSpacing:1
    },

    mainContainerWithLoader: {
        flex:1,
        position:'absolute',
        right:0,
        left:0,
        height: WINDOW.height,
        width: WINDOW.width,
        zIndex:999999
    },

    indicatorWithLoader: {
        flex: 1,
        position: 'absolute',
        right: 0,
        left:0,
        height: WINDOW.height,
        width: WINDOW.width,
        zIndex: 9999999,
        // backgroundColor: 'rgba(0,0,0,0.6)', // for flip image or else remove this
        // alignItems: 'center', // for flip image or else remove this
        // justifyContent:'center', // for flip image or else remove this
    },

    rotateImageLogo: {
        width: StyleConfig.countPixelRatio(100),
        height: StyleConfig.countPixelRatio(100),
        alignSelf: 'center'
    },

    empty:{
        height:0,
        width:0
    },

    indicator: {
        flex:1,
        right:0,
        height:0,
        width:0,
        zIndex:0
    },

    mainContainer: {
        flex:1,
        position:'absolute',
        right:0,
        left:0,
        height:10,
        width:WINDOW.width,
        zIndex:9999,
    },

    disabled: {
        opacity:0.5
    },

    buttonH1: {
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height: StyleConfig.buttonHeightH1,
        shadowColor: StyleConfig.black,
        shadowOffset:{ width: 0, height: StyleConfig.countPixelRatio(2) },
        shadowOpacity: 0.25,
        shadowRadius: StyleConfig.countPixelRatio(2),
        borderRadius: StyleConfig.buttonHeightH1,
        backgroundColor: StyleConfig.white,
        elevation: 1
    },

    buttonH1Text: {
        fontFamily: StyleConfig.medium,
        fontSize: StyleConfig.fontSizeH3,
        lineHeight: StyleConfig.countPixelRatio(StyleConfig.buttonHeightH1 / 2),
        //letterSpacing:StyleConfig.countPixelRatio(1.5),
        color:StyleConfig.white,
        backgroundColor: 'transparent'
    },

    buttonH2: {
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height: StyleConfig.buttonHeightH2,
        shadowColor: StyleConfig.black,
        shadowOffset:{ width: 0, height: StyleConfig.countPixelRatio(1) },
        shadowOpacity: 0.25,
        shadowRadius: StyleConfig.countPixelRatio(2),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderRadius: StyleConfig.buttonHeightH2,
        backgroundColor: StyleConfig.white,
        borderColor:StyleConfig.white,
        padding: StyleConfig.countPixelRatio(0),
        elevation: 1
    },

    buttonH2Text: {
        fontFamily: StyleConfig.medium,
        fontSize: StyleConfig.fontSizeH3,
        lineHeight: StyleConfig.countPixelRatio(20),
        //letterSpacing:StyleConfig.countPixelRatio(1.5),
        color:StyleConfig.white,
        backgroundColor: 'transparent'
    },

    scalarSpace: {
         marginRight: StyleConfig.scalarSpace
    },

    modalContent: {
        backgroundColor: StyleConfig.white,
        padding: StyleConfig.getScreenPadding,
        borderRadius: StyleConfig.countPixelRatio(4),
        borderColor: "rgba(0, 0, 0, 0.1)"
    },

    modalTitle: {
        fontFamily: StyleConfig.medium,
        color: StyleConfig.navyMediumDark,
        fontSize: StyleConfig.fontSizeH2,
        marginVertical: StyleConfig.countPixelRatio(5),
    },

    modalSubText: {
        fontFamily: StyleConfig.regular,
        color:StyleConfig.mediumgray,
        fontSize: StyleConfig.fontSizeH4,
        marginTop: StyleConfig.countPixelRatio(5),
    },

    modal: {},

    cancelBtn: {
        alignItems:'center',
        marginTop: StyleConfig.countPixelRatio(10)
    },

    cancelText: {
        fontSize: StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.regular,
        color: StyleConfig.gray,
        textAlign:'center',
        alignSelf:'center'
    },

    lineSeparator: {
        margin: StyleConfig.countPixelRatio(15),
        height:1,
        backgroundColor:'rgba(0,0,0,0.1)',
        width: StyleConfig.getWidthByColumn(1)
    }
});
