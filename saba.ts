// Student Data: The provided code defines an interface named Student that describes  student information like name, senior status (true/false), and whether they've completed  their assignments (true/false). 
// o Imagine this as a template for organizing student details.
interface Student {
    name: string;
    senior: boolean;
    assignmentsCompleted: boolean;
}
// An array named students stores information about several students using the  Student template. Think of this array as your class list! 

const students: Student[] = [
    {name: 'John', senior: true, assignmentsCompleted: true},
    {name: 'Jane', senior: false, assignmentsCompleted: false},
    {name: 'Bob', senior: true, assignmentsCompleted: true},
    ];
//     // Find Senior Students with Assignments (Optional): 
// o The code (not shown here) has a function that might find students who are seniors  and have completed their assignments. 
// o Can you guess why this information might be helpful?
// o Write a function that takes the students array as input and returns a new array  containing only the senior students who have completed their assignments.
// o Use the provided template to define the function's return type.
function findSeniorStudents(students: Student[]): Student[] {
    return students.filter(student => student.senior && student.assignmentsCompleted);
}
function updateClassList(student:Student[]): Student[] {
    return student.filter(student => !student.senior || student.assignmentsCompleted);
    }
    console.log(students)