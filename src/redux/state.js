const state = {
    posts: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'hey', likesCount: 2},
        {id: 3, message: 'da', likesCount: 7},
        {id: 4, message: 'yes', likesCount: 33},
    ],
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Ola'},
        {id: 4, name: 'Nasty'},
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hey'},
        {id: 3, message: 'da'},
        {id: 4, message: 'yes'},
    ],
    friends: [
        {id:1, img: 'https://www.film.ru/sites/default/files/images/10(186).jpg', name: 'Nastya'},
        {id:2, img: 'https://borealis.su/uploads/img/element1.png', name: 'Alexei'},
        {id:3, img: 'https://pokemon-go.name/wp-content/uploads/2019/11/387-pokemon-turtwig.png', name: 'Ola'}
    ]
}

export default state