    import {Link, useNavigate} from 'react-router-dom'

    const HomeAdmin = () => {
        return (
            <div>
                <h4>Welcome, Admin</h4>
                <div className="button-85">
                <a href='http://localhost:3000/admins'>ADMINS</a>
                </div>
                <div className="button-85">
                <a href='http://localhost:3000/instructors'>INSTRUCTORS</a>
                </div>
                <div className="button-85">
                <a href='http://localhost:3000/corporateTrainees'>CORPORATE TRAINEES</a>
                </div>
                
                
            </div>
        )
    }

    export default HomeAdmin