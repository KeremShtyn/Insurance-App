import React, { useState } from 'react'
import { Navbar, EventList, Services, Transactions } from './components'
import Request from "./components/Request"
import SendData from "./components/SendData"
import getClaimsData from "./components/getClaimsData"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OwnDatas from './components/OwnDatas'

const App = () => {
  const [count, setCount] = useState(0)


  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome min-h-screen '>
        <BrowserRouter>
          <div>

            <Navbar />
            <Switch>
              <Route path="/" exact component={Services} />
              <Route path="/Lists" component={EventList} />
              <Route path="/Response" component={SendData} />
              <Route path="/Transactions" component={Transactions} />
              <Route path="/Eventsending" component={Request} />
              <Route path="/SentData" component={getClaimsData} />
              <Route path="/ClaimedDatas" component={OwnDatas} />
            </Switch>
          </div>
        </BrowserRouter>


      </div>
      <div>

      </div>
    </div>
  )

}

export default App
