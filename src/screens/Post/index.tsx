import {useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {ScrollView, View, Text, useWindowDimensions} from 'react-native'
import { Header } from '../../components/Header'
import ModalBottom from '../../components/ModalBottom'
import RenderHtml, { RenderHTMLProps } from 'react-native-render-html'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function Post(){
    const routeParams = (useRoute().params ?? {}) as {
        content:string
        title:string,
    }
    return(
        <View
        
        >
            <Header back/>
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
            >
                <Text style={styles.title}>{routeParams.title}</Text>
                <RenderHtml 
                contentWidth={useWindowDimensions().width}
                tagsStyles={{
                    p:{
                        fontSize:17,
                        color:theme.colors.textColor,
                        fontFamily:theme.fonts.text400
                    }
                }}
                source={{html:routeParams.content}
                }/>
            </ScrollView>
            <ModalBottom/>
        </View>
    )
}