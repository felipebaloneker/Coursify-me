import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	modal:{
		position:"absolute",
		bottom:0,
		width:'100%',
		height:219,
		maxHeight:219,
		backgroundColor:theme.colors.modal,
	}
})