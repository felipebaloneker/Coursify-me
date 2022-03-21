import React from "react"
import { View,Text } from "react-native"
import { styles } from "./styles"

type Props= {
    id:number|string,
    name:string
}

export function ListCategory({
    id,
    name,
}:Props){
    return(
        <View key={id}>
            <Text style={styles.title}>{name}</Text>
            <Text>Ver Mais</Text>
        </View>
    )
}