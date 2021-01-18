import React from 'react';
import { public_path } from '../../utils/common';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';

function Payment() {
  return (
    <div>
      <div className="carrer-section">
        <center><h1 className="title-payment">Payment Methods</h1></center>

        <div className="box-carrer-content row">
          <div className="col-md-6 payment-content flex-1 content-payment">
            <center><h6>TRANSFER</h6></center>
            <p>Pembayaran bisa via transfer : BCA 277-773-1307 a.n PT.Capital Kembang Utama.</p>
            <ul>
              <li>Pesanan untuk cake yang sudah ready display, pembayaran harus Lunas sesuai harga yang sudah diinfokan tim kami.</li>
              <li>Khusus custom cake/ kids cake/ hampers cake edible photo print/ cake gambar.</li>
              <li>Dp 50% max 3 hari setelah pemesanan cake sisanya dapat dilunasi paling lambat 3 hari sebelum pengantaran atau dilunasi langsung pada saat pengiriman.</li>
              <li>Bukti transfer dapat di kirim via email order@capital-bakery.com / Whatapps:0881 2176 798 dengan menyertakan nama pemesan, nama cake, dan kode pemesana.</li>
              <li>Dianggap booking jika telah melakukan pembayaran dan pesanan dianggap cancel jika masih belum ada konfirmasi pembayaran sampai dengan tanggal yang telah ditentukan.</li>
              <li>Pesanan dianggap fix dan tidak dapat diubah kembali.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="payment-content flex-1">
              <center><h5>Pembayaran di Outlet</h5></center>
              <ul>
                <li>Untuk pengambilan order via CRO (tidak untuk pembelian online).</li>
                <li>Pembayaran di outlet bisa menggunakan Cash, Debit, Credit Card, OVO, Go-Pay dan Shopee Pay.</li>
                <li>Bisa di infokan kepada CRO kami jika inggin melakukan pembayaran di outlet saat pengambilan.</li>
              </ul>
            </div>
            <div className="flex-1">
              <img alt="local payment" className="local-payment" src={public_path('/assets/img/local-payment.png')} />
            </div>
          </div>
          <div className="col-md-12 payment-animasi">
            <center><h1>ANIMASI</h1></center>
          </div>
        </div>

      </div>

    </div>
  )
}
export default Payment;