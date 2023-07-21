import React from 'react';
import ComponentListProduct from '../../Home/List_product/ComponentListProduct';
import { Container } from 'reactstrap';

function Product(props) {
    return (
        <Container style={{marginTop: '50px'}}>
            <ComponentListProduct/>
        </Container>
    );
}

export default Product;