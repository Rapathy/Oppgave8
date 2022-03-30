import { useState } from 'react'
import { getMovie } from '../lib/services/movieService'

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
      <ul>
      {data.map((tittel) => (
        <li key ={tittel.title}>
          {tittel.title}
        </li>
      ))}
    </ul>
      <h2>Skuespillere:</h2>
      <ul>
      {data.map((Skuespiller) => (
        <li key={Skuespiller._id}>
          {Skuespiller.Actor}
        </li>
      ))}
      </ul>
       {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null}
      <button type="button" onClick={getData}>
        Vis film
      </button>
    </div>
  )
}
