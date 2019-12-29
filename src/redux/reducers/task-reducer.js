import {taskAPI} from '../../api/Api';

const SET_TASKS = 'ReactTestToTheCompany/task-reducer/SET_TASKS';
const TOGGLE_IS_FETCHING = 'ReactTestToTheCompany/task-reducer/TOGGLE_IS_FETCHING';

let initialState = {
    task: [],
    isFetching: true,
}

const reducerTask = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS: {
            return {...state, task: action.task}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

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