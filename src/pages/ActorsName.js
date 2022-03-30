import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getActorBySlug } from '../lib/services/movieService'

function ActorsName() {
  const [actor, setActor] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    const getActor = async () => {
      const data = await getActorBySlug(slug)
      setActor(data)
      console.log(data)
    }
    getActor()
  }, [])

  return (
    <div className="-2 mx-auto mt-6 max-w-sm border p-6">
      <h1>Navn på Skuespiller</h1>
      {JSON.stringify(actor)}
    </div>
  )
}

export default ActorsName
