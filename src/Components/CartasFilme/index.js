import React from "react";
import {Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Container, Title, AreaFilme, Card, Header, Sair, AreaDescription, View, Touch, Description } from "./styles";


function CartasFilme({VisibleNone, data}){
    return(
        <Container>
            <Header>
                <Sair onPress={VisibleNone}>
                    <Text
                    style={{color: "#a9a9a9", fontSize: 18}}
                    >
                        X
                    </Text>
                </Sair>
            </Header>

            <AreaFilme>
                <Card
                source={{uri : data.photo}}
                resizeMode="contain"
                />
            </AreaFilme>

            <View>
                <Touch>
                    <Feather name="star" size={20} color="#ddd"/>
                </Touch>
                <Touch style={{backgroundColor: '#e63740'}}>
                    <Feather name="video" size={20} color="#ddd"/>
                </Touch>
                <Touch>
                    <Feather name="film" size={20} color="#ddd"/>
                </Touch>
            </View>

            <AreaDescription>
                <Title>{data.name}</Title>  
                <Description>
                    <Text
                    style={{color: '#ddd', fontSize: 15}}
                    >
                        {data.description}
                    </Text>
                </Description>
            </AreaDescription>

        </Container>
    )
}

export default CartasFilme;