import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 85px;
    background-color: #151515;
    justify-content: center;
    align-items: center;
    flex-direction: row
`;

export const Title = styled.Text`
    color: #e9e9e9;
    font-size: 35px
`;

export const Hamburguer = styled.TouchableOpacity`
    position: absolute;
    left: 20px
`;