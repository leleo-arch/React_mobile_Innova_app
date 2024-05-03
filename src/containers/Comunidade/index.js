import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SearchForm = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  max-width: 400px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ResultItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ResultName = styled.strong`
  font-size: 18px;
  color: #333;
`;

const ResultAddress = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 5px;
`;

const ResultRating = styled.div`
  font-size: 16px;
  color: #666;
`;

const LoadingMessage = styled.p`
  font-size: 16px;
  color: #666;
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  color: red;
`;

const MartialArtsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
          searchQuery
        )}&type=gym&fields=name,formatted_address,rating&key=YOUR_API_KEY`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch search results.");
      }

      const data = await response.json();
      setSearchResults(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error searching for jiu-jitsu academies:", error);
      setError("Failed to fetch search results. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearchSubmit();
  }, []);

  return (
    <Container>
      <Title>Search for Jiu-Jitsu Academies</Title>
      <SearchForm onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          placeholder="Enter search term"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      {loading && <LoadingMessage>Loading...</LoadingMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && !error && (
        <ResultsList>
          {searchResults.map((result, index) => (
            <ResultItem key={index}>
              <ResultName>{result.name}</ResultName>
              <ResultAddress>{result.formatted_address}</ResultAddress>
              {result.rating && <ResultRating>Rating: {result.rating}</ResultRating>}
            </ResultItem>
          ))}
        </ResultsList>
      )}
    </Container>
  );
};

export default MartialArtsPage;


