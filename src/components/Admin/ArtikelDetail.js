import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Card, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArtikelDetail = (props) => {
    const [key] = useState(window.location.pathname.slice(16, window.location.pathname.length))
    useEffect(() => {
        getartikel();
    }, []);

    const getartikel = () => {
        if (key !== '') {
            firebase.firestore().collection('artikel').doc(key)
                .get().then((snap) => {
                    setArtikelDetail(snap.data());
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    alert(err.message);
                    setLoading(false);
                })
        }
    }

    const goBack = () => {
        props.history.goBack();
    }

    const [loading, setLoading] = useState(true);
    const [artikelDetails, setArtikelDetail] = useState({});
    return (
        <div>
            {loading ?
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
                    <Spinner animation='border' style={{ color: 'lightblue' }} />
                </div>
                :
                <div style={{ width: '80%', margin: '10px auto' }}>
                    <h1 className='font-weight-bold'>{artikelDetails.judul}</h1>
                    <Card>
                        <Card.Img variant="top" src={artikelDetails.img} style={{ width: '100%' }} />
                        <Card.Body>
                            <Card.Title>{artikelDetails.judul}</Card.Title>
                            <Card.Text>
                                {artikelDetails.isi}
                            </Card.Text>
                            <Card.Text style={{
                                fontSize: '.9rem',
                                color: '#9a9a'
                            }}>
                                {artikelDetails.tanggal}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* <Link to='/adminpage' style={{ textDecoration: 'none' }}> */}
                    <Button block variant='success' onClick={goBack}>Kembali</Button>
                    {/* </Link> */}
                </div>
            }
        </div>
    );
}

export default ArtikelDetail;