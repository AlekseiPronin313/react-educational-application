const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi', likesCount: 12},
                {id: 2, message: 'hey', likesCount: 2},
                {id: 3, message: 'da', likesCount: 7},
                {id: 4, message: 'yes', likesCount: 33},
            ],
            newPostText: 'yes'
        },
        dialogsPage: {
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
            ]
        },
        friendsPage: {
            friends: [
                {id: 1, img: 'https://www.film.ru/sites/default/files/images/10(186).jpg', name: 'Nastya'},
                {id: 2, img: 'https://borealis.su/uploads/img/element1.png', name: 'Alexei'},
                {id: 3, img: 'https://pokemon-go.name/wp-content/uploads/2019/11/387-pokemon-turtwig.png', name: 'Ola'}
            ]
        }
    },
    _callSubscriber()  {
        console.log("yes")
    },
    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export default store