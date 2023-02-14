import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {actions} from "../../redux/dialogs-reducer";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions}), withAuthRedirect)(Dialogs)



