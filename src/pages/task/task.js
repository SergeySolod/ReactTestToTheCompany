import React from 'react'
import {connect} from 'react-redux'
import ReactPaginate from 'react-paginate';
import {
    addNewTask,
    changeAddRow,
    changeCurrentPage,
    changeIsModeSelected,
    changeRow, changeSearch,
    changeSort,
    changeSortField,
    requestTask
} from "../../redux/reducers/task-reducer";
import {
    getAddRow,
    getCurrentPage,
    getIsModeSelected,
    getRow, getSearch,
    getSortField,
    getSortType
} from "../../redux/selectors/task-selectors";
import Table from "./table";
import Preloader from "../../components/preloader/preloader";
import _ from 'lodash'
import DetailRowView from "./detailRowView";
import ModeSelector from "./modeSelector";
import TableSearch from "./tableSearch";
import AddRowReduxForm from "./addRow";

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
        this.componentDidMount(quantity);
        this.props.changeIsModeSelected(true);

    }

    pageChangeHandler = (page) => {
        this.props.changeCurrentPage(page.selected)
    }

    searchHandler = (search) => {
        this.props.changeSearch(search)
        this.props.changeCurrentPage(0)
    }

    getFilteredData() {
        if (!this.props.search) {
            return this.props.task
        }
        return this.props.task.filter(item => {
            return (
                item['firstName'].toLowerCase().includes(this.props.search.toLowerCase()) ||
                item['lastName'].toLowerCase().includes(this.props.search.toLowerCase()) ||
                item['email'].toLowerCase().includes(this.props.search.toLowerCase()) ||
                item['phone'].includes(this.props.search)
            )
        })
    }

    render() {

        const filteredData = this.getFilteredData()
        const pageSize = 50
        const pageCount = Math.ceil(filteredData.length / pageSize)

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

const onSubmit = (formData) => {
this.props.addNewTask(formData)
}

        const displayData = _.chunk(filteredData, pageSize)
            [this.props.currentPage];
        return (
            <div className="row justify-content-md-left">
                <TableSearch onSearch={this.searchHandler}/>
                {this.props.addRow && <div className="pb-3"><AddRowReduxForm onSubmit={onSubmit}/></div>}
                {!this.props.addRow && <div className="pb-3">
                <button onClick={() => this.props.changeAddRow(true)} className="btn btn-primary pb-2">Добавить</button>
                </div>}
                <Table data={displayData} onSort={this.onSort} sortType={this.props.sortType}
                       sortField={this.props.sortField} onRowSelect={this.onRowSelect}/>
                {this.props.task.length > pageSize ?
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pageCount}
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
                        forsePage={this.props.currentPage}
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
            currentPage: getCurrentPage(state),
            search: getSearch(state),
            addRow: getAddRow(state)
        }
    )
}

export default connect(mapStateToProps, {
    requestTask,
    changeSortField,
    changeSearch,
    changeSort,
    changeRow,
    changeIsModeSelected,
    changeCurrentPage,
    changeAddRow,
    addNewTask
})(Task);