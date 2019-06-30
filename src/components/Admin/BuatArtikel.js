import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Spinner } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const BuatArtikel = () => {
    let gambar = null;
    const [loading, setLoading] = useState(false);
    const d = new Date();

    const [img, setImg] = useState({
        file: '',
        preview: ''
    });
    const [judul, setJudul] = useState('');
    const [isi, setIsi] = useState('');


    const imgChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImg({
                preview: [reader.result],
                file: file
            });
        }
    }

    const POST = () => {
        if (img === '' || judul === '' || isi === '') {
            alert('semua kolom harus diisi!!!!!');
        } else {
            setLoading(true);
            firebase.storage().ref().child(judul).put(img.file)
                .then((snap) => {
                    snap.ref.getDownloadURL()
                        .then((url) => {
                            firebase.firestore().collection('artikel').add({
                                img: url,
                                judul: judul,
                                isi: isi,
                                tanggal: `${d.getDate() > 9 ? d.getDate() : '0' + d.getDate()} - ${d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)} - ${d.getFullYear()}`,
                                index: parseInt(`${d.getFullYear()}${d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)}${d.getDate() > 9 ? d.getDate() : '0' + d.getDate()}${d.getHours() > 9 ? d.getHours() : '0' + d.getHours()}${d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes()}`),
                            })
                                .then(id => {
                                    firebase.firestore().collection('artikel').doc(id.id)
                                        .set({
                                            key: id.id
                                        }, { merge: true })
                                })
                        })
                        .then(() => {
                            setLoading(false);
                            alert('Terkirim');
                            setImg({ file: '', preview: '' });
                            setJudul('');
                            setIsi('');
                        })
                        .catch(err => {
                            console.log(err);
                            alert(err.message);
                            setLoading(false);
                        })
                })
                .catch(err => {
                    console.log(err);
                    alert(err.message);
                    setLoading(false);
                })
        }
    }
    return (
        <>
            {loading ?
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
                    <Spinner animation='border' style={{ color: 'lightblue' }} />
                </div>
                :
                <div className='buatartikel'>
                    <div className='frameBA'>
                        {img.preview !== '' ? <div
                            style={{
                                width: '100%',
                                minHeight: 400,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <img src={img.preview} alt="" style={{
                                width: 400,
                            }} />
                        </div> : null}
                        <label className="mb-3" onClick={() => gambar.click()}>{img === '' ? 'Upload Gambar' : 'Ganti Gambar'}</label>

                        <input type="file" accept='image/x-png,image/gif,image/jpeg' style={{ display: 'none' }} ref={input => { gambar = input }}
                            onChange={imgChange} />

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text style={{ width: '80px', display: 'flex', justifyContent: 'center' }} id="basic-addon1">JUDUL</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                                onChange={e => setJudul(e.target.value)}
                                value={judul}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text style={{ width: '80px', display: 'flex', justifyContent: 'center' }}>ISI</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" aria-label="With textarea" style={{ height: 200 }}
                                onChange={e => setIsi(e.target.value)}
                                value={isi} />
                        </InputGroup>

                        <Button className='buatBtn mr-4' onClick={POST}>Post</Button>
                        <Button className='buatBtn' style={{ background: 'none', color: 'rgb(53, 75, 78)', border: '1px solid rgb(53, 75, 78)' }}
                            onClick={() => {
                                setImg({ file: '', preview: '' });
                                setJudul('');
                                setIsi('');
                            }}>Reset</Button>
                    </div>
                </div>
            }
        </>
    );
}

export default BuatArtikel;