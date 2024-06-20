import React from "react";
import {View, Text, StyleSheet} from 'react-native';

import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';

export default function CustomDrawer(props){
    return(
        <DrawerContentScrollView {...props} >

            <View style={styles.container}>
                <Text style={styles.title}>Os melhores filmes <Text style={{color: '#d60202', fontWeight: 500, fontStyle: "italic"}}>para você</Text></Text>
            </View>

            <DrawerItemList {...props} />

            <View style={{alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: '#454545'}}>Criado por: Felipe Castro</Text>
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center", 
        justifyContent: "center", 
        marginTop: 25,
        marginBottom: 30,
        paddingHorizontal: 10
    },
    title:{
        color: "#ddd",
        fontSize: 25,
        textAlign: "center",
        fontStyle: "italic",
        shadowColor: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.85)', // Cor da sombra
        textShadowOffset: { width: 5, height: 3 }, // Deslocamento horizontal e vertical da sombra
        textShadowRadius: 5, // Raio da sombra
    }
})

