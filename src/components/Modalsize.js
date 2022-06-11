import { View, Text } from 'react-native'
import React from 'react'
import { Modal } from 'react-native-web'

export default function Modalsize() {
    return (
        <Modal
            ref={modal}>
            <Text>Teste</Text>
        </Modal>
    )
}