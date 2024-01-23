import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

const Course = ({ courseModel }) => {
  const { id } = useParams();

  const course = courseModel.find((course) => course.id === parseInt(id, 10));

  if (!course) {
    return <div>Loading...</div>;
  }

  const gradientOverlayStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(rgba(0,0,0,0.5), transparent)",
    borderRadius: "8px",
    padding: "16px",
  };

  return (
    <div className="my-8 relative">
      <div className="bg-white relative">
        <div className="flex flex-row mb-4">
          <Link
            to="/courses"
            className="cursor-pointer text-black-500 hover:underline mb-2 lg:mb-0 lg:mr-2 text-sm lg:text-base"
          >
            Course List
          </Link>
          <span className="text-gray-600 lg:ml-2 text-sm lg:text-base">
            {" "}
            / {course.name}
          </span>
        </div>

        <div style={{ position: "relative" }}>
          {course.thumbnail && (
            <>
              <img
                src={course.thumbnail}
                alt={`${course.name} thumbnail`}
                className="mb-4 rounded-md object-cover h-[300px] lg:h-[500px] w-full"
              />
              <div style={gradientOverlayStyle}>
                <h1 className="text-3xl lg:text-4xl text-white font-bold mb-2">
                  {course.name}
                </h1>
                <p className="text-white">{course.instructor}</p>
              </div>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="text-gray-600">
            <FontAwesomeIcon icon={faUserCheck} className="mr-2" />
            Enrollment Status: {course.enrollmentStatus}
          </div>
          <div className="text-gray-600">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            Duration: {course.duration}
          </div>
          <div className="text-gray-600">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            Schedule: {course.schedule}
          </div>
          <div className="text-gray-600">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Location: {course.location}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-sky-600">
            Course Description
          </h2>
          <p className="text-gray-600 mt-2">{course.description}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-sky-600">
            Course Details
          </h2>
          <div className="mt-3">
            <h5 className="font-medium">Pre-requisites:</h5>
            <ul className="list-disc pl-6">
              {course.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
            </ul>
          </div>
          <div className="mt-5 border-t">
            <h5 className="font-medium">Syllabus:</h5>
            <table className="min-w-full divide-y divide-gray-200 mt-2">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-sky-600 text-white rounded-tl-md">
                    Week
                  </th>
                  <th className="py-2 px-4 bg-sky-600 text-white">Topic</th>
                  <th className="py-2 px-4 bg-sky-600 text-white rounded-tr-md">
                    Content
                  </th>
                </tr>
              </thead>
              <tbody>
                {course.syllabus.map((item) => (
                  <tr key={item.week} className={`hover:bg-gray-${"100"}`}>
                    <td className="py-2 px-4 border-b">{item.week}</td>
                    <td className="py-2 px-4 border-b">{item.topic}</td>
                    <td className="py-2 px-4 border-b">{item.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
