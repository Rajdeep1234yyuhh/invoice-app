import { InvoiceForm } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Login from "./Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { useState } from "react";

export default function App() {
  const [auth, setAuth] = useState(false)
  return (
    <Router>
      <>
       
        <Switch>
          <ProtectedRoute auth={auth} component={InvoiceForm} exact path="/invoicer"/>
          <Route path="/">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
