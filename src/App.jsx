// src/App.jsx
import React from 'react'; // <-- Línea que faltaba
import { useQuery } from 'urql';
import './App.css';

const GET_TOKENS = `
  query GetTopTokens {
    tokens(first: 10, orderBy: volumeUSD, orderDirection: desc) {
      id
      symbol
      name
      volumeUSD
    }
  }
`;

function App() {
  const [{ data, fetching, error }] = useQuery({
    query: GET_TOKENS,
  });

  if (fetching) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h1>Tokens más Populares en Uniswap v3</h1>
      <table>
        <thead>
          <tr>
            <th>Símbolo</th>
            <th>Nombre</th>
            <th>Volumen (USD)</th>
          </tr>
        </thead>
        <tbody>
          {data.tokens.map((token) => (
            <tr key={token.id}>
              <td>{token.symbol}</td>
              <td>{token.name}</td>
              <td>${parseFloat(token.volumeUSD).toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;