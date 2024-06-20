import React from "react";
import {Text} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { Container, Title, Hamburguer } from "./styled";

function Header(){

    const navigation = useNavigation()

    return(
        <Container>
            <Title>Tele
                <Text style={{color: 'red'}}>Flix</Text>
            </Title>
            <Hamburguer onPress={() => navigation.openDrawer()}>
                <Feather
                name="menu"
                size={32}
                color="#fff"
                />
            </Hamburguer>
        </Container>
    )
}

export default Header;