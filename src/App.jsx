import './App.css'
import About from './pages/About'
import ContactInformation from './pages/ContactInformation'
import WorkSamples from './pages/WorkSamples'
import { NavLink, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className='app'>

        <div>
          <div className='pages'>
            <NavLink to='/Client-routing/about' activeClassName="active">Haqqında</NavLink>
            <NavLink to='/Client-routing/contactinformation' activeClassName="active">Əlaqə məlumatları</NavLink>
            <NavLink to='/Client-routing/worksamples' activeClassName="active">İş nümunələri</NavLink>
          </div>

          <Routes>
            <Route path='/Client-routing/about' element={<About />} />
            <Route path='/Client-routing/contactinformation' element={<ContactInformation />} />
            <Route path='/Client-routing/worksamples' element={<WorkSamples />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
