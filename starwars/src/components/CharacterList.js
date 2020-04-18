import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

const CharacterList = () => {

   const [characters, setCharacters] = useState([]);
    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/character/')
            .then(response => {
                console.log('This is the response', response);
                setCharacters(response.data.results);
            })
    },[])

    return (
      <Container>
          {characters.map(info => {
              return <Character characterInfo={info} key={info.id} />;
})}
      </Container>  
    );
}

export default CharacterList;