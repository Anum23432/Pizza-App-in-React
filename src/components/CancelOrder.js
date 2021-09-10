import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import swal from 'sweetalert';


const tablestyle = {
    backgroundColor: '#00000059',
    width: "60rem",
    opacity: '0.8',
    marginLeft: '14%',
    color:'black',
    boxShadow: '0 0 20px 0 white'

};

function CancelOrder() {
    const history = useHistory();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
            .then(response => response.json())
            .then(data => setOrders(data))
    },
        []);

    const onClickCancel = (Order_ID) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`https://order-pizza-api.herokuapp.com/api/orders/${Order_ID}`, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    swal('Cancelled successfully')
                }
                window.location.reload();
            })
    }

    return (
        <>
            <h3 style={{marginLeft:'39%'}}>Cancel Orders List</h3>
            <Table striped bordered hover variant="warning" style={tablestyle}>
                <thead>
                    <tr>
                        <th>Order ID#</th>
                        <th>Crust</th>
                        <th>Flavour</th>
                        <th>Size</th>
                        <th>Time Stamp</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((v, i) => {
                        return (
                            <tr key={i}>
                                <td>{v.Order_ID}</td>
                                <td>{v.Crust}</td>
                                <td>{v.Flavor}</td>
                                <td>{v.Size}</td>
                                <td>{v.Timestamp}</td>
                                <td><Button variant="danger" size="md" onClick={() => onClickCancel(v.Order_ID)}>Cancel Order</Button></td>
                            </tr>
                        )
                    }
                    )
                    }
                </tbody>
            </Table>

            <Button style={{marginLeft:'43%'}} variant="danger" size="lg" onClick={() => history.goBack()}> Go Back </Button>

        </>
    )
}


export default CancelOrder;
