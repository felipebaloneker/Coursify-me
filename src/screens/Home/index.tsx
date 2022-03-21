import React from 'react'
import {ScrollView, View, Text} from 'react-native'
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
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingRight:40 }}
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
        </View>
    )
}