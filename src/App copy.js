import ClientLayout from './layout/ClientLayout'
import AdminLayout from './layout/AdminLayout'
import ProfilePage from './layout/ProfilePage'
import TablePage from './layout/TablePage'

import {
  BrowserRouter as Router,Route, Switch
} from "react-router-dom";

const App = () => {
  return (
    <div>
         <Router>
          <Switch>  
            <Route path="/admin" exact component={AdminLayout} />
            <Route  path="/" exact component={ClientLayout} />
            <Route  path="/profile" exact component={ProfilePage} />
            <Route  path="/table" component={TablePage} />
        </Switch>
        </Router>

     
    </div>
  )
}

export default App
