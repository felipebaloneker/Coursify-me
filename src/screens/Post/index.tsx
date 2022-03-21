import React, { useEffect, useState } from 'react'
import {ScrollView, View} from 'react-native'
import { Header } from '../../components/Header'
import { ListCategory } from '../../components/ListCategory'
import { categories } from '../../hook/categories'
import ModalBottom from '../../components/ModalBottom'

export function Post(){
    const {listCategory} = categories()
    
    return(
        <View>
            <Header/>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
            </ScrollView>
            <ModalBottom/>
        </View>
    )
}