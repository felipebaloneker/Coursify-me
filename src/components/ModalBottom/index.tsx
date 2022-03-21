import React, { useState } from "react";
import { View, Text, Modal } from "react-native";
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
                <Text>modal</Text>
            </View>                   
        </Modal>
    )
}