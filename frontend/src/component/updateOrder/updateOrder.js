import './updateOrder.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UpdateOrder() {
    const location = useLocation();
    console.log(location);

    const [status, setStatus] = useState();
    const [description_problem, setDescription_problem] = useState();
    const [master, setMaster] = useState();

    const statusHandler = (e) => setStatus(e.target.value);
    const description_problemHandler = (e) => setDescription_problem(e.target.value);
    const masterHandler = (e) => setMaster(e.target.value);

    const sub = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/`, {
            method: 'PUT',
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                id: location.state.id,
                status: status,
                description_problem: description_problem,
                master: master
            })
        }).then(res => res.json()).then(res => {
            alert(res.message);
        }).catch((err) => console.log('Ошибка', err))
    }

  return (
    <>
        <Link to="/CreatePage" className="el1">Создать заявку</Link>
        <Link to="/" className="el">Посмотреть все заявки</Link>
            <form onSubmit={sub}>
                <label for="status">Введите status</label><br/>
                <input type='text' name='status' value={status} onChange={statusHandler}></input><br/>

                <label for="description_problem">Введите description_problem</label><br/>
                <input type='text' name='description_problem' value={description_problem} onChange={description_problemHandler}></input><br/>

                <label for="master">Введите имя мастера</label><br/>
                <input type='text' name='master' value={master} onChange={masterHandler}></input><br/>

                <input type='submit'></input><br/>
            </form>
    </>
  );
}

export default UpdateOrder;