import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Application from './components';
import {
  Home,
  About,
  Product,
  ProductDetail,
  Blog,
  Delivery,
  Outlet,
  NotFound,
  Carrer,
  Team,
  Workplace,
  Tips,
  Operational,
  DetailBlog,   
  Faq,
  Cart,
  Order,
  Contact
} from './components/pages';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus,faSortDown,faArrowRight,faArrowLeft,faMinus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './services/route';
library.add(faPlus,faSortDown,faArrowRight,faArrowLeft,faMinus);

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path={["/","/faq","/order","/contact" ,"/cart","/about","/carrer","/blog/:id","/operational","/tips","/team","/workplace" ,"/product","/home" ,"/product/:id", "/blog", "/delivery", "/outlet"]}>
          <Application>
            <PrivateRoute exact path="/order" component={Order} />
            <PrivateRoute exact path="/cart" component={Cart} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog/:id" component={DetailBlog} />
            <Route exact path="/operational" component={Operational}/>
            <Route exact path="/tips" component={Tips}/>
            <Route exact path="/team" component={Team}/>
            <Route exact path="/workplace" component={Workplace}/>
            <Route exact path="/carrer" component={Carrer} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/product/:id" component={ProductDetail} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/delivery" component={Delivery} />
            <Route exact path="/outlet" component={Outlet} />
            <Route exact path="/about" component={About} />
            <Route exact path="/home" component={Home}/>
            <Route exact path="/" component={Home} />

          </Application>
        </Route>
      </Switch>
    </div>
  );
}

export default App;