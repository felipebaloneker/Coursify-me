import { styles } from './styles'
import {View,Image} from 'react-native'
import Logo from '../../assets/logo-2.png'
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

export function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.image}>
                <Image 
                source={Logo}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>
            <View>               
            </View>
        </View>
    )
}