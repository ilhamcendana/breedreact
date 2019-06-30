import React from 'react';
import HeaderMain from '../HeaderMain';
import bg from '../../img/lovebird2.jpg';
import gambar1 from '../../img/bersih.jpg';

const AnalisisUsaha = () => {
    const konten = [
        {
            img:bg,
            judul:'hahahahah',
            konten:'iyaiyiayiayia iayiayia hahahaha'
        },
        {
            img:gambar1,
            judul:'aduh',
            konten:'iyaiyiayiayia iayiayia hahahaha'
        },
        {
            img:bg,
            judul:'aduh',
            konten:'iyaiyiayiayia iayiayia hahahaha'
        },
        {
            img:bg,
            judul:'aduh',
            konten:'iyaiyiayiayia iayiayia hahahaha'
        },
        {
            img:bg,
            judul:'aduh',
            konten:'iyaiyiayiayia iayiayia hahahaha'
        },
        {
            img:bg,
            judul:'aduh',
            konten:'iyaiyiayiayia iayiayia hahahaha'
        }
    ]
    return ( 
        <div>
        <HeaderMain 
            bg={bg}
            marginBottom={0}
            title='BURUNG CINTA' subtitle='Banyak orang mulai tertarik pada burung cinta karena
              keindahan warna-warni bulunya juga. Bentuknya yang mungil semakin membuatnya menjadi idola bagi para
              pecinta burung di tanah air. Penampilan fisik burung cinta memang mempesona karena warna bulunya yang
              cerah dan indah dipandang.' />

              <div>
                  <div className="row m-0">
                      {konten.map((item,index) => ( 
                          <>
                        <div className="col-sm-6 p-0" key={index}>
                            <img src={item.img} alt="" style={{width:'100%'}}/>
                      </div>
                      <div className="col-sm-6" style={{
                          display:'flex',
                          justifyContent:'center',
                          alignItems:'center',
                          flexDirection:'column'
                      }}>
                          <h4 className='font-weight-bold mb-4'>{item.judul}</h4>
                          <p>
                          {item.konten}
                          </p>
                      </div> 
                      </>
                      ))}                     
                  </div>
              </div>
        </div>
     );
}
 
export default AnalisisUsaha;