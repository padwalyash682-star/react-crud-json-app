import { useNavigate, Link } from "react-router-dom";

function DashBoard() {
    const navigate = useNavigate();
    const student = JSON.parse(localStorage.getItem("student"));

    const logout = () => {
        localStorage.removeItem("student");
        navigate("/dashboard");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/dashboard">
                        Dashboard
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav ms-auto">

    {student ? (
        <>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                >
                    Students
                </a>

                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" to="/add">
                            Add Student
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/view">
                            View Students
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="nav-item">
                <button
                    className="btn btn-danger ms-3"
                    onClick={logout}
                >
                    Logout
                </button>
            </li>
        </>
    ) : (
        <li className="nav-item">
            <Link className="btn btn-success" to="/">
                Login
            </Link>
        </li>
    )}

</ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">
    <h2>Dashboard</h2>

    {student ? (
        <h4>Welcome {student.email}</h4>
    ) : (
        <h4>Please Login to Continue</h4>
    )}
</div>
            <footer className="bg-dark text-white text-center py-3 mt-auto">
                &copy; 2024 Student Management System. All rights reserved.
            </footer>
        </>
    );
}

export default DashBoard;