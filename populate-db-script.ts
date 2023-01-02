import Award from './src/models/Award'
import Post from './src/models/Post'
import Tour from './src/models/Tour'

const deleteCollections = async () => {
    Award.deleteMany()
    Post.deleteMany()
    Tour.deleteMany()
}
const populateCollections = async () => {
    createAwards()
    createPosts()
    createTour()
}
const createTour = async () => {
    const tour1 = new Tour({
        coverDescription: 'imagen portada',
            coverImageLink: 'https://res.cloudinary.com/dwh7vwgu4/image/upload/v1672240724/freetours-uploads/py3ym7uuifusddmg3v8m.png',
            duration: 'duracion',
            extraInfo:'extr',
            facebookUser: 'facebook',
            gallery: [{ title: 'un titulo', imageLink: 'https://res.cloudinary.com/dwh7vwgu4/image/upload/…240703/freetours-uploads/sqzva4i6v6bn2zanyy86.jpg', uploadDate: '2016-05-18T16:00:00Z',
            userRegisterId: {
                '_id': '5b6b6959828619572d48a9da'
              }}],
            instagramUser: 'instagr',
            logoImageLink: 'https://res.cloudinary.com/dwh7vwgu4/image/upload/v1672240723/freetours-uploads/v4mapfkpnp5qvd9pswxj.jpg',
            longerDescription: 'larga enca',
            meetingPoint: 'pto encuentro',
            meetingPointLink: 'link google maps',
            name: 'gonzalo free tour',
            password: 'contraseñ',
            route: [{name: 'punto', locationLink: 'linkpunto', imageLink: 'https://res.cloudinary.com/dwh7vwgu4/image/upload/…239978/freetours-uploads/ajpjbgsexysscpbufni2.jpg'},
            {name: 'punto2', locationLink: 'linkpunto2', imageLink: 'https://res.cloudinary.com/dwh7vwgu4/image/upload/…240629/freetours-uploads/wy4kr9ceytxva49qwwsf.jpg'}],
            schedules: 'horarios',
            shortDescription: 'corta encabezado',
            whatsAppNumber: '92013'
    })
    Tour.create(tour1)
}
const createAwards = async () => {
    const award1 = new Award({
        'date': '2016-05-18T16:00:00Z',
        'name': 'new name',
        'imageLink': 'unlink',
        'userRegisterId': {
          '_id': '5b6b6959828619572d48a9da'
        }
    })
    Award.create(award1)
}
const createPosts = async () => {
    const post1 = new Post({
        'title': 'un titlo',
        'subtitle': 'subtitulo',
        'imageLink': 'link de la ima',
        'date': '2016-05-18T16:00:00Z',
        'userRegisterId': {
            '_id': 'iddelusuario'
        },
        'content': [
            {'title': 'titulo del cont', 'paragraph': 'parrafo largo largo largo etcccc', 'imageLink': 'linkasdasdas'},
            {'title': 'titulo del cont2', 'paragraph': 'parrafo largo largoasdasdas largo etcccc', 'imageLink': 'linkasdasdas'},
            {'title': 'titulo del cont2', 'paragraph': 'parrafo largo largoasdasdas largo etcccc', 'imageLink': ''}
        ]
    })
    Post.create(post1)
}


const main = async () => {
    await deleteCollections()
    await populateCollections()
}

main()
export {}