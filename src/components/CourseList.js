import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseList = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm) ||
      course.instructor.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container mx-auto my-8">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl md:text-3xl font-semibold text-sky-600">
          Course List
        </h1>
        <input
          type="text"
          className="border p-2 w-50 md:w-64 lg:w-80 rounded-md focus:outline-none focus:border-black-500"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {filteredCourses.length === 0 ? (
        <p className="text-gray-600 w-100 text-center">No relevant courses available.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course) => (
            <li
              key={course.id}
              className="bg-white p-4 shadow-md rounded-md cursor-pointer transform transition-transform hover:scale-105"
            >
              <Link to={`/courses/${course.id}`}>
                {course.thumbnail && (
                  <img
                    src={course.thumbnail}
                    alt={`${course.name} thumbnail`}
                    className="mb-2 rounded-md object-cover h-40 w-full"
                  />
                )}
                <p className="text-lg font-semibold text-sky-600">
                  {course.name}
                </p>
                <p className="text-gray-600">{course.instructor}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseList;
