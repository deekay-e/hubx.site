import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Layout from './components/Layout'
import DashLayout from './components/dash/Layout'

import Home from './pages/home'
import Contact from './pages/contact'
import Blog from './pages/insights/blog'
import * as ab from './pages/about/intro'
import * as cp from './pages/company/index'
import * as lg from './pages/legal/index'
import * as sv from './pages/services/index'
import * as sp from './pages/support/index'

import Welcome from './components/dash/Welcome'

import Login from './features/auth/Login'
import Prefetch from './features/auth/Prefetch'
import Register from './features/auth/Register'
import EditUser from './features/users/EditUser'
import UsersList from './features/users/UsersList'
import NewUserForm from './features/users/NewUserForm'
import NewProject from './features/projects/NewProject'
import EditProject from './features/projects/EditProject'
import ProjectsList from './features/projects/ProjectsList'

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      {/* Public routes */}
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='contact' element={<Contact />} />
        <Route path='register' element={<Register />} />

        <Route path='services/'>
          <Route index element={<sv.Service />} />
          <Route path='academic' element={<sv.Academic />} />
          <Route path='accommodation' element={<sv.Accommodation />} />
          <Route path='business' element={<sv.Business />} />
          <Route path='career' element={<sv.Career />} />
          <Route path='conciarge' element={<sv.Conciarge />} />
          <Route path='consultation' element={<sv.Consultation />} />
          <Route path='cv-check' element={<sv.CVCheck />} />
          <Route path='data' element={<sv.Data />} />
          <Route path='digital-marketing' element={<sv.DigitalMarketing />} />
          <Route path='graphics-design' element={<sv.GraphicsDesign />} />
          <Route path='jobs' element={<sv.Jobs />} />
          <Route path='lifestyle' element={<sv.Lifestyle />} />
          <Route path='mentorship' element={<sv.Mentorship />} />
          <Route path='music-audio' element={<sv.MusicAudio />} />
          <Route path='photography' element={<sv.Photography />} />
          <Route path='programming-tech' element={<sv.ProgrammingTech />} />
          <Route path='scholarships' element={<sv.Scholarships />} />
          <Route path='translocation' element={<sv.Translocation />} />
          <Route path='video-animation' element={<sv.VideoAnimation />} />
          <Route path='writing-translation' element={<sv.WritingTranslation />} />
        </Route>

        <Route path='blog/'>
          <Route index element={<Blog />} />
        </Route>

        <Route path='about'>
          <Route index />
          <Route path='us' element={<ab.Intro />} />
          <Route path='press' element={<ab.Press />} />
          <Route path='impact' element={<ab.Impact />} />
          <Route path='process' element={<ab.Process />} />
        </Route>

        <Route path='company'>
          <Route index element={<cp.Company />} />
          <Route path='jobs' element={<cp.Jobs />} />
          <Route path='team' element={<cp.Team />} />
          <Route path='podcast' element={<cp.Podcast />} />
          <Route path='investors' element={<cp.Investors />} />
          <Route path='affiliates' element={<cp.Affiliates />} />
        </Route>

        <Route path='legal'>
          <Route index element={<lg.Legal />} />
          <Route path='terms' element={<lg.Terms />} />
          <Route path='cookies' element={<lg.Cookies />} />
          <Route path='privacy' element={<lg.Privacy />} />
          <Route path='licensing' element={<lg.Licensing />} />
          <Route path='conflict-resolution' element={<lg.DisputeResolution />} />
        </Route>

        <Route path='support'>
          <Route index />
          <Route path='help' element={<sp.Help />} />
          <Route path='faqs' element={<sp.FAQs />} />
          <Route path='trust' element={<sp.Trust />} />
          <Route path='inquiries' element={<sp.Inquiries />} />
        </Route>
      </Route>

      {/* Dash routes */}
      <Route element={<Prefetch />}>
        <Route path='/dash' element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path='users'>
            <Route index element={<UsersList />} />
            <Route path=':id' element={<EditUser />} />
            <Route path='new' element={<NewUserForm />} />
          </Route>

          <Route path='projects'>
            <Route index element={<ProjectsList />} />
            <Route path=':id' element={<EditProject />} />
            <Route path='new' element={<NewProject />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
