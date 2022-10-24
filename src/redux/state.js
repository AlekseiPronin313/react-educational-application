import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi', likesCount: 12},
                {id: 2, message: 'hey', likesCount: 2},
                {id: 3, message: 'da', likesCount: 7},
                {id: 4, message: 'yes', likesCount: 33},
            ],
            newPostText: ''
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
            ],
            newMessageText: ''
        },
        friendsPage: {
            friends: [
                {id: 1, img: 'https://www.film.ru/sites/default/files/images/10(186).jpg', name: 'Nasty'},
                {id: 2, img: 'https://borealis.su/uploads/img/element1.png', name: 'Alexei'},
                {id: 3, img: 'https://pokemon-go.name/wp-content/uploads/2019/11/387-pokemon-turtwig.png', name: 'Ola'}
            ]
        }
    },
    _callSubscriber() {
        console.log("yes")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action)

        this._callSubscriber(this._state)
    }
}

export default store