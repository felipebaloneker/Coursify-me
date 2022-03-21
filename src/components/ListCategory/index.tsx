import React from "react"
import { View,Text } from "react-native"
import { posts } from "../../hook/posts"
import { styles } from "./styles"

type Props= {
    id:number,
    name:string
}

export function ListCategory({
    id,
    name,
}:Props){
    const {listPost} = posts(id)
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{name}</Text>
                <Text>Ver Mais</Text>
            </View>
            <View>
                {
                    listPost.map(item=>{
                        return(
                            <Text key={item.id}>{item.name}</Text>
                        )
                    })
                }
            </View>
        </View>
    )
}