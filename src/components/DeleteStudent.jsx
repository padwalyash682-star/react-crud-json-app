import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function DeleteStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const deleteStudent = async () => {
        await axios.delete(`http://localhost:5000/students/${id}`);
        alert("Student Deleted");
        navigate("/view");
    };
    return (
        <>
            <h2>Delete Student</h2>
            <p>Are you sure you want to delete this student?</p>
            <button onClick={deleteStudent}>
                Yes Delete
                </button>
                </>
    );
}
export default DeleteStudent;