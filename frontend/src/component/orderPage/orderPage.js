import './orderPage.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function OrderPage() {
    const [orders, setOrders] = useState([]);

    // const navigate = useNavigate();

    useEffect(() => { 
        console.log(123);
        fetch('http://localhost:5000/Get_all').then(res => res.json()).then(res => {
            alert(typeof res.orders);
            if(res.message == 'Успешно!' && typeof res.orders != undefined) {
                setOrders(res.orders)
                console.log('Успех!')
            }
            else setOrders([]);
            console.log(res);
        }).catch((err) => console.log('Ошибка', err))
    }, [])

    const apiGetAll = () => {
        fetch('http://localhost:5000/Get_all').then(res => res.json()).then(res => {
            alert(typeof res.orders);
            if(res.message == 'Успешно!' && typeof res.orders != undefined) {
                setOrders(res.orders)
                console.log('Успех!')
            }
            else setOrders([]);
            console.log(res);
        }).catch((err) => console.log('Ошибка', err))
    }

    const apiGetById = (id) => {
        fetch(`http://localhost:5000/Get_all/${id}`).then(res => res.json()).then(res => {
            alert(typeof res.orders);
            if(res.message == 'Успешно!' && typeof res.orders != undefined) {
                setOrders(res.orders)
                console.log('Успех!')
            }
            else setOrders([]);
            console.log(res);
        }).catch((err) => console.log('Ошибка', err))
    }

    console.log(orders);

    return (
        <>
            <button onClick={apiGetAll}>Получить все заявки</button><br/>
            <Link to="/CreatePage" className="el">Создать заявку</Link>
            {!(typeof orders === undefined) || orders != [] ? (
                <table>
                    <tr>
                        <th>equipment</th>
                        <th>type_of_fault</th>
                        <th>description_problem</th>
                        <th>client</th>
                        <th>status</th>
                        <th>status_update</th>
                        <th>master</th>
                        <th>date</th>
                        <th>Редактирование</th>
                        <th>Удаление</th>
                    </tr>
                    {orders.map(elem => 
                        <tr>
                            {Object.values(elem).map(el => 
                                 <td>{el}</td> 
                            )}
                            {/* <td><button onClick={() => navigate('UpdateOrder', { state: { id: elem.id } })} >Редактировать</button></td> */}
                        </tr>
                    )}
                </table>
            ) : (
                <h1 className="hElem">Нет элементов!</h1>
            )}
        </>
    );
}


export default OrderPage;