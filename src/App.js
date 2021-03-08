import ClientLayout from './layout/ClientLayout'
import AdminLayout from './layout/AdminLayout'
import ProfilePage from './layout/ProfilePage'
import TablePage from './layout/TablePage'
import ErrorPage from './layout/ErrorPage'
import BlankBage from './layout/BlankBage'
import IconsPage from './layout/IconsPage'

import {
  BrowserRouter as Router,Route, Switch
} from "react-router-dom";
const App = () => {
  return (
    <div>
         <Router>
          <Switch>  
            <Route  path="/" exact component={ClientLayout} />
            <Route path="/admin" exact component={AdminLayout} />
            <Route  path="/profile" exact component={ProfilePage} />
            <Route  path="/table" exact component={TablePage} />
            <Route  path="/error" exact component={ErrorPage} />
            <Route  path="/blank" exact component={BlankBage} />
            <Route  path="/icons" exact component={IconsPage} />
        </Switch>
        </Router>

     
    </div>
  )
}

export default App
