// area reponsavel por busca apis
import axios from 'axios'

export default axios.create({
   baseURL: 'http://localhost:3001',
})
