import React, { useEffect, useState } from 'react'
import {ScrollView, View, Modal, Text} from 'react-native'
import { Header } from '../../components/Header'
import { ListCategory } from '../../components/ListCategory'
import { categories } from '../../hook/categories'
import { styles } from './styles'

export function Home(){
    const {listCategory} = categories()
    const [modalOpen,setModalOpen]= useState(true)
    const modalClose =()=>{
        console.log('close')
        setModalOpen(false)
    }
    useEffect(()=>{
        setTimeout(modalClose,1000 * 10)
    },[])
    
    return(
        <View>
            <Header/>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                    {listCategory.map(item=>{
                        return(
                            <ListCategory
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            />
                        )
                    })}
            </ScrollView>
            <Modal 
            transparent={true}
            visible={modalOpen}
            >
                <View style={styles.modal}>
                    <Text>modal</Text>
                </View>                   
            </Modal>
        </View>
    )
}