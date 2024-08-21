import axios from 'axios';
const Url = '/api/persons';


const getPersons = function() {
    return axios.get(Url)
}

const setPerson = function(newObject) {
    axios.post(Url, newObject).then(response => response.data);
}


export default {
    getPersons: getPersons,
    setPerson: setPerson
}