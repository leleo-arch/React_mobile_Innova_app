import styled from "styled-components";
//import background from "./assets/bg-image.svg"

export const Conteiner = styled.div `

background-color: black;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;

`;

export const Imagem = styled.img `
margin-top: 10px;
width: 300px;
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

export const ConteinerNumeros = styled.div `
background: blue;
border-radius: 31px;
padding: 50px 36px;
display: flex;
flex-direction: column;
`;

export const H2 = styled.h2 `
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

export const Button = styled.button`
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

export const Data = styled.table `
background-color: rgb(255, 255, 255);
border-radius:20px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
display: flex;
flex-direction: column;
justify-content:space-around;
gap: 50px;

`

export const Body = styled.tbody `
background-color: rgb(255, 255, 255);
border-radius:20px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
display: block;

`