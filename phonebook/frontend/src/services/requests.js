import axios from 'axios';
const Url = 'http://localhost:3001/api/persons';


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