import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const SuperDialogContainer = connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage
}) (Dialogs)

export default SuperDialogContainer