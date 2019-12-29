import React from 'react'
import {connect} from 'react-redux'
import {requestTask} from "../../redux/reducers/task-reducer";
import {getTask, getIsFetching} from "../../redux/selectors/task-selectors";
import Table from "./table";
import Preloader from "../../components/preloader/preloader";

class Task extends React.Component {
    componentDidMount() {
        this.props.requestTask();
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Table data={this.props.task}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return (
        {
            task: getTask(state),
            isFetching: getIsFetching(state)
        }
    )
}

export default connect(mapStateToProps, {requestTask, getIsFetching})(Task);