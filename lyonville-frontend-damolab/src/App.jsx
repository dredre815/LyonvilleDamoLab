// @flow

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SharedLayout } from './pages/SharedLayout.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Error } from './pages/Error.jsx'
import { ThingsToDo } from './pages/ThingsToDo/ThingsToDo.jsx'
import { History } from './pages/History/History.jsx'
import { LocalBusiness } from './pages/LocalBusiness/LocalBusiness.jsx'
import { RealEstate } from './pages/RealEstate/RealEstate.jsx'

function App() {
  return (
    <>
      <div key="main-div">
        <BrowserRouter>
          <Routes>
            {/* SharedLayout consists of Navbar and AdminPanel if authorized */}
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              {/* Other main pages goes below here as shown */}
              <Route path="about" element={<About />} />
              <Route path="things-to-do" element={<ThingsToDo />} /> 
              <Route path="history" element={<History />} />
              <Route path="local-business" element={<LocalBusiness />} />
              <Route path="real-estate" element={<RealEstate />} />
              <Route path="*" element={<Error />} />
              {/* ... */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App