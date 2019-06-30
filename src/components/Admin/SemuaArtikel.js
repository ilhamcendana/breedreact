import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';


const SemuaArtikel = () => {
    useEffect(() => {
        getArtikel();
    }, [])

    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [artikelKey, setArtikelKey] = useState(false);
    const [artikel, setArtikel] = useState([]);

    const getArtikel = () => {
        setLoading(true);
        const bucket = [];
        firebase.firestore().collection('artikel').get()
            .then((snap) => {
                snap.forEach(each => bucket.push(each.data()))
            })
            .then(() => {
                setArtikel(bucket.reverse());
                setLoading(false);
            })
            .catch(err => {
                alert(err.message);
                console.log(err);
                setLoading(false);
            })
    }
    const hapusArtikelEvent = (key) => {
        setArtikelKey(key);
        setModal(true);
    }

    const _DELETE = () => {
        setModal(false);
        setLoading(true);
        firebase.firestore().collection('artikel').doc(artikelKey)
            .delete()
            .then(() => {
                setArtikelKey('');
                setLoading(false);
                getArtikel();
            })
            .catch(err => {
                setArtikelKey('');
                setLoading(false);
                alert(err.message);
            })
    }

    return (
        <div>
            {loading ?
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
                    <Spinner animation='border' style={{ color: 'lightblue' }} />
                </div>
                :
                <>
                    <div className="container">
                        <div className='row mt-4' >
                            {artikel.map((item, index) => (
                                <div className="col-sm-12 col-lg-6" key={index}>
                                    <Card style={{ marginBottom: 50, borderRadius: 10, overflow: 'hidden', height: 800 }}>
                                        <Card.Img variant="top" src={item.img} style={{ width: '100%', height: 350 }} />
                                        <Card.Body>
                                            <Card.Title>{item.judul.length > 73 ? item.judul.slice(0, 73) : item.judul}</Card.Title>
                                            <Card.Text>
                                                {item.isi.length > 350 ? item.isi.slice(0, 350) + '...' : item.isi}
                                            </Card.Text>
                                            <Card.Text style={{
                                                fontSize: '.9rem',
                                                color: '#9a9a'
                                            }}>
                                                {item.tanggal}
                                            </Card.Text>

                                            <div style={{
                                                position: 'absolute',
                                                left: 0,
                                                right: 0,
                                                padding: 20,
                                                bottom: 0
                                            }}>
                                                <Link to={'/artikel-detail/' + item.key} style={{ textDecoration: 'none' }}>
                                                    <Button variant="info" block className='mb-4'>
                                                        Selengkapnya
                                            </Button>
                                                </Link>
                                                <Button variant="outline-danger" block
                                                    onClick={() => hapusArtikelEvent(item.key)}>Hapus Aritkel</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }

            {modal ?
                <div style={{
                    background: 'rgba(0,0,0,.3)',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Modal.Dialog style={{ width: 400 }}>
                        <Modal.Header>
                            <Modal.Title>Hapus</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Apakah anda yakin ingin menghapus artikel ini ?</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => {
                                setArtikelKey('');
                                setModal(false);
                            }}>Tutup</Button>
                            <Button variant="danger" onClick={_DELETE}>Hapus</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div> : null}
        </div>
    );
}

export default SemuaArtikel;