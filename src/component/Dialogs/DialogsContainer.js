import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const SuperDialogContainer = connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage
}) (AuthRedirectComponent)

export default SuperDialogContainer