import { useEffect, useState } from 'react'
import { getActor, getMovie } from '../lib/services/movieService'

export default function Movie({ title, actor }) {
  const [data, setData] = useState([])

  const getData = async () => {
    const data = await getMovie([])
    setData()
    console.log(data)
    
  
  }

  return (
    <div className='mx-auto mt-6 max-w-sm border -2 p-6'>
      {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null}
      <button type="button" onClick={getData}>
        Vis film
      </button>
    </div>
  )
}
