import React from 'react';
import { public_path } from '../../utils/common';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';

const OrderWebsite = () => {
  return (
    <div>
      <div className="carrer-section">
        <h1 className="title-carrer">ORDER BY WEBSITE</h1>

        <div className="box-carrer-content">
          <div className="box-contain flex-1">
            <h6>Cara pemesanan melalui website langkah-langkah pemesanan produk capital bakery :</h6>
            <ol>
              <li>Pilihlah produk yang Anda Ingin beli.</li>
              <li>Klik tombol 'BELI' yang tersediua di bawah gambar.</li>
              <li>Masukkan jumlah yang diinginkan di bawahnya, lalu klik tombol 'TAMBAH KE KERANJANG'.</li>
              <li>Jika Anda sudah selesai memilih produk, klik tombol 'BERIKUTNYA'.</li>
              <li>Isi data konsumen pada form yang tersedia.</li>
              <li>Isi pilihan, tipe, dan data pengiriman.</li>
              <li>Isilah form 'permintaan pengiriman khusus' jika Anda memerlukannya.</li>
              <li>Isi alamat tujuan pengiriman.</li>
              <li>Isilah form 'permintaan khusus' jika Anda memerlukannya.</li>
              <li>Cantumkan kata-kata yang diinginkan pada jika Anda menginginkan ada kata-kata di atas kue.</li>
              <li>Selesai : Informasi Pembayaran.</li>
              <li>Pilihlah metode pembayaran dengan meng-klik salah satu pilihan : <br />
	                Transfer Bank, Kartu kredit atau .
                  </li>
              <li>Terima kasih telah memesan produk Capital Bakery.</li>
            </ol>
          </div>
        </div>
        <div className="col-md-12 payment-animasi">
          <center><h1>ANIMASI</h1></center>
        </div>

      </div>

    </div>
  )
}
export default OrderWebsite;