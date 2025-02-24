import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Signup from './pages/SignUp';
import LoginPage from './pages/Login';
import { AuthContext, AuthProvider } from '../AuthContext';
import { Toaster } from 'react-hot-toast';
import UserProfile from './pages/profile';
import CourseEnrollment from './pages/CourseEnrollment';


function App() {
  return (
    <>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/courses/:id/enroll" element={<CourseEnrollment />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
        

      </AuthProvider>

    </>
  );
}

export default App;