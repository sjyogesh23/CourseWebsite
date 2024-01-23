import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = ({ courseModel }) => {
  const user = {
    enrolledCourses: [1, 3, 5],
  };

  const courses_enrolled = {
    1: {
      progress: 50,
      dueDate: "1/2/24",
    },
    3: {
      progress: 100,
      dueDate: "4/2/24",
    },
    5: {
      progress: 60,
      dueDate: "10/9/24",
    },
  };

  const allCourses = courseModel.map((course) => ({
    ...course,
    enrolled: user.enrolledCourses.includes(course.id),
  }));

  const onGoingCourses = [];
  const completedCourses = [];
  const otherCourses = [];

  allCourses.forEach((course) => {
    if (courses_enrolled[course.id]?.progress === 100) {
      completedCourses.push(course);
    } else if (courses_enrolled[course.id]?.progress !== undefined) {
      onGoingCourses.push(course);
    } else {
      otherCourses.push(course);
    }
  });

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-4 text-sky-600">
        Student Dashboard
      </h1>

      {onGoingCourses.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">On Going Session:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {onGoingCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                courses_enrolled={courses_enrolled}
              />
            ))}
          </div>
        </div>
      )}

      {completedCourses.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Completed Session:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                courses_enrolled={courses_enrolled}
              />
            ))}
          </div>
        </div>
      )}

      {otherCourses.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Other Session:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                courses_enrolled={courses_enrolled}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CourseCard = ({ course, courses_enrolled }) => {
  const progress = courses_enrolled[course.id]?.progress || 0;

  const getColor = () => {
    if (progress < 30) {
      return "bg-red-500";
    } else if (progress < 70) {
      return "bg-yellow-500";
    } else {
      return "bg-green-500";
    }
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md transition-transform transform hover:scale-105">
      <Link to={`/courses/${course.id}`} className="flex flex-col h-full">
        <img
          src={course.thumbnail}
          alt={`${course.name} Thumbnail`}
          className="mb-2 rounded-md object-cover h-40 w-full"
        />
        <p className="text-lg font-semibold text-sky-600">{course.name}</p>
        <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>

        {course.enrolled && (
          <>
            <p>Due Date: {courses_enrolled[course.id]?.dueDate}</p>
            <div className="flex items-center justify-between mt-2">
              <div className="w-2/3">
                <div>
                  <div className="flex mb-2 items-center justify-start">
                    <div className="w-full bg-gray-200 rounded-full ">
                      <div
                        className={`rounded-full ${getColor()} text-xs leading-none h-3 text-center text-white`}
                        style={{ width: `${progress}%` }}
                      >
                        {progress}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Link>
    </div>
  );
};

export default StudentDashboard;
