import {taskAPI} from '../../api/Api';

const SET_TASKS = 'ReactTestToTheCompany/task-reducer/SET_TASKS';
const CHANGE_SORT = 'ReactTestToTheCompany/task-reducer/CHANGE_SORT';
const CHANGE_SORT_FIELD = 'ReactTestToTheCompany/task-reducer/CHANGE_SORT_FIELD';
const CHANGE_ROW = 'ReactTestToTheCompany/task-reducer/CHANGE_ROW';
const CHANGE_IS_MODE_SELECTED = 'ReactTestToTheCompany/task-reducer/CHANGE_IS_MODE_SELECTED';
const CHANGE_CURRENT_PAGE = 'ReactTestToTheCompany/task-reducer/CHANGE_CURRENT_PAGE';

let initialState = {
    task: null,
    isModeSelected: false,
    sortType: 'asc',
    sortField: 'id',
    row: null,
    currentPage: 0
}

const reducerTask = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS: {
            return {...state, task: action.task}
        }
        case CHANGE_SORT: {
            return {...state, sortType: action.sortType}
        }
        case CHANGE_ROW: {
            return {...state, row: action.row}
        }
        case CHANGE_SORT_FIELD: {
            return {...state, sortField: action.sortField}
        }
        case CHANGE_IS_MODE_SELECTED: {
            return {...state, isModeSelected: action.isModeSelected}
        }
        case CHANGE_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        default:
            return state;
    }
}

export const changeCurrentPage = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage});
export const changeSort = (sortType) => ({type: CHANGE_SORT, sortType});
export const changeIsModeSelected = (isModeSelected) => ({type: CHANGE_IS_MODE_SELECTED, isModeSelected});
export const changeSortField = (sortField) => ({type: CHANGE_SORT_FIELD, sortField});
export const changeRow = (row) => ({type: CHANGE_ROW, row});
const setTask = (task) => ({type: SET_TASKS, task});

export const requestTask = (quantity) => {
    return async (dispatch) => {
        let data = await taskAPI.smallTask(quantity);
        dispatch(setTask(data));

    }
}

export default reducerTask