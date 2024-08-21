const express = require('express'),
    morgan = require('morgan'),
    cors = require('cors'),
    date = new Date(),
    app = express();


app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('dist'))
app.use(cors())

const generateId = () => {
    const id = Math.floor(Math.random() * 100 + 1);
    return id
}

const Persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-1234567"
    },

    {
        id: 2,
        name: "Alfredo Sosa",
        number: "829-012-5876"
    },

    {
        id: 3,
        name: "Bélgica Yanet",
        number: '849-555-1945'
    },

    {
        id: 4,
        name: "Maria Isabel",
        number: "809-000-1236"
    }
]


app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})


app.get('/api/persons', (req, res) => {
    res.json(Persons);
})


app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id),
        person = Persons.find(n => n.id === id);

    res.json(person)
})

app.get('/info', (req, res) => {
    res.send(
        `<p>Phonebook has info for ${Persons.length} people</p>
        <p>${date}</p>
        `
    )
})


app.post('/api/persons', (req, res) => {
    const body = req.body;

    if (body.name === '') {
        console.error('Type the name')
        res.status(400).end()

    } else if (body.number === '') {
        console.error('Type the number')
        res.status(400).end()

    } else {
        const person = {
            id: generateId(),
            name: body.name,
            number: body.number
        }

        console.log(person)
        Persons.push(person)

        res.json(Persons)
    }

})


app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id),
        body = req.body;

    body.id === id
        ?
        Persons.filter(person => {
            person.id !== id
        })
        :
        console.error('Invalid ID')
})


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})