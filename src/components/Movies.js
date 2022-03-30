import { useEffect, useState } from 'react'
import { getActor, getMovie } from '../lib/services/movieService'

export default function Movie({ title, actor }) {
  const [data, setData] = useState([])

  const getData = async () => {
    const data = await getMovie([])
    setData(data)
    console.log(data)
  }

  return (
    <div className="-2 mx-auto mt-6 max-w-sm border p-6">
      <h2>Filmer:</h2>
      {data.map((tittel) => (
        <p>{tittel.title}</p>
      ))}
      <h2>Skuespillere:</h2>
      {data.map((Skuespiller) => (
        <p>{Skuespiller.Actor}</p>
      ))}
      {/* {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null} */}
      <button type="button" onClick={getData}>
        Vis film
      </button>
    </div>
  )
}
