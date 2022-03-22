import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container:{
        width:'100%',
        height:64,
        flexDirection:'row',
        backgroundColor:theme.colors.background,
        shadowColor: theme.colors.overlay,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        alignItems:'center',
        justifyContent:"space-around",
        borderBottomColor:theme.colors.overlay,
	},
    menu:{
        width:37,
        height:37,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:theme.colors.menu,
        borderRadius:100,
        marginLeft:100,
    },
    logo:{
        margin:5,
    }
})