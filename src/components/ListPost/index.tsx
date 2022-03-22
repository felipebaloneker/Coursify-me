import React from "react";
import { View,Text,Image,TouchableOpacity} from "react-native";
import {postMedia} from '../../hook/postMedia'
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { Post } from "../../screens/Post";
import { StackNavigationProp } from "@react-navigation/stack";

type render={
    rendered:string,
}
type Props={
    id:number;
    title:string;
    status:string;
    featured_media:number,
    content:string,
    page_view:number,
    categories:[number],
}
export type StackParamList = {
    Post:Props
}
type NavigationProps= StackNavigationProp<StackParamList>

export function ListPost({
    id,
    title,
    status,
    featured_media,
    content,
    page_view,
    categories,
}:Props){
    const {media} = postMedia(featured_media)
    const uri = media?.media_details.sizes.full.source_url
    const cleanContent = content.replace(/<\/?[^>]+(>|$)/g, "");
    const navigation = useNavigation<NavigationProps>()
    return(
        <TouchableOpacity onPress={()=>{navigation.navigate('Post' ,{
            id,
            title,
            status,
            featured_media,
            content,
            page_view,
            categories,
        })}}>
            <View style={styles.container}>
                <View>
                    <Image source={{uri}}
                    resizeMode="cover"
                    style={styles.image}
                    />
                </View>
                <View style={styles.textWrp}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{cleanContent}</Text>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>Leia Mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}