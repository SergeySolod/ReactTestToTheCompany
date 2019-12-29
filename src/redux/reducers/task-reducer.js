import {taskAPI} from '../../api/Api';

const SET_TASKS = 'ReactTestToTheCompany/task-reducer/SET_TASKS';
const TOGGLE_IS_FETCHING = 'ReactTestToTheCompany/task-reducer/TOGGLE_IS_FETCHING';
const CHANGE_SORT = 'ReactTestToTheCompany/task-reducer/CHANGE_SORT';
const CHANGE_SORT_FIELD = 'ReactTestToTheCompany/task-reducer/CHANGE_SORT_FIELD';
const CHANGE_ROW = 'ReactTestToTheCompany/task-reducer/CHANGE_ROW';

let initialState = {
    task: [],
    isFetching: true,
    sortType: 'asc',
    sortField: 'id',
    row: null
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const changeSort = (sortType) => ({type: CHANGE_SORT, sortType});
export const changeSortField = (sortField) => ({type: CHANGE_SORT_FIELD, sortField});
export const changeRow = (row) => ({type: CHANGE_ROW, row});
const setTask = (task) => ({type: SET_TASKS, task});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const requestTask = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await taskAPI.smallTask();
        dispatch(toggleIsFetching(false));
        dispatch(setTask(data));

    }
}

export default reducerTask