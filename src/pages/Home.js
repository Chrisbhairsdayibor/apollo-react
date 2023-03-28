import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';


const GET_COUNTRIES = gql`
{
    countries{
      code
      emoji
      currency
      continent{
        name
      }
    }
  }
`;

export default function Home() {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
  return (
    <div>
{loading && (
<RingLoader
 color="#3637d6"
  />
)}
{error && <h1>{<pre>{JSON.stringify(error, null, 2)}</pre>}</h1>}
{data && (
<>
{data.countries.map((item) => (
  <div key={item.code}>
    <h1>{item.name}</h1>
    <h1>{item.emoji}</h1>
    <Link to={`/${item.code}`}>Details</Link>
  </div>
))}
</>
)}
  </div>
  )
}