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
            <NavLink to='/about' activeClassName="active">Haqqında</NavLink>
            <NavLink to='/contactinformation' activeClassName="active">Əlaqə məlumatları</NavLink>
            <NavLink to='/worksamples' activeClassName="active">İş nümunələri</NavLink>
          </div>

          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/contactinformation' element={<ContactInformation />} />
            <Route path='/worksamples' element={<WorkSamples />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
