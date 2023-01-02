    import { Link } from 'react-router-dom'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import logo from '../images/logo.jpg'

    const InitialNavbar = () => {

    return (
        

        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Default</a> */}
                    <a className="navbar-brand me-2">
                <img
                    src={logo}
                    height="50"
                    margin-top="-1px"
                    alt="MDB Logo"
                    loading="lazy"
                />
                </a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                </ul>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                    <p className="navbar-brand" href="#">My Profile</p>
                </ul>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <p className="navbar-brand" href="#">My Registered Courses</p>
                </ul>

                
                
        </div>
        </nav>
    

    )
    }

    export default InitialNavbar