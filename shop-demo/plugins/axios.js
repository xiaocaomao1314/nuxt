import axios from 'axios'
import Vue from 'vue'
axios.defaults.baseURL = "http://localhost:3301"
export default axios.create({
    timeout: 300
})