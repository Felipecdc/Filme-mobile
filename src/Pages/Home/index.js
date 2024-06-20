    import React, {useState} from "react";
    import {View, Text, ScrollView} from 'react-native';
    import { Container, TopFilmes, TitleTop, LabelTop, List, AreaFilmeList, LabelTitle, Title } from "./style";

    import Header from "../../Components/Header";
    import Movies from '../../Movies/Movies.json';
    import TopFilmesItem from "../../Components/TopFilmes";
    import ListFilmes from "../../Components/ListFilme";

    function Home(){

        const movies = Movies;
        const [filme, setFilme] = useState(movies) 

        // TODOS 10 FILMES
        const getTopMovies = () => {
            return filme
            .slice()
            .sort((a, b) => b.like - a.like)
            .slice(0, 10);
        }
        const topMovies = getTopMovies();

        // FILTRO DE FILMES POR GENERO
        const getMovieByGenre = (genre) => {
            return filme.filter(item => item.genero === genre)
        }
        const acaoMovie = getMovieByGenre('acao');
        const comediaMovie = getMovieByGenre('comedia');
        const romanceMovie = getMovieByGenre('romance');
        const terrorMovie = getMovieByGenre('terror');
        const aventuraMovie = getMovieByGenre('aventura');


        

        return(
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flex: 1}}
            >
            <Container>

                <Header/>

                <TopFilmes>
                    <LabelTop>
                        <TitleTop>Top 10 filmes mais curtidos</TitleTop>
                    </LabelTop>
                    <List
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={topMovies}
                    keyExtractor={ item => String(item.id)}
                    renderItem={({item}) => <TopFilmesItem data={item}/>}
                    />
                </TopFilmes>

                <AreaFilmeList>

                    <LabelTitle>
                        <Title>Ação</Title>
                    </LabelTitle>
                    <List
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={acaoMovie}
                    keyExtractor={ item => String(item.id)}
                    renderItem={({item}) => <ListFilmes data={item}/>}
                    />

                    <LabelTitle>
                        <Title>Comédia</Title>
                    </LabelTitle>
                    <List
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={comediaMovie}
                    keyExtractor={ item => String(item.id)}
                    renderItem={({item}) => <ListFilmes data={item}/>}
                    />

                    <LabelTitle>
                        <Title>Terror</Title>
                    </LabelTitle>
                    <List
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={terrorMovie}
                    keyExtractor={ item => String(item.id)}
                    renderItem={({item}) => <ListFilmes data={item}/>}
                    />              

                    <LabelTitle>
                        <Title>Romance</Title>
                    </LabelTitle>
                    <List
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={romanceMovie}
                    keyExtractor={ item => String(item.id)}
                    renderItem={({item}) => <ListFilmes data={item}/>}
                    />     

                    <LabelTitle>
                        <Title>Aventura</Title>
                    </LabelTitle>
                    <List
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={aventuraMovie}
                    keyExtractor={ item => String(item.id)}
                    renderItem={({item}) => <ListFilmes data={item}/>}
                    />                                                   

                </AreaFilmeList> 

            </Container>
            </ScrollView>
        )
    }

    export default Home;