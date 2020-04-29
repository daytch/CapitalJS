import React from 'react';
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
  NotFound
} from './components/pages';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus,faSortDown,faArrowRight,faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus,faSortDown,faArrowRight,faMinus);

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path={["/", "/about", "/product", "/product/detail", "/blog", "/delivery", "/outlet"]}>
          <Application>
            <Route exact path="/product" component={Product} />
            <Route exact path="/product/detail" component={ProductDetail} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/delivery" component={Delivery} />
            <Route exact path="/outlet" component={Outlet} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Application>
        </Route>
      </Switch>
    </div>
  );
}

export default App;