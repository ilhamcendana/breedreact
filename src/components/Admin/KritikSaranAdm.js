import React, { useEffect, useState } from 'react';
import { Card, Spinner, Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/firestore';

const KritikSaranAdm = () => {
    const [loading, setloading] = useState(false);
    const [krs, setKRS] = useState([]);

    useEffect(() => {
        getKritikSaran();
    }, [])

    const getKritikSaran = () => {
        setloading(true);
        const sample = [];
        firebase.firestore().collection('kritiksaran').orderBy('index').get()
            .then(snap => snap.forEach(child => {
                sample.push(child.data());
            }))
            .then(() => {
                setloading(false);
                setKRS(sample.reverse());
            })
            .catch(err => {
                setloading(false);
                alert(err.message);
            })
    }

    const hapusPesan = (key) => {
        setloading(true);
        firebase.firestore().collection('kritiksaran').doc(key).delete()
            .then(() => {
                setloading(false);
                window.location.reload();
            })
            .catch(err => {
                setloading(false);
                alert(err.message);
            })
    }
    return (
        <div>
            {loading ?
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                    <Spinner animation='border' style={{ color: 'lightblue' }} />
                </div>
                :
                <div className='container mb-4 mt-4'>
                    <h4>Semua Pesan</h4>
                    <hr />

                    {krs.map((item, index) => (
                        <Card key={index} className='mb-4'>
                            <Card.Header>{item.email}</Card.Header>
                            <Card.Body>
                                <Card.Title>{item.nama}</Card.Title>
                                <Card.Text>
                                    {item.pesan}
                                </Card.Text>
                                <p style={{ fontSize: 12, color: '#c4c4c4' }}>
                                    {item.tanggal}
                                </p>

                                <Button variant='danger' onClick={() => hapusPesan(item.key)}>Hapus</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            }
        </div>
    );
}

export default KritikSaranAdm;