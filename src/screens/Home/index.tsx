import React from 'react'
import {ScrollView, View, Modal, Text} from 'react-native'
import { Header } from '../../components/Header'
import { ListCategory } from '../../components/ListCategory'
import { categories } from '../../hook/categories'
import { styles } from './styles'

export function Home(){
    const {listCategory} = categories()

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
            >
                <View style={styles.modal}>
                        <View style={styles.modalWrp}>
                            <Text>modal</Text>
                        </View>
                </View>                   
            </Modal>
        </View>
    )
}