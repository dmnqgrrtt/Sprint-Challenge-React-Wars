// Write your Character component here
import React from 'react';
import styled from "styled-components";

const TextBody = styled.div`
    background: black;
    border: 10px solid gray;
    border-radius: 10px;
`;

const Text = styled.p`
    color: blue;
    border-top: 2px solid gray;
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 3%;
`;

const Name = styled.h2`
    color: blue;
`;

const Container = styled.div`
    width: 30%;
`;

const Character = (props) => {
    
    const info = props.characterInfo;

    return (
        <Container>
            <img src={info.image}/>
            <TextBody>
                <Name>{info.name}</Name>
                <Text>STATUS: {info.status}</Text>
                <Text>SPECIES: {info.species}</Text>
                <Text>GENDER: {info.gender}</Text>
                <Text>ORIGIN: {info.origin.name}</Text>
                <Text>LAST LOCATION: {info.location.name}</Text>
            </TextBody>
        </Container>
    );

}

export default Character;