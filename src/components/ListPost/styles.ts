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
    },
    textWrp:{
        padding:9,
        marginTop:15,
        margin:10,
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
        marginBottom:15,
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