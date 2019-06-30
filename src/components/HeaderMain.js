import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const HeaderMain = ({ subtitle, title, bg, marginBottom }) => {
    return (
        <Jumbotron fluid style={{
            backgroundImage: 'url(' + bg + ')',
            backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
            backgroundSize: 'cover', height: 500, filter: 'grayscale(.3)',
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundAttachment: 'fixed',
            marginBottom: marginBottom
        }}>
            <Container>
                <h1 className='text-center text-white' style={{ fontWeight: 'bold' }}>{title}</h1>
                <p className='text-center text-white' style={{
                    width: 500,
                    margin: '0 auto'
                }}>
                    {subtitle}
                </p>
            </Container>
        </Jumbotron>
    );
}

export default HeaderMain;