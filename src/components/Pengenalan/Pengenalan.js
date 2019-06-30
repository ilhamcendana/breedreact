import React from 'react';
import HeaderMain from '../HeaderMain';
import bg from '../../img/lovebird2.jpg';

const Pengenalan = () => {
    return ( 
        <div>
        <HeaderMain 
            bg={bg}
            title='BURUNG CINTA' subtitle='Banyak orang mulai tertarik pada burung cinta karena
              keindahan warna-warni bulunya juga. Bentuknya yang mungil semakin membuatnya menjadi idola bagi para
              pecinta burung di tanah air. Penampilan fisik burung cinta memang mempesona karena warna bulunya yang
              cerah dan indah dipandang.' />
        </div>
     );
}
 
export default Pengenalan;