import React from "react";
import { View,Text,Image} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { WebView } from 'react-native-webview';
import {postMedia} from '../../hook/postMedia'
import { styles } from "./styles";
import logo from '../../assets/logo.png'
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
    const uri = "https://discord.com/assets/f9bb9c4af2b9c32a2c5ee0014661546d.png"
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
                <Text style={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum in omnis architecto libero qui accusantium quod, reprehenderit placeat facere eligendi, porro asperiores alias temporibus ab cum! Dolores dicta quos laudantium.</Text>
                <RectButton>
                    <Text style={styles.buttonText}>Leia Mais</Text>
                </RectButton>
            </View>
            {/* <WebView
            originWhitelist={['*']}
            source={{html:content}}/> */}
        </View>
    )
}