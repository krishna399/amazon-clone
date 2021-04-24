import React, { useState, useEffect } from 'react';
import { db } from './firebase.config';
import Order from './Order';
import './orders.css';
import { useStateValue } from './StateProvider';

function Orders() {
    const [state, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (state.user) {
            // pull orders from db
            db.collection('users')
                .doc(state.user?.id)
                .collection('orders')
                .orderBy('created', 'desc')
                // get real time snapshot of the value
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs
                        .map(doc => ({
                            id: doc.id,
                            data: doc.data()
                        })
                        ));
                });
        } else {
            setOrders([]);
        }

    }, [])

    return (
        <div className="orders">
            <h1> Your Orders</h1>
            <div className="orders_list">
                {orders.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
