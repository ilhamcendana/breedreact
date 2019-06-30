import React,{useState,useEffect} from 'react';
import HeaderMain from '../HeaderMain';
import bg from '../../img/lovebird.jpg';
import {Form,Button,Card,Spinner} from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/firestore';

const KritikSaran = () => {
    const [loading, setloading] = useState(false);
    const [email,setEmail] = useState('');
    const [nama,setNama] = useState('');
    const [pesan,setpesan] = useState('');
    const [krs , setKRS] = useState([]);
    const d = new Date();

    useEffect(() => {
        getKritikSaran();
    },[])

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

    const kirimPesan = (e) => {
        e.preventDefault();
        if(email === '' || nama === '' || pesan === ''){
            alert('Semua kolom harus diisi!');
        } else{
            setloading(true);
            const ref = firebase.firestore().collection('kritiksaran');
            ref.add({
                email:email,
                nama:nama,
                pesan:pesan,
                tanggal: `${d.getDate() > 9 ? d.getDate() : '0' + d.getDate()} - ${d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)} - ${d.getFullYear()}`,
                index: parseInt(`${d.getFullYear()}${d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)}${d.getDate() > 9 ? d.getDate() : '0' + d.getDate()}${d.getHours() > 9 ? d.getHours() : '0' + d.getHours()}${d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes()}`),
            })
            .then(id => {
                ref.doc(id.id).set({key:id.id},{merge:true})
                .then(() => {
                    setloading(false);
                    window.location.reload();
                })
            })
            .catch((err) => {
                setloading(false);
                alert(err.message);
            })
        }
    }
    return ( 
        <div>
        <HeaderMain 
            bg={bg}
            title='BURUNG CINTA' subtitle='Banyak orang mulai tertarik pada burung cinta karena
              keindahan warna-warni bulunya juga. Bentuknya yang mungil semakin membuatnya menjadi idola bagi para
              pecinta burung di tanah air. Penampilan fisik burung cinta memang mempesona karena warna bulunya yang
              cerah dan indah dipandang.' />              
                    
              <div className='container mt-4 mb-4'>
                  <h1 className='text-center mb-4 font-weight-bold'>Kritik dan Saran anda sangat berarti</h1>
                    <Form onSubmit={kirimPesan}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control value={nama} onChange={(e) => setNama(e.target.value)} type="text"  />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Pesan</Form.Label>
                            <Form.Control as="textarea" rows="3" value={pesan} onChange={(e) => setpesan(e.target.value)}/>
                        </Form.Group>
                        {loading ?
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Spinner animation='border' style={{ color: 'lightblue' }} />
                        </div>
                        :
                        <Button style={{background:'#ffc107',borderColor:'#ffc107'}} type="submit">
                            KIRIM PESAN
                        </Button>
                        }
                        </Form>
              </div>              
              <div className='container mb-4 mt-4'>
                  <h4>Semua Pesan</h4>
                  <hr/>
              
              {krs.map((item,index) => (
                <Card key={index} className='mb-4'>
                <Card.Header>{item.email}</Card.Header>
                <Card.Body>
                    <Card.Title>{item.nama}</Card.Title>
                    <Card.Text>
                    {item.pesan}
                    </Card.Text>
                    <p style={{fontSize:12,color:'#c4c4c4'}}>
                    {item.tanggal}
                    </p>
                </Card.Body>
                </Card>
              ))}
              </div>
              
              
        </div>
     );
}
 
export default KritikSaran;