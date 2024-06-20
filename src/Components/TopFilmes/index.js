import React, {useState} from "react";
import {Text, Modal, View} from 'react-native';
import { Container, Title, Image, CardFilme } from "./styles";

import CartasFilme from "../CartasFilme";

function TopFilmesItem({ data }) {

    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <Container>
            <CardFilme onPress={() => setVisibleModal(true)}>
                <Image
                    source={{ uri: data.photo }}
                    resizeMode="contain"
                />

                <Title numberOfLines={1}>{data.name}</Title>
            </CardFilme>

            <Modal visible={visibleModal} animationType="fade" transparent={false}>
                <CartasFilme VisibleNone={() => setVisibleModal(false)} data={data}/>
            </Modal>
        </Container>
    );
}

export default TopFilmesItem;


