import axios from 'axios'

export default {
    getApi: () => {
        return axios.get('/api')
    }
}