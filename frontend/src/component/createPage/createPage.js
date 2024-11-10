import './createPage.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function CreatePage() {
    const [equipment, setEquipment] = useState();
    const [type_of_fault, setType_of_fault] = useState();
    const [description_problem, setDescription_problem] = useState();
    const [client, setClient] = useState();
    const [status, setStatus] = useState();
    const [master, setMaster] = useState();
    const [date, setDate] = useState();

    const equipmentHandler  = (e) => setEquipment(e.target.value);
    const type_of_faultHandler = (e) => setType_of_fault(e.target.value);
    const description_problemHandler = (e) => setDescription_problem(e.target.value);
    const clientHandler = (e) => setClient(e.target.value);
    const statusHandler = (e) => setStatus(e.target.value);
    const masterHandler = (e) => setMaster(e.target.value);
    const dateHandler = (e) => setDate(e.target.value);

    const sub = (event) => {
        event.preventDefault();
        if(!equipment || !type_of_fault || !description_problem || !client || !status ||  !master ||  !date) alert('Введите все данные!');
        else{
            

            fetch('http://localhost:5000/Create', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    entities: {
                        equipment: equipment,
                        type_of_fault: type_of_fault,
                        description_problem: description_problem,
                        client: client,
                        status: status,
                        master: master,
                        date: date
                    }
                })
            }).then(res => res.json()).then(res => {
                if(res.message == 'Успешно!') alert(res.message);
                else alert('Не успешно');
            }).catch((err) => console.log('Ошибка', err))
            console.log(1234567);
        }
    }
    return (
        <>
            <Link to="/" className="el">Посмотреть все заявки</Link>
            <form onSubmit={sub}>
                <label for="equipment">Введите оборудование</label><br/>
                <input type='text' name='equipment' value={equipment} onChange={equipmentHandler}></input><br/>

                <label for="type_of_fault">Введите тип ошибки</label><br/>
                <input type='text' name='type_of_fault' value={type_of_fault} onChange={type_of_faultHandler}></input><br/>

                <label for="description_problem">Введите описание проблемы</label><br/>
                <input type='text' name='description_problem' value={description_problem} onChange={description_problemHandler}></input><br/>

                <label for="client">Введите ФИО клиента</label><br/>
                <input type='text' name='client' value={client} onChange={clientHandler}></input><br/>

                <label for="status">Введите статус</label><br/>
                <input type='text' name='status' value={status} onChange={statusHandler}></input><br/>

                <label for="master">Введите имя мастера</label><br/>
                <input type='text' name='master' value={master} onChange={masterHandler}></input><br/>

                <label for="date">Введите дату</label><br/>
                <input type='date' name='date' value={date} onChange={dateHandler}></input><br/>

                <input type='submit'></input><br/>
            </form>
            
        </>
    );
}

export default CreatePage;