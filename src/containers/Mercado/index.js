import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logoinnocva.png';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Imagem = styled.img`
  background-color: black;
  border-radius: 10px;
  height: 150px;
  margin-bottom: 30px;

  @media only screen and (max-width: 700px) {
    margin-bottom: 30px;
    margin-top: 50px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 25px;
  width: 90%;
  padding: 20px;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 700px) {
    width: 95%;
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProductCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const ProductName = styled.h2`
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  color: #007bff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const products = [
  {
    id: 1,
    name: 'Kimono Jiu-Jitsu Branco',
    price: 'R$ 250,00',
    image: 'https://example.com/kimono-branco.jpg',
  },
  {
    id: 2,
    name: 'Faixa Preta',
    price: 'R$ 50,00',
    image: 'https://example.com/faixa-preta.jpg',
  },
  {
    id: 3,
    name: 'Protetor Bucal',
    price: 'R$ 30,00',
    image: 'https://example.com/protetor-bucal.jpg',
  },
  {
    id: 4,
    name: 'Luva de Sparring',
    price: 'R$ 120,00',
    image: 'https://example.com/luva-sparring.jpg',
  },
];

const MarketPage = () => {
  return (
    <Body>
      <Imagem alt="img-logo" src={logo} />
      <Container>
        <Title>Mercado de Jiu-Jitsu</Title>
        <ProductList>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <Button>Adicionar ao Carrinho</Button>
            </ProductCard>
          ))}
        </ProductList>
      </Container>
    </Body>
  );
};

export default MarketPage;
