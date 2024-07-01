const course = {
    courseName: 'JS',
    coursePrice: 999, 
    courseInstructer: 'Hitesh'
}
// console.log(course.courseName);
// console.log(course.coursePrice);
// console.log(course.courseInstructer);

// destructuring

const {courseInstructer : instructer, courseName: name,coursePrice: price} = course;
// console.log(price, name, instructer); 

// data throgh an API 
// JSON = {'1':'a'} same like objects but in JSON keys and values, both are array/string
