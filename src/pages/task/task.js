import React from 'react'
import {connect} from 'react-redux'
import {changeRow, changeSort, changeSortField, requestTask} from "../../redux/reducers/task-reducer";
import {getIsFetching, getRow, getSortField, getSortType} from "../../redux/selectors/task-selectors";
import Table from "./table";
import Preloader from "../../components/preloader/preloader";
import _ from 'lodash'
import DetailRowView from "./detailRowView";

class Task extends React.Component {
    componentDidMount() {
        this.props.requestTask();
    }

    onSort = (sortField) => {
        if (this.props.sortType === 'asc') {
            this.props.changeSort('desc')
        } else {
            this.props.changeSort('asc')
        }
        this.props.changeSortField(sortField)
    }

    onRowSelect = (row) => {
this.props.changeRow(row)
    }



    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Table data={this.props.task} onSort={this.onSort} sortType={this.props.sortType} sortField={this.props.sortField} onRowSelect={this.onRowSelect}/>
                {this.props.row ? <DetailRowView person={this.props.row}/> : null}
            </div>
        )
    }
}

const sortBy = (task, sortField, sort) => {
    return _.orderBy(task, sortField, sort);
    }

let mapStateToProps = (state) => {
    return (
        {
            task: sortBy(state.task.task, state.task.sortField, state.task.sortType),
            isFetching: getIsFetching(state),
            sortType: getSortType(state),
            sortField: getSortField(state),
            row: getRow(state)
        }
    )
}

export default connect(mapStateToProps, {requestTask, getIsFetching, changeSortField, changeSort, changeRow})(Task);