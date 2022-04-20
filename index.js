const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello from my first smart-node!! auto restart')
});

const users = [
    { id: 1, name: 'sabana', email: 'sabana1@gmail.com', phone: '0178787878' },
    { id: 2, name: 'alamgir', email: 'alamgir1@gmail.com', phone: '0178787880' },
    { id: 3, name: 'Riaz', email: 'Riaz1@gmail.com', phone: '0178787899' },
    { id: 4, name: 'Purnima', email: 'Purnima1@gmail.com', phone: '0178787810' },
    { id: 5, name: 'Sucharita', email: 'Sucharita1@gmail.com', phone: '0178667878' },
    { id: 6, name: 'Sabnoor', email: 'Sabnoor1@gmail.com', phone: '0178787855' },
    { id: 7, name: 'Srabanti', email: 'Srabanti1@gmail.com', phone: '0178784078' },
    { id: 8, name: 'Babita', email: 'babita1@gmail.com', phone: '0178784068' }

]


app.get('/users', (req, res) => {
if(req.query.name){
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user=>user.name.toLowerCase().includes(search))
    res.send(matched);
}
else{
    res.send(users);
}
    // console.log('query', req.query)
    // res.send('hello from user');
    // res.send({id: 1, name: 'Ab Diviliars', job: 'Cricketer'});
   
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    // const user = users[id];
    const user = users.find(u => u.id == id);
    res.send(user)
});

app.post('/user', (req, res)=>{
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana']);
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send(['fazli flavour mango founded']);
})

app.listen(port, () => {
    console.log('Listening to port', port)
})