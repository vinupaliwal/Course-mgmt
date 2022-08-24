package com.restapi.restapi.services;

import java.util.List;
import java.util.Optional;

import com.restapi.restapi.entities.Course;

public interface CourseService {
	
  public List<Course> getCourses();

  public Optional<Course> getCourse(long parseLong);

  public Course addCourse(Course course);

  public Course updateCourse(Course course);

  public void deleteCourse(long parseLong);

//Optional<Course> getCourse(int courseid);

}
