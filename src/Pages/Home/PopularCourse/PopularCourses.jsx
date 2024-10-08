import React, { useState } from 'react';
import './PopularCourse.css';
import img1 from '../../../assets/menu/banner3.jpg';
import img2 from '../../../assets/menu/pizza-bg.jpg';
import img3 from '../../../assets/menu/soup-bg.jpg';

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Course Title 1',
      description: 'Brief description of the course.',
      image: img1,
      enrolled: '123 students enrolled',
    },
    {
      id: 2,
      title: 'Course Title 2',
      description: 'Brief description of the course.',
      image: img2,
      enrolled: '98 students enrolled',
    },
    {
      id: 3,
      title: 'Course Title 3',
      description: 'Brief description of the course.',
      image: img3,
      enrolled: '150 students enrolled',
    },
    // Add more courses if necessary
  ];

  // Pagination settings
  const coursesPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAll, setViewAll] = useState(false);

  // Calculate total pages
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  // Get current courses for the page or all courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = viewAll ? courses : courses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle View All click
  const handleViewAllClick = () => {
    setViewAll(!viewAll);  // Toggle the viewAll state
  };

  return (
    <div className="popular-courses">
      <div className="section-header">
        <h2>Popular Courses</h2>
        <button className="view-all" onClick={handleViewAllClick}>
          {viewAll ? 'Show Less' : 'View All'}
        </button>
      </div>

      <div className="courses-wrapper">
        {currentCourses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-info">
                <span>{course.enrolled}</span>
                <button className="view-course">View Course</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination (hidden when viewAll is true) */}
      {!viewAll && (
        <div className="join">
          <button
            className="join-item btn"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            1
          </button>
          <button
            className="join-item btn"
            onClick={() => handlePageChange(2)}
            disabled={currentPage === 2}
          >
            2
          </button>
          <button className="join-item btn btn-disabled">...</button>
          <button
            className="join-item btn"
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        </div>
      )}
    </div>
  );
};

export default PopularCourses;
