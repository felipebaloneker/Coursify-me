import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {ScrollView, View, Text} from 'react-native'
import { Header } from '../../components/Header'
import ModalBottom from '../../components/ModalBottom'

export function Post(props:any){
    const id = props.route.params.id
    return(
        <View>
            <Header back/>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <Text>{id}</Text>
            </ScrollView>
            <ModalBottom/>
        </View>
    )
}