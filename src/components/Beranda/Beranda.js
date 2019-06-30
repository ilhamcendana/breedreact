import React from 'react';
import './Beranda.css';
import Headermain from '../HeaderMain';
import bg from '../../img/lovebird.jpg';
import foto1 from '../../img/madagaskar.jpg';


const Beranda = () => {
    return (
        <div>
            <Headermain 
            bg={bg}
            title='BURUNG CINTA' subtitle='Banyak orang mulai tertarik pada burung cinta karena
              keindahan warna-warni bulunya juga. Bentuknya yang mungil semakin membuatnya menjadi idola bagi para
              pecinta burung di tanah air. Penampilan fisik burung cinta memang mempesona karena warna bulunya yang
              cerah dan indah dipandang.' />

              <div className="container">
                  <div className="row">
                      <h1 style={{margin:'auto',fontWeight:'bold'}}>Burung Kecil yang digemari</h1>
                      
                      <div style={{
                          display:'flex',
                          marginTop:40,
                          marginBottom:40,
                          justifyContent:'space-between',
                          alignItems:'center',
                      }}>
                          <img src={foto1} alt="" style={{width:'49%'}}/>
                      <p style={{textAlign:'justify',width:'49%'}}>Selain warna bulunya yang cerah berwarna-warni, burung cinta juga memiliki suara kicauan yang sangat indah. Burung cinta yang telah dijinakkan bahkan bisa berlaku sebagai teman bermain. Burung akan datang ketika kita memanggilnya dengan siulan, atau nama panggilan yang kita berikan. Hal in karena burung cinta merupakan burung yang mudah berinteraksi dengan manusia, terutama burung yang dipelihara sejak kecil.

Banyak alasan mengapa burung cinta dipelihara, setidaknya alasan utamanya adalah memiliki warna bulu yang indah, kicauan yang enak didengar, tidak memerlukan modal yang banyak, sebagai partner latihan kicau untuk burung lain, dan mudah dibudidayakan.</p>
                      </div>
                  </div>            
              </div>

        <section style={{marginTop:100,background:'#f3f3f3'}}>
            <div className="container">
                  <div className="row pt-4">
                      <h1 style={{margin:'10px auto',fontWeight:'bold'}}>Burung Setia</h1>
                      
                      <div style={{
                          display:'flex',
                          marginTop:40,
                          justifyContent:'center',
                          alignItems:'center',
                          flexDirection:'column',
                          width:'100%'
                      }}>                          
                      <p style={{textAlign:'justify'}}>Burung yang juga menjadi lambang cinta, karena burung ini hanya memiliki 1 pasangan dalam hidupnya.</p>

                      <div style={{
                          display:'flex',
                          flexWrap:'wrap',
                          justifyContent:'space-between',
                          
                      }}>
                      <img src={foto1} alt="" style={{width:'49%',marginBottom:20}}/>
                      <img src={foto1} alt="" style={{width:'49%',marginBottom:20}}/>
                      <img src={foto1} alt="" style={{width:'49%',marginBottom:20}}/>
                      <img src={foto1} alt="" style={{width:'49%',marginBottom:20}}/>
                      <img src={foto1} alt="" style={{width:'49%',marginBottom:20}}/>
                      <img src={foto1} alt="" style={{width:'49%',marginBottom:20}}/>
                      </div>
                      </div>
                  </div>            
              </div>
            </section>
              
        </div>
    );
}

export default Beranda;