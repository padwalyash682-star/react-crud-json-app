import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function UpdateStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: "",
        email: "",
        course: "",
        age: "",
        password: "",
    });
    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async () => {
        const response = await axios.get(`http://localhost:5000/students/${id}`);
        setStudent(response.data);
    };

    const handleChange = (e) => {
        setStudent({
            ...student, [e.target.name]: e.target.value
        });
    };
    const updateStudent = async () => {
        await axios.put(`http://localhost:3000/students/${id}`, student);
        navigate("/view");
    };

    return (
        <>
           <h2>Update Student</h2>
            <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            />
            <br/> <br/>
            <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            />
            <br/> <br/>
            <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            />
            <br/> <br/>
            <input
            type="password"
            name="password"
            value={student.password}
            onChange={handleChange}
            />
            <br/> <br/>
            <input
            type="text"
            name="age"
            value={student.age}
            onChange={handleChange}
            />
            <button onClick={updateStudent}>Update Student</button>
        </>
    );
}
export default UpdateStudent;