

let initialState = {
        friends: [
            {id: 1, img: 'https://www.film.ru/sites/default/files/images/10(186).jpg', name: 'Nasty'},
            {id: 2, img: 'https://borealis.su/uploads/img/element1.png', name: 'Alexei'},
            {id: 3, img: 'https://pokemon-go.name/wp-content/uploads/2019/11/387-pokemon-turtwig.png', name: 'Ola'}
        ]
}

const friendsReducer = (state = initialState, action) => {

    return state
}

export default friendsReducer