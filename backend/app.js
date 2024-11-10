import express from 'express';
import cors from 'cors';
import { sq } from './sq.js';
import { Order } from './models/order.js';

const app = express();
app.use(express.json());
app.use(cors());



app.post('/Create', (req, res) => {
    req.body.entities.isUpdate = false
    console.log(req.body.entities)
    Order.create(req.body.entities).then(result => {
        res.json({message: "Успешно!", orders: result})
    }).catch(err => {console.error(err); res.json({message: "Не успешно"})})
})


app.get('/Get_all', (req, res) => {
    Order.findAll({raw: true}).then(result => {
        res.json({message: "Успешно!", orders: result})
    }).catch(err => {console.error(err); res.json({message: "Не успешно"})})
})

app.get('/Get/:id', (req, res) => {
    const id = Number(req.params.id);
    Order.findByPk(id).then(result => {
        res.json({message: "Успешно!", order: result})
    }).catch(err => {console.error(err); res.json({message: "Не успешно"})})
})

sq.sync().then(res => console.log(res))

app.listen(5000, () => {
    console.log('Успешно');
});