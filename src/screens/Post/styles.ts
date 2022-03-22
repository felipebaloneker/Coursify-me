import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        padding:30,
    },
    title:{
        color:theme.colors.titleColor,
        fontSize:24,
        fontFamily:theme.fonts.text700,
    }

})