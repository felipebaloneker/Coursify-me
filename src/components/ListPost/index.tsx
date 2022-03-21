import React from "react";
import { View,Text,Image} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { WebView } from 'react-native-webview';
import {postMedia} from '../../hook/postMedia'
import { styles } from "./styles";
import logo from '../../assets/logo.png'
import RenderHtml from "react-native-render-html";

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
    const uri = media?.media_details.sizes.full.source_url
    const cleanContent = content.replace(/<\/?[^>]+(>|$)/g, "");
    return(
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
                <RectButton>
                    <Text style={styles.buttonText}>Leia Mais</Text>
                </RectButton>
            </View>

        </View>
    )
}