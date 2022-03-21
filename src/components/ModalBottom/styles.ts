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
        justifyContent:'center',
        alignItems:'center'
	},
    button:{
        width:216,
        height:44,
        backgroundColor:theme.colors.buttonColor,
        borderWidth:1,
        borderRadius:60,
        borderColor:'#ddd',
        shadowColor:'#000',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity:0.8,
        justifyContent:'center',
        alignItems:'center'
    },
    modalText:{
       fontSize:12,
       color:theme.colors.textModalColor,
    }
})