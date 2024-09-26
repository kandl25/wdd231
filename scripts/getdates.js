const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

const today = new Date();
const lastMod = document.lastModified;

year.innerHTML = `${today.getFullYear()}`;
lastmodified.innerHTML = `Last Modification: ${lastMod}`;

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

/* classes */
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const baseClass = "courseCard";
const takenClass = "taken";

// DOM elements
const coursesContainer = document.querySelector("#courseCards");
const allButton = document.querySelector("#showAll");
const cseButton = document.querySelector("#showCse");
const wddButton = document.querySelector("#showWdd");
const pendingCredits = document.querySelector('#creditsRequired');

// fill in the required credits
let totalCredits = courses.reduce((total, course) => total + course.credits, 0);
pendingCredits.innerText = totalCredits;

const courseCard = (subject, number) =>
// template function to create 1 course card
`<div class="${baseClass}">${subject} ${number}</div>`

// fills courses container
const fillCourses = (courseList) => {
    coursesContainer.innerHTML = ""; // clears container to start populating
    courseList.forEach(course => {
        let newCourse = document.createElement("div");
        newCourse.setAttribute("class", baseClass);
        if (course.completed) {
            newCourse.classList.add(takenClass);
        }
        newCourse.innerText = `${course.subject} ${course.number}`;
        coursesContainer.appendChild(newCourse);
    });    
}

// filter event listeners
allButton.addEventListener('click', () => {
    fillCourses(courses);
})

cseButton.addEventListener('click', () => {
    fillCourses(courses.filter(course => course.subject == "CSE"));
})

wddButton.addEventListener('click', () => {
    fillCourses(courses.filter(course => course.subject == "WDD"));
})

// initial load of all courses
fillCourses(courses);