import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        minHeight:120,
        maxHeight:120,
        paddingLeft:24,
        backgroundColor:theme.colors.menu,
    },
    title:{
        fontFamily:theme.fonts.text700,
        color:theme.colors.menu,
        fontSize:27,
    }
})