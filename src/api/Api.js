import * as axios from 'axios'

export const taskAPI = {
    smallTask(quantity) {
        return axios({
            url: `https://www.filltext.com/?rows=${quantity}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|xxx}xxx-xx-xx}&address={addressObject}&description={lorem|32}`,
            method: 'get',
        }).then(response => {
            return response.data;
        });
    },
}