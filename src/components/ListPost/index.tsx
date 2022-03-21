import React from "react";
import { View,Text,} from "react-native";
import { WebView } from 'react-native-webview';
import {postMedia} from '../../hook/postMedia'
import { styles } from "./styles";
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
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <WebView
            html={{content}}
            />
        </View>
    )
}