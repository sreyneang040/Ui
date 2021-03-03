import ClientLayout from './layout/ClientLayout'
import AdminLayout from './layout/AdminLayout'
import {
  BrowserRouter as Router,Route, Switch
} from "react-router-dom";

const App = () => {
  return (
    <div>
         <Router>
          <Switch>  
            <Route path="/admin" exact component={AdminLayout} />
            <Route  path="/" component={ClientLayout} />
        </Switch>
        </Router>

     
    </div>
  )
}

export default App
