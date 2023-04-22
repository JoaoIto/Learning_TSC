import express from 'express';
import {createUsers, getUsers} from '../server/index'
import { getInstanceCars } from './Base/Classes/main'

const app = express();

app.use(express.json());

function start(): () => void {
  return () => {
    console.log('Server started!');
    console.log('localhost:3333');
  };
}

app.get('/users', (req, res) => {
    const users = getUsers();
    return res.json({users})
})
app.post('/user', (req, res) => {
    const {name, email, age, isCoding} = req.body;
    const users = createUsers({name, email, age, isCoding});
    return res.json({users});
})

app.get('/cars', (req, res) => {
  const cars = getInstanceCars(req, res);
  return res.json(cars);
})

app.listen(3333, start());