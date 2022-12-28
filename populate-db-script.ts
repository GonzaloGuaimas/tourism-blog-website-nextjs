import Award from './models/Award'
import Post from './models/Post'
import Tour from './models/Tour'

const deleteCollections = async () => {
    Award.deleteMany()
    Post.deleteMany()
    Tour.deleteMany()
}
const populateCollections = async () => {
    createAwards()
    createPosts()
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