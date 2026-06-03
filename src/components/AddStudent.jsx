import axios from "axios";
import {useState} from "react";
import { nanoid } from "nanoid";

const API = "http://localhost:3000/students";
function AddStudent() { 
    const [student, setStudent] = useState({
        id: nanoid(),
        name: "",
        email: "",
        age: "",
        course: "",
        password: "",
        
    });
    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value,});

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(API, { ...student, id: Number(student.id) });
        alert("Student Registered");
        setStudent({id: "", name: "", email: "", age: "", course: "", password: ""});
    }
    return (
<>
<h3>Register Student</h3>
<form onSubmit={handleSubmit} className="demo">
     <input name="id" placeholder="ID" value={student.id} onChange={handleChange} className="form-control" type="number"/>
    <input name="name" placeholder="Name" value={student.name} onChange={handleChange} className="form-control" />
    <input name="email" placeholder="Email" value={student.email} onChange={handleChange} className="form-control" />
    <input name="age" placeholder="Age" value={student.age} onChange={handleChange} className="form-control" />
    <input name="course" placeholder="Course" value={student.course} onChange={handleChange} className="form-control" />
    <input type="password" name="password" placeholder="Password" value={student.password} onChange={handleChange} className="form-control"/>
    <button className="btn btn-success">Add Student</button>
</form>
</>
    );
}
export default AddStudent; 