import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import New from '../components/New';
import House from '../components/House';
import Modalsize from '../components/Modalsize';
import Recommended from '../components/Recommended';

import { Modal, TouchableOpacity } from 'react-native-web';

export default function Home() {

    const [visivel, setvisivel] = useState(false);
    const [visivel2, setvisivel2] = useState(false);
    const [visivel3, setvisivel3] = useState(false);

    const navigation = useNavigation();
    return (

        <ScrollView
            showVerticalScrollindicator={false}
            style={{ backgroundColor: '#FFF' }}
        >

            <View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={visivel}>
                    <View style={styles.modal}>

                        <Image
                            source={require('../assets/house2.jpg')}
                            style={styles.cover}
                        />
                        <View style={styles.headerContent}>
                            <View style={{ width: '65%' }}>
                                <Text style={styles.title}>Casa de Praia</Text>
                            </View>

                            <View style={{ width: '35%' }}>
                                <Text style={styles.rating}> Recomendado</Text>
                            </View>
                        </View>

                        <Text style={styles.price}>
                            R$ 1.200,20
                        </Text>
                        <Text style={styles.description}>
                            Casa nova uma quadra do mar, lugar seguro e monitorado 24horas,
                            próximo a comércio ótimo lugar pra temporada.

                        </Text>
                        <Text style={styles.description}> Proprietario: Elba Faria  47-1234-5678</Text>

                        <TouchableOpacity
                            style={{ marginTop: 10 }}
                            onPress={() => { setvisivel(false) }}>
                            <Text>Voltar</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
            </View>

            <View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={visivel2}>
                    <View style={styles.modal}>

                        <Image
                            source={require('../assets/house1.jpg')}
                            style={styles.cover}
                        />
                        <View style={styles.headerContent}>
                            <View style={{ width: '65%' }}>
                                <Text style={styles.title}>Casa de Praia</Text>
                            </View>

                            <View style={{ width: '35%' }}>
                                <Text style={styles.rating}> Recomendado</Text>
                            </View>
                        </View>

                        <Text style={styles.price}>
                            R$ 2.100,00
                        </Text>
                        <Text style={styles.description}>
                            Casa para o ano todo, muito próxima a praia do galeão, condominio fechado.
                        </Text>
                        <Text style={styles.description}> Proprietario: João da Silva - 21 4568-8451</Text>

                        <TouchableOpacity
                            style={{ marginTop: 10 }}
                            onPress={() => { setvisivel2(false) }}>
                            <Text>Voltar</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
            </View>

            <View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={visivel3}>
                    <View style={styles.modal}>

                        <Image
                            source={require('../assets/house1.jpg')}
                            style={styles.cover}
                        />
                        <View style={styles.headerContent}>
                            <View style={{ width: '65%' }}>
                                <Text style={styles.title}>Casa de Campo</Text>
                            </View>

                            <View style={{ width: '35%' }}>
                                <Text style={styles.rating}> Recomendado</Text>
                            </View>
                        </View>

                        <Text style={styles.price}>
                            R$ 7.000,00
                        </Text>
                        <Text style={styles.description}>
                            Casa nas montanhas,muito próximo a Campos de Jordão,condominio fechado monitorado 24H por dia.
                        </Text>
                        <Text style={styles.description}> Proprietario: Wagner Harada - 11 1234-5678</Text>

                        <TouchableOpacity
                            style={{ marginTop: 10 }}
                            onPress={() => { setvisivel3(false) }}>
                            <Text>Voltar</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
            </View>

            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name="search" size={24} color="black" />
                    <TextInput
                        placeholder='o que esta procurando?'
                        style={styles.input} />
                </View>
            </View>
            <View style={styles.contentnew}>
                <Text style={styles.title} >Novidades</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
                <New
                    cover={require('../assets/house1.jpg')}
                    name="Rio de Janeiro"
                    description="Casa de Praia"
                    onPress={() => { setvisivel2(true) }}
                />
                <New
                    cover={require('../assets/house2.jpg')}
                    name="Santa Catarina"
                    description="Casa de Praia"
                    onPress={() => { setvisivel(true) }}
                />
                <New
                    cover={require('../assets/house3.jpg')}
                    name="São Paulo"
                    description="Casa de Campo"
                    onPress={() => { setvisivel3(true) }}
                />


            </ScrollView>

            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                <Text style={[styles.title, { marginTop: 20 }]}>Próximo de você</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
                <House
                    cover={require('../assets/house4.jpg')}
                />
                <House
                    cover={require('../assets/house5.jpg')}
                />
                <House
                    cover={require('../assets/house6.jpg')}
                />
            </ScrollView>

            <Text style={[styles.title, { marginTop: 20 }]}>Dica do dia</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
                <Recommended
                    cover={require('../assets/house1.jpg')}
                    house="Casa Santa Catarina"
                    offer="20%"
                />
                <Recommended
                    cover={require('../assets/house6.jpg')}
                    house="Casa São Paulo"
                    offer="15%"
                />
                <Recommended
                    cover={require('../assets/house5.jpg')}
                    house="Casa Recife"
                    offer="10%"
                />
            </ScrollView>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10
    },
    input: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 18,
        width: '90%',
        borderRadius: 10,
        elevation: 4
    },
    contentnew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    }, modal: {
        backgroundColor: 'white',
        marginTop: '50%',
        marginBottom: '50%',
        marginRight: '5%',
        marginLeft: '5%',
        padding: 20,
        borderRadius: 20,
        elevation: 10,
        alignItems: 'center',
    },
    cover: {
        borderRadius: 10,
        width: 300,
        height: 300
    },
    headerContent: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    rating: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 12,
        color: '#4f4a4a'
    },
    price: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        color: '#000',
        marginTop: 10
    },
    description: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 20,
        color: '#000',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 20,
    },

});