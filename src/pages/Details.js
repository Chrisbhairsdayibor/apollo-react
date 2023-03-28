import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'

const COUNTRY=gql`
query Country($code: ID!) {
    country(code: $code) {
        name
    }
}

`
export default function Details() {
const { id } = useParams()

const {data,error,loading}=useQuery(COUNTRY, {
variables: { code: id},
})
    
  return (
    <div>
      <h1>Details</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}