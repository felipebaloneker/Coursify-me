import React, { useEffect, useState } from 'react'
import {ScrollView, View} from 'react-native'
import { Header } from '../../components/Header'
import ModalBottom from '../../components/ModalBottom'

export function Post(){
    
    return(
        <View>
            <Header back/>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
            </ScrollView>
            <ModalBottom/>
        </View>
    )
}