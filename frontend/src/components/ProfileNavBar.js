    import { Link } from 'react-router-dom'

    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav} from 'react-bootstrap'

    import download1 from '../images/download1.png';

    



    const Navbar = () => {

    return (
        // <header>
        // <div className="container">
        //     <Link to="/">
        //     <h1>LearnEd</h1>
        //     </Link>
        // </div>
        // </header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src={download1} width="50" height="50" class="d-inline-block align-top" alt=""></img>
        <a class="navbar-brand" href="#">LearnEd</a>
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> */}
        
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-item nav-link active" href="http://localhost:3000/MyProfile">My Profile <span class="sr-only"></span></a>
            </div>
        </div>    
    </nav>

    )
    }

    export default Navbar