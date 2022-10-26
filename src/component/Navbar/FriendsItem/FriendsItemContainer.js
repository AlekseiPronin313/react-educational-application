import React from "react";
import FriendsItem from "./FriendsItem";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage
    }
}

const FriendsItemContainer = connect(mapStateToProps) (FriendsItem)

export default FriendsItemContainer