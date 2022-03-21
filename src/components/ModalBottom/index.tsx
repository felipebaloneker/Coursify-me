import React, { useEffect, useState } from "react";
import { View, Text, Modal, Image, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import {styles} from './styles'
import logo from '../../assets/logo-coursify-w.png'

export default function ModalBottom(){
    const [modalOpen,setModalOpen]= useState(true)
    const modalClose =()=>{
        setModalOpen(false)
    }
    useEffect(()=>{
        setTimeout(modalClose,1000 * 10)
    },[])

    return(
        <Modal 
        transparent={true}
        visible={modalOpen}
        >
            <View style={styles.modal}>
                <View>
                    <Image
                    source={logo}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.modalText}>O Coursify.me é uma plataforma de ensino a distância,onde qualquer pessoa ou empresa pode construir seuEAD e vender cursos pela internet.</Text>
                </View>
                <View>
                    <RectButton style={styles.button}>
                        <Text style={styles.modalText} onPress={()=>Linking.openURL('https://coursify.me/')}>Quero conhecer a plataforma</Text>
                    </RectButton>
                </View>
            </View>                   
        </Modal>
    )
}