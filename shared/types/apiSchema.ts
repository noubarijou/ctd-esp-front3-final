export type FormData = {
    name: string
    lastname: string
    email: string
    address1: string
    address2?: string
    city: string
    state: string
    zipCode: string
    number: string
    cvc: string
    expDate: string
    nameOnCard: string
}

export type Character = {
    id: number
    name: string
    description: string
    modified: string
    thumbnail: {
        path: string
        extension: string
    },
    resourceURI: string
    comics: {
        available: number
        collectionURI: string
        items: [
            {
                resourceURI: string
                name: string
            },
        ],
        returned: number
    },
    series: {
        available: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            },
        ],
        returned: number
    },
    stories: {
        available: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string,
                type: string
            },
        ],
        returned: number
    },
    events: {
        available: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ],
        returned: number
    },
    urls: [
        {
            type: string
            url: string
        },
    ]
}

export type Comic = {
    id: string
    title: string
    thumbnail: {
        path: string
        extension: string
    }
    price: number
    stock: number
    characters: characters
}

type characters = {
    available: number
    returned: number
    collectionURI: string
    items: items[]
}

type items = {
    resourceURI: string
    name: string
    role: string
    comics: string
}