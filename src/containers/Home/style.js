import styled from "styled-components";
import { Link } from "react-router-dom";
//import background from "./assets/bg-image.svg"



export const Conteiner = styled.div `

background-color: black;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;

@media only screen and (max-width: 600px) {
height: 120vh;
margin-bottom:30px; 



}
`;

export const Imagem = styled.img `
margin-top: 10px;

  height: 150px;
`; 

export const ConteinerItens = styled.div `
background: linear-gradient(

157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%

);

border-radius: 31px;
padding: 50px 36px;
display: flex;
flex-direction: column;
`;

export const H1 = styled.h1 `
display: flex;
justify-content: center;
color: aliceblue;
font-size: 30px;
margin-bottom: 30px;


`;

export const InputLabel = styled.p `
display: flex;
justify-content: start;
color: aliceblue;
font-family: Roboto;
margin-left: 5px;
margin-bottom: 0px;


`;

export const Input = styled.input `
width: 327px;
height: 48px;
border-radius: 10px;
background-color: rgb(255, 255, 255);
border: none;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
margin-top: 5px;
margin-bottom: 5PX;


`;

export const Button = styled(Link)`
font-size: 15px;
margin-top: 15px;
width: 327px;
height: 48px;
border-radius: 0px;
background-color: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
gap: 4px;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}
`;

