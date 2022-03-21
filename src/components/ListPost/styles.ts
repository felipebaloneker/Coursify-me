import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        width:235,
        height:325,
        borderWidth:1,
        borderRadius:12,
        borderColor:'#ddd',
        shadowColor:'#000',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity:0.8,
        margin:10,
        overflow:'hidden',
    },
    textWrp:{
        padding:9,
        marginTop:15,
    },
    title:{
        maxWidth:187,
        maxHeight:44,
        color:theme.colors.titleColor,
        fontFamily:theme.fonts.text700,
        fontSize:17,
    },
    text:{
        maxHeight:78,
        marginTop:16,
        fontSize:15,
        color:theme.colors.textColor,
    },
    buttonText:{
        color:theme.colors.textColorhighlight,
        fontSize:16,
    },
    image:{
        width:'100%',
        height:103,
    }

})