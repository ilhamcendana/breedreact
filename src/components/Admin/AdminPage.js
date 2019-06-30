import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import BuatArtikel from './BuatArtikel';
import SemuaArtikel from './SemuaArtikel';
import firebase from 'firebase/app';
import 'firebase/auth';
import KritikSaranAdm from './KritikSaranAdm';

const AdminPage = () => {
    return (
        <div className='adminBG'>
            <Tabs defaultActiveKey="Buatartikel" id="uncontrolled-tab-example" style={{ display: 'flex', justifyContent: 'center', border: 'none', background: 'rgb(53, 75, 78)' }}>
                <Tab eventKey="Buatartikel" title="Buat artikel" tabClassName='tab'>
                    <BuatArtikel />
                </Tab>
                <Tab eventKey="SemuaArtikel" title="Semua Artikel" tabClassName='tab'>
                    <SemuaArtikel />
                </Tab>
                <Tab eventKey="Kritiksaran" title="Kritik & Saran" tabClassName='tab' >
                    <KritikSaranAdm />
                </Tab>
                <Tab eventKey="keluar" title="Keluar" tabClassName='tab'>
                    <div className="container">
                        <Button onClick={() => firebase.auth().signOut()} variant='info' className='mt-4' block>
                            Keluar
                    </Button>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default AdminPage;