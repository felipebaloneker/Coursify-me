import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        padding:15,  
    },
    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontFamily:theme.fonts.text700,
        color:theme.colors.titleColor,
        fontSize:27,
    }
})