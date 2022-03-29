 const movie =  {
    type: 'document',
    name: 'Movie',
    title: 'Movie',
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'Tittel',
            description: 'Her kan du legge til en tittel'
        },
        {
            title: 'Actor',
            name: 'Actor',
            type: 'reference',
            to: [{type: 'Actor'}],
        },
    ],
}

export default movie;