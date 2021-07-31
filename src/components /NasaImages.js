import React, { useState, useEffect } from "react"
import { Image } from "react-bootstrap"

function NasaImages() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=vwr50SLzfJKOBvYEJyfoqSEpVbcjfGuq1JOoxgdm&start_date=2021-07-08&end_date=2021-07-10"
      ).then(response => response.json())
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>Previous Nasa Images</h1>
      {data.map(media => (
        <div key={media.date}>
          <Image
            src={data.url}
            alt={data.title}
            height={200}
            width={200}
            fluid
          />
          <p>{media.title}</p>
          {media.date}
          <p>{media.explanation}</p>
        </div>
      ))}
    </>
  )
}

export default NasaImages
