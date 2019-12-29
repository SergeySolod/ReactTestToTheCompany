import * as axios from 'axios'

export const taskAPI = {
    smallTask() {
        return axios({
            url: 'https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|xxx}xxx-xx-xx}&address={addressObject}&description={lorem|32}',
            method: 'get',
        }).then(response => {
            return response.data;
        });
    },
}