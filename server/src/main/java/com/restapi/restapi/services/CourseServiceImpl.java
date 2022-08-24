package com.restapi.restapi.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restapi.restapi.dao.CourseDao;
import com.restapi.restapi.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CourseDao courseDao;
	
	@Override
	public List<Course> getCourses() 
	{
		return courseDao.findAll();
	}
	
	@Override
	public Optional<Course> getCourse(long courseid) 
	{
		return (Optional<Course>) courseDao.findById(courseid);
	}
	
	@Override
	public Course addCourse(Course course) {
		courseDao.save(course);
		return course;
	}
	
	@Override
	public Course updateCourse(Course course) {
		courseDao.save(course);
		return course;
	}
	
	@Override
	public void deleteCourse(long parseLong) {
//		Optional<Course> entity = courseDao.findById(parseLong);
		
	    courseDao.deleteById(parseLong); 
	    System.out.println(parseLong);
	}
	
//	List<Course> list;
//	public CourseServiceImpl()
//	{
//		list = new ArrayList<>();
//		list.add(new Course(2,"java core cousre","java"));
//		list.add(new Course(3,"java web cousre","java web"));
//	}
//	
//
//	@Override
//	public List<Course> getCourses() {
//	
//		return list;
//	}
//	
//	@Override
//	public Course getCourse(long courseid) {
//		Course c = null;
//		for(Course course:list)
//		{
//			if(course.getId()==courseid)
//			{
//				c=course;
//				break;
//			}
//		}
//	
//		return c;
//	}
//
//
//	@Override
//	public Course addCourse(Course course) {
//		list.add(course);
//		return course;
//	}
//
//
//	@Override
//	public Course updateCourse(Course course) {
//		
//		list.forEach( e->{
//			if(e.getId()==course.getId())
//			{
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
//		
//		return course;
//	}
//
//
//	@Override
//	public void deleteCourse(long parseLong) {
//		list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
//		
//	}

}
