import client from '../client'

const moviefields = `
  title,
  "Actor" : Actor -> name.current,
  _id

`
const actorfields = `
  title,
  name,
  "slug": slug.current,
  _id
`

export const getMovie = async () => {
  const data = await client.fetch(`*[_type == "Movie"]{${moviefields}}`)
  return data
}

export const getActor = async () => {
  const data = await client.fetch(`*[_type == "Actor"]{${actorfields}}`)
  return data
}

export const getActorBySlug = async (slug) => {
  const data = await client.fetch(
    `*[_type == "Actor" && slug.current == $slug]{${actorfields}}`,
    { slug }
  )
  return data?.[0]
}

export const getMovieByActor = async (Actor) => {
  const data = await client.fetch(
    `*[_type == "Movie" && Actor->name.current== $Actor]{${actorfields}}`,
    { Actor }
  )
  return data
}
