import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import courseModel from "./api/dummyApi";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import CourseDetails from "./components/CourseDetails";
import StudentDashboard from "./components/StudentDashboard";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
        <Routes>
          <Route
            path="/courses"
            element={<CourseList courses={courseModel} />}
          />
          <Route
            path="/courses/:id"
            element={<CourseDetails courseModel={courseModel} />}
          />
          <Route
            path="/"
            element={<StudentDashboard courseModel={courseModel} />}
          />
          <Route
            path="*"
            element={
              <div className="h-screen grid place-content-center text-blue-500 overflow-y-hidden text-3xl font-semibold">
                No Page Found
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
