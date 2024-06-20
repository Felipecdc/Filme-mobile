import React, {useState} from "react";
import { Container, ListFilm } from "./styles";

import Header from "../../Components/Header";
import FilmeByGenre from "../../Components/FilmeByGenre";
import Movies from '../../Movies/Movies.json';

function Acao(){

    const movies = Movies;

    const [filme, setFilme] = useState(movies)

    function getMovieByGenre(genre){
        return filme.filter(item => item.genero === genre)
    }
    
    const movieComedia = getMovieByGenre('acao')


    return(
        <Container>
            <Header/>
            
            <ListFilm
            data={movieComedia}
            renderItem={ ({item}) => <FilmeByGenre data={item}/> }
            keyExtractor={ item => String(item.id)}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }} // Espaçamento entre as colunas
            />

        </Container>
    )
}

export default Acao;