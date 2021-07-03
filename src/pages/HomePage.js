//import React, { useState, useEffect } from "react"
//import { useFetch } from "./components/useFetch"

function HomePage() {
  return <div>Hello World</div>
}

export default HomePage

/* 
function HomePage() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=vwr50SLzfJKOBvYEJyfoqSEpVbcjfGuq1JOoxgdm"
      ).then(response => response.json())
      setData(result)
    }
    fetchData()
  }, [])
  return (
    <>
      <h1> We are not alone</h1>
      <>
        {" "}
        <img maxWidth={200} src={data.url} alt={data.title} />
        <h2>{data.title}</h2>
        <p>{data.date}</p>
        <p>{data.explanation}</p>
        ))
      </>
    </>
  )
}

*/
