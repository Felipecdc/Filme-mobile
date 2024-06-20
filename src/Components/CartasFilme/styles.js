import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #101010
`;

export const Header = styled.View`
    height: 50px;
    justify-content: center;
    margin-left: 15px
`;

export const Sair = styled.TouchableOpacity`
    width: 20px;
    align-items: center
`;

export const AreaFilme = styled.View`  
    width: 100%;
    height: 420px;
    justify-content: center;
    align-items: center;
    background-color: #202020;
`;

export const Card = styled.Image`
    width: 300px;
    height: 390px;
    margin-bottom: 5px;
`;

export const View = styled.View`
    justify-content: space-between;
    align-items: center;
    padding-vertical: 10px;
    padding-horizontal: 50px;
    flex-direction: row;
`;

export const Touch = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding-vertical: 10px;
    width: 70px;
    height: 50px;
    border-radius: 5px;
    background-color: #505050
`;

export const AreaDescription = styled.View`
    align-items: center
`;

export const Title = styled.Text`
    color: #ddd;
    margin-top: 30px;
    font-size: 25px;
    font-weight: bold;
    text-align: center
`;

export const Description = styled.ScrollView`
    width: 400px;
    height: 100px;
    background-color: #252525;
    padding-horizontal: 10px;
    padding-vertical: 5px;
    margin-top: 20px
`;

