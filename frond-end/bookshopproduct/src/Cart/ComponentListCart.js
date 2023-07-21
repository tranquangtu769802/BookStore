import React from 'react';
import { Container, Row, Table } from "reactstrap";
import ComponentListCartItem from './ComponentListCartItem';

function ComponentListCart({onChangeAmount, onHandleDeleteCart, total}) {

    return (
        <Container>
        <Row>
            <Table striped style={{ marginTop: '50px' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng giá sản phẩm</th>
                        <th>Xóa sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    <ComponentListCartItem onChangeAmount={onChangeAmount} onHandleDeleteCart={onHandleDeleteCart}/>
                </tbody>
            </Table>
        </Row>

        <Row>
            <h4 style={{ textAlign: 'left', color: 'blue' }}>Tổng số tiền sản phẩm: {total} đ</h4>
        </Row>

    </Container>
    );
}

export default ComponentListCart;