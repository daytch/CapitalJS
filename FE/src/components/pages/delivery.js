import React from 'react';
import {public_path} from '../../utils/common';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function DeliveryTabItem(props){
  return(
    <div className={"delivery-tabItem " + (props.active && "active")}>
      <span className="delivery-tabItemText">{props.text}</span>
    </div>
  )
}

function DeliveryMethodItem(props){
  return (
    <div className="delivery-methodItem">
      <div className="delivery-methodItemInner">
        <h3 className="delivery-methodName text-center">{props.name}</h3>
        <ul>
          {props.descriptions.map(description => (
            <li>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Delivery(props){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return(
    <div className="delivery-container">
      <section className="delivery-bannerSection">
        <div className="delivery-banner">
          <img src={public_path('/assets/img/delivery-banner.png')} alt=""/>
        </div>
      </section>
      <section className="delivery-content">
        <h3 className="delivery-title text-center">Delivery & Pickup Information</h3>
        <p className="delivery-desc1 text-center"><strong>At Colette & Lola we believe you should be able to get your cake when & how you want.</strong></p>
        <p className="text-center"><strong>As such we offer 3 convenient methods for all your cake needs in Jabodetabek.</strong></p>
        <div className="delivery-methodListWrapper">
          <ul>
            <li><strong>Same Day Delivery</strong> <span className="delivery-info"><em>(now available Online)</em></span></li>
            <li><strong>Delivery</strong> <span className="delivery-info"><em>(from Next Day to 14 Days in advance)</em></span></li>
            <li><strong>Store Pickup</strong> <span className="delivery-info"><em>(pickup directly at 1 of our 3 outlet locations)</em></span></li>
          </ul>
        </div>
        <div className="delivery-methodWrapper">
        <DeliveryMethodItem name="Same Day Delivery" descriptions={["For orders before 3pm","Available Monday - Saturday","Delivery within 4hrs"]} />
        <DeliveryMethodItem name="Next Day Delivery" descriptions={["Next day delivery for orders before 6pm", "Available Monday - Sunday", "Order for up to 14 days in advance"]} />
        <DeliveryMethodItem name="Store Pickup" descriptions={["Order Online & Pickup in store", "Available Monday - Sunday", "Same day & up to 7 days in advance"]} />
        </div>
        <p><strong>Delivery & Same Day Delivery To Jabodetabek</strong></p>
        <p>
          Order <strong>before 3pm</strong> for Same Day Delivery <strong>Within 4hrs</strong> (Mon - Sat)
          <br/>
          Order <strong>before 6pm</strong> for Next Day Delivery
          <br/>
          Orders can be placed for up to 14 days in advance
        </p>
        <p data-margin-bottom="md">A minimum order amount of Rp 300.000 (before discount) is required to be eligible for delivery</p>
        <div className="delivery-tabContainer">
          <div className="delivery-tabItemContainer">
            <DeliveryTabItem text="Delivery Times" active={true} />
            <DeliveryTabItem text="Free Delivery" />
            <DeliveryTabItem text="Delivery Guarantee" />
            <DeliveryTabItem text="Delivery Charge" />
          </div>
          <div className="delivery-tabContentContainer">
            <table className="delivery-table" border="1">
              <thead>
                <tr>
                  <td>Monday - Friday</td>
                  <td>Saturday - Sunday</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09:00 - 11:00</td>
                  <td>09:00 - 11:00</td>
                </tr>
                <tr>
                  <td>09:00 - 11:00</td>
                  <td>09:00 - 11:00</td>
                </tr>
                <tr>
                  <td>09:00 - 11:00</td>
                  <td>09:00 - 11:00</td>
                </tr>
                <tr>
                  <td>09:00 - 11:00</td>
                  <td>09:00 - 11:00</td>
                </tr>
                <tr>
                  <td>09:00 - 11:00</td>
                  <td>09:00 - 11:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Delivery;