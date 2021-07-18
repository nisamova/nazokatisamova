import React from "react"
import { useFetch } from "./useFetch"

export default function Nasaimageall() {
  const { loading, data, error } = useFetch(
    "https://api.nasa.gov/planetary/apod?api_key=vwr50SLzfJKOBvYEJyfoqSEpVbcjfGuq1JOoxgdm"
  )
  if (loading) return <h1> loading....</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return (
    <div>
      <p>{data.description}</p>
      <img width={500} src={data.url} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.date}</p>
    </div>
  )
}