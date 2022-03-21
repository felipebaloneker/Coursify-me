import * as React from 'react';
import { styles } from './styles'
import {View,Image} from 'react-native'
import Logo from '../../assets/logo-2.png'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import { mdiMenu } from '@mdi/js';

type Props={
    back?:boolean,
}

export function Header({back}:Props){
    return(
        <View style={styles.container}>
            <View
            style={{display:back? 'flex':'none'}}
            >
                <MaterialCommunityIcons
                    name="arrow-left"
                    size={32}
                    />
            </View>
            <View>
                <Image 
                source={Logo}
                resizeMode="stretch"
                />
            </View>
                <View style={styles.menu}>
                   <MaterialCommunityIcons
                    name="menu"
                    size={32}
                    color={theme.colors.background}
                    />
                </View>
            <View>               
            </View>
        </View>
    )
}