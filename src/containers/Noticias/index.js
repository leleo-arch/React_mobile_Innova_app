import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const NewsContainer = styled.div`
  padding: 20px;
  background: linear-gradient(to right, #ffffff, #f0f0f0);
  min-height: 100vh;
`;

const NewsItem = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NewsTitle = styled.h2`
  font-size: 1.8em;
  color: #333;
`;

const NewsDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

const NewsImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const NewsLink = styled.a`
  display: inline-block;
  font-size: 1em;
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const JiuJitsuNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2024-08-27&sortBy=popularity&apiKey=API_KEY', {
         
        });
        setArticles(response.data.value);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar as notícias');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <NewsContainer>
      <h1>Notícias de Jiu-Jitsu</h1>
      {articles.lngth > 0 ? (
        articles.map((article, index) => (
          <NewsItem key={index}>
            {article.image.url && <NewsImage src={article.image.url} alt={article.title} />}
            <NewsTitle>{article.title}</NewsTitle>
            <NewsDescription>{article.description}</NewsDescription>
            <NewsLink href={article.url} target="_blank" rel="noopener noreferrer">
              Leia mais
            </NewsLink>
          </NewsItem>
        ))
      ) : (
        <p>Nenhuma notícia encontrada.</p>
      )}
    </NewsContainer>
  );
};

export default JiuJitsuNews;

