import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getActor } from '../lib/services/movieService'

export default function ActorsPage() {
  const [actor, setActor] = useState([])

  const getActorData = async () => {
    const actors = await getActor([])
    setActor(actors)
    
  
  }

  useEffect(() => {
    getActorData()
  }, [])

  return (
    <div className="-2 mx-auto mt-6 max-w-sm border p-6">
      <section>
        <ul>
        {actor?.map((skuespillere) => (
         <li key ={skuespillere._id}>
          <Link to={`/actors/${skuespillere.slug}`}>{skuespillere.name.current}</Link>
        </li>
        ))}
        </ul>
      </section>
    </div>
  )
}
