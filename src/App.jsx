import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Faculty from './pages/Faculty'
import Results from './pages/Results'
import About from './pages/About'
import Contact from './pages/Contact'
import Admission from './pages/Admission'
import './App.css'

export default function App() {
  return <BrowserRouter><Layout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/courses/:id" element={<CourseDetails />} />
    <Route path="/faculty" element={<Faculty />} />
    <Route path="/results" element={<Results />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/admission" element={<Admission />} />
  </Routes></Layout></BrowserRouter>
}
