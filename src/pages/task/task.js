import React from 'react'
import {connect} from 'react-redux'
import ReactPaginate from 'react-paginate';
import {
    changeCurrentPage,
    changeIsModeSelected,
    changeRow,
    changeSort,
    changeSortField,
    requestTask
} from "../../redux/reducers/task-reducer";
import {
    getCurrentPage,
    getIsModeSelected,
    getRow,
    getSortField,
    getSortType
} from "../../redux/selectors/task-selectors";
import Table from "./table";
import Preloader from "../../components/preloader/preloader";
import _ from 'lodash'
import DetailRowView from "./detailRowView";
import ModeSelector from "./modeSelector";

class Task extends React.Component {
    componentDidMount(quantity) {
        this.props.requestTask(quantity);
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

    onSelect = (quantity) => {
        this.componentDidMount(quantity)
        this.props.changeIsModeSelected(true)

    }

    pageChangeHandler = (page) => {
      this.props.changeCurrentPage(page.selected)
    }

            render() {
                             if (!this.props.isModeSelected) {
                    return (
                        <div className='container'>
                            <ModeSelector onSelect={this.onSelect}/>
                        </div>
            )
        }

                if (this.props.task.length === 0) {
                    return <Preloader/>
                }



                const pageSize = 50
                const displayData = _.chunk(this.props.task, pageSize)
                    [this.props.currentPage];
        return (
            <div className="row justify-content-md-center">
                <Table data={displayData} onSort={this.onSort} sortType={this.props.sortType}
                       sortField={this.props.sortField} onRowSelect={this.onRowSelect}/>
                {this.props.task.length > pageSize ?
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={20}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.pageChangeHandler}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        pageClassName="page-item"
                        pageLinkClassName='page-link'
                        previousClassName='page-item'
                        nextClassName='page-item'
                        previousLinkClassName='page-link'
                        nextLinkClassName='page-link'
                    />
                : null
                }
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
            sortType: getSortType(state),
            sortField: getSortField(state),
            row: getRow(state),
            isModeSelected: getIsModeSelected(state),
            currentPage: getCurrentPage(state)
        }
    )
}

export default connect(mapStateToProps, {
    requestTask,
    changeSortField,
    changeSort,
    changeRow,
    changeIsModeSelected,
    changeCurrentPage
})(Task);