const actor = {
    type: 'document',
    name: 'Actor',
    title: 'Actor',
    fields: [
        {
            type: 'string',
            name: 'full_name',
            title: 'Fullt navn',
            description: 'Legge til ditt fulle navn'
        },
        {
            type: 'slug',
            name: 'name',
            title: 'Navn',
            options:{
                source:'title',
                slugify: (input) =>
                input.toLowerCase().replace(/\s+/g, '-').slice(0, 50)

            }
        },
    ], 
}

export default actor;