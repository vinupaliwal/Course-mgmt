package com.restapi.restapi.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restapi.restapi.entities.Course;
import com.restapi.restapi.services.CourseService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MyController {
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/home")
     public String home()
     {
    	 return "this is home page";
     }
	
	@GetMapping("/courses")
	public List<Course> getCourses()
	{
		return this.courseService.getCourses();
	}
	
	@GetMapping("/courses/{courseid}")
	public Optional<Course> getCourse(@PathVariable long courseid)
	{
		return this.courseService.getCourse(courseid);
	}
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course)
	{
		return this.courseService.addCourse(course);
	}
	
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course)
	{
		return this.courseService.updateCourse(course);
	}
	
	@DeleteMapping("/courses/{courseid}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable long courseid)
	{
		try {
			 this.courseService.deleteCourse(courseid);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e)
		{
			System.out.println(e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
