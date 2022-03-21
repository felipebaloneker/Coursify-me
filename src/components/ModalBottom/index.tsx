import React, { useState } from "react";
import { View, Text, Modal } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import {styles} from './styles'

export default function ModalBottom(){
    const [modalOpen,setModalOpen]= useState(true)
    const modalClose =()=>{
        console.log('close')
        setModalOpen(false)
    }
    // useEffect(()=>{
    //     setTimeout(modalClose,1000 * 10)
    // },[])

    return(
        <Modal 
        transparent={true}
        visible={modalOpen}
        >
            <View style={styles.modal}>
                <View>

                </View>
                <View>

                </View>
                <View>
                    <RectButton style={styles.button}>
                        <Text style={styles.modalText}>Quero conhecer a plataforma</Text>
                    </RectButton>
                </View>
            </View>                   
        </Modal>
    )
}