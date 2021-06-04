import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import "assets/css/material-dashboard-react.css?v=1.10.0";

function App() {
  return (
    <div className="x">
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Admin} />
          {/* <Route path="/rtl" component={RTL} /> */}
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
