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

    console.log(orders);

    return (
        <>
            <Link to="/CreatePage" className="el">Создать заявку</Link>
            {!(typeof orders === undefined) || orders != [] ? (
                <table>
                    <tr>
                        <th>number</th>
                        <th>client</th>
                        <th>number_phone</th>
                        <th>wishes</th>
                        <th>hotel_adress</th>
                        <th>number_apart</th>
                        <th>administrator</th>
                        <th>date_start</th>
                        <th>date_end</th>
                        <th>Редактирование</th>
                        <th>Удаление</th>
                    </tr>
                    {orders.map(elem => 
                        <tr>
                            {Object.values(elem).map(el => 
                                 <td>{el}</td> 
                            )}
                            {/* <td><button onClick={() => navigate('UpdateOrder', { state: { number: elem.number } })} >Редактировать</button></td> */}
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