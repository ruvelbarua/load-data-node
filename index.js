const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const users = [
    { id: 0, name: 'Kamrul Hasan', email: 'kamrul@gmail.com', phone: '011444555' },
    { id: 1, name: 'Rafiqul Islam', email: 'rafiqul@gmail.com', phone: '011444556' },
    { id: 2, name: 'Sabrina Haque', email: 'sabrina@gmail.com', phone: '011444557' },
    { id: 3, name: 'Subarno Islam', email: 'subarno@gmail.com', phone: '011444558' },
    { id: 4, name: 'Suchanda Chy', email: 'suchanda@gmail.com', phone: '011444559' },
    { id: 5, name: 'Mubarak', email: 'mubarak@gmail.com', phone: '011444560' },
]

app.get('/users', (req, res) => {
    res.send(users)
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);
    console.log('hitting the post', req.body)
    res.json(newUser)
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.listen(port, (req) => {
    console.log('Listening to port', port);
});

