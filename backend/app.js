import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
app.use(express.json());



app.post('/Create', (req, res) => {
    prisma.entities.create({
        data: req.body.entities
    }).then(result => res.json({message: 'Успешно'})).catch(err => {console.log(err); res.json({message: 'Не успешно'})})
})


app.get('/Get_all', (req, res) => {
    prisma.entities.findMany().then(result => res.json({result: result})).catch(err => {console.log(err); res.json({message: 'Не успешно'})})
})

app.get('/Get/:id', (req, res) => {
    const id = Number(req.params.id);
    prisma.entities.findUnique({
        where: { id: id }
    }).then(result => res.json({result: result})).catch(err => {console.log(err); res.json({message: 'Не успешно'})})
})

app.listen(8000, () => {
    console.log('Успешно');
});