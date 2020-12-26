import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../redux/actions/orderAction';
import { getOutlet } from '../../redux/actions/outletAction';


function Order(props){
  const dispatch = useDispatch()
  React.useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getOrder())
  }, []);

  const order = useSelector(state => state.orderReducer.griddata)
  console.log(order)
  return(
    <div className="blog-section">
      <h1>ORDERAN SAYA</h1>

      <table className="table">
          <thead style={{backgroundColor: 'brown', color: 'white'}}>
              <th>Transaksi ID</th>
              <th>Product</th>
              <th>Total</th>
              <th>Delivery</th>
              <th>Status Pembayaran</th>
          </thead>
          <tbody>
              {
                  order ? 
                  order.map(v=>{
                    return (
                        <tr>
                      <td>{v.TransaksiID}</td>
              <td>
                  {v.Product.map(i=>{
                          return (
                              <div>
                                  Kue: {i.product.Name}<br/><br/>
                                  AddOns: {i.AddOns.map(z=>z[0] + ' ' + z[1] + ', ')}<br/><br/>
                                  Note: {i.Note}
                                  <hr/>
                              </div>
                          )
                      })}
              </td>
                    <td>{v.Total}</td>
                    <td>{v.Delivery}</td>
                    <td>{v.Status}</td>
                  </tr>
                    )
                  })
                  
                  : ''
              }
          </tbody>
      </table>
    </div>
  )
}

export default Order;