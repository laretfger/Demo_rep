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

app.put('/', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    const order_dto = {}

    if(req.body.status) order_dto.status = req.body.status;
    if(req.body.description_problem) order_dto.description_problem = req.body.description_problem;
    if(req.body.date_end) order_dto.date_end = req.body.date_end;
    if(req.body.master) order_dto.master = req.body.master;

    if(order_dto){
        Order.update(order_dto, {where: {id: req.body.id}}).then(result => {
            res.json({message: "Успешно!"})
        }).catch(err => {console.error(err); res.json({message: "Не успешно"})})
    }
    else res.json({message: "Вы ничего не отправили!"});

})

sq.sync().then(res => console.log(res))

app.listen(5000, () => {
    console.log('Успешно');
});