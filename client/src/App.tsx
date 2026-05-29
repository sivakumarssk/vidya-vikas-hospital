import { Home } from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from './pages/about/AboutPage'
import { ContactPage } from './pages/contact/ContactPage'
import { BookAppointmentPage } from './pages/appointment/BookAppointmentPage'
import { BlogsPage } from './pages/blogs/BlogsPage'
import { SpecialitiesPage } from './pages/specialities/SpecialitiesPage'
import { SpecialityDetailPage } from './pages/specialities/SpecialityDetailPage'
import { DoctorsPage } from './pages/doctors/DoctorsPage'
import { LocationsPage } from './pages/locations/LocationsPage'
import { LocationDetailPage } from './pages/locations/LocationDetailPage'
import { TechnologiesPage } from './pages/technologies/TechnologiesPage'
import { TechnologyDetailPage } from './pages/technologies/TechnologyDetailPage'
import { SurgeriesPage } from './pages/surgeries/SurgeriesPage'
import { SurgeryDetailPage } from './pages/surgeries/SurgeryDetailPage'
import { TransplantsPage } from './pages/transplants/TransplantsPage'
import { TransplantDetailPage } from './pages/transplants/TransplantDetailPage'
import {
  DoctorDetailsPage
} from "./pages/doctors/DoctorsDetailsPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/book-appointment" element={<BookAppointmentPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/specialities" element={<SpecialitiesPage />} />
      <Route path="/specialities/:slug" element={<SpecialityDetailPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/locations/:slug" element={<LocationDetailPage />} />
      <Route path="/technologies" element={<TechnologiesPage />} />
      <Route path="/technologies/:slug" element={<TechnologyDetailPage />} />
      <Route path="/surgeries" element={<SurgeriesPage />} />
      <Route path="/surgeries/:slug" element={<SurgeryDetailPage />} />
      <Route path="/transplants" element={<TransplantsPage />} />
      <Route path="/transplants/:slug" element={<TransplantDetailPage />} />
      <Route
  path="/doctors/:id"
  element={<DoctorDetailsPage />}
/>
    </Routes>
  )
}

export default App
