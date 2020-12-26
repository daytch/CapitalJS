import React from 'react';
import {public_path} from '../../utils/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';

function Team(){
  return(
    <div>
        <div className="carrer-section">
            <h1 className="title-carrer">Family, fun and action!</h1>
            <p>As one of the world’s largest fashion retailers, H&M offers endless career opportunities. A fast-paced, buzzing environment 
with great diversity – a place where the customer is always the centre of attention.</p>
            <div className="workplace-content">
                <div className="">
                    Berawal dari Medan pada tahun 1980an, Capital Bakery telah menjadi pilihan utama sebagai toko kue yang menyediakan beraneka macam kue untuk segala acara. Nama ‘Capital Bakery’ terinspirasi dari ibu kota Jakarta, dan menjadikannya visi dan misi kami untuk menyediakan 
produk-produk kegemaran masyarakat Jakarta dengan kualitas dan layanan terbaik.
                </div>
                <div className="workplace-section">
                    <h5>
                            <i>Hari ini, Capital Bakery & Cake Sudah memiliki 10 Outlet dan 200 karyawan</i>
                    </h5>
                    
                </div>
            </div>
           <div className="carrer-bannerWrapper">
            <img src={public_path('/assets/img/workplace.png')} alt=""/>
          </div>

        </div>
      
    </div>
  )
}
export default Team;