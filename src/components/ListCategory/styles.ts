import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    header:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontFamily:theme.fonts.text700,
        color:theme.colors.titleColor,
        fontSize:22,
    },
    scrollContainer:{
        minHeight:325,
        paddingLeft:24
    }
})