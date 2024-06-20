import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #191919;
    padding-vertical: 10px;
    align-items: center
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
`;

export const Image = styled.Image`
    width: 170px;
    height: 260px;
    margin-bottom: 5px;
`;

export const CardFilme = styled.TouchableOpacity`
    width: 200px;
    margin-horizontal: 8px;
    padding-horizontal: 8px;
    padding-vertical: 10px;
    background-color: #303030;
    justify-content: center;
    align-items: center;
`;
