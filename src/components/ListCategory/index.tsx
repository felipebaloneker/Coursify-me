import React from "react"
import { View,Text } from "react-native"
import { RectButton } from 'react-native-gesture-handler'
import { posts } from "../../hook/posts"
import { ListPost } from "../ListPost"
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
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>{name}</Text>
                <RectButton>
                    <Text>VER MAIS ►</Text>
                </RectButton>
            </View>
            <View>
                {
                    listPost.map(item=>{
                        return(
                           <ListPost
                                key={item.id}
                                id={item.id}
                                title={item.title.rendered}
                                status={item.status}
                                featured_media={item.featured_media}
                                content={item.content.rendered}
                                page_view={item.page_view}
                                categories={item.categories}
                           />
                        )
                    })
                }
            </View>
        </View>
    )
}