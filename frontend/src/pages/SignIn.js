            //     import { useEffect, useState } from "react"
                
            //     const SignIn = () => {
            //         return(
            //             <div className="home">
            //                 <h2>Home</h2>

            //         <form className="create" onSubmit={handleSubmit}> 
            //         <h3>Filter Courses By Subject: </h3>

            //         <label> Guest</label>
            //         <input 
            //             type="text" 
            //             onChange={(e) => setSubject(e.target.value)} 
            //             value={Subject}
            //         />
            //         <button>Filter By Subject </button>

            //         {error && <div className="error">{error}</div>}
            //         </form>
                    
            //         </div>
            //     )
            // }

            //     export default SignIn

    import React from 'react';
    import { useNavigate } from "react-router-dom";
    const SignIn = () => {
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/Home'; 
        navigate(path);
    }

    const routeChange1 = () =>{ 
        let path = '/InstructorCoursePage'; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        let path = '/Home'; 
        navigate(path);
    }

    const routeChange3 = () =>{ 
        let path = '/corporateTraineeHome'; 
        navigate(path);
    }

    const routeChange4 = () =>{ 
        let path = '/adminHome'; 
        navigate(path);
    }

    const routeChange5 = () =>{ 
        let path = '/forgetPassword';
        navigate(path);
    }
    const routeChange6 = () =>{ 
        let path = '/changePassword';
        navigate(path);
    }
    const routeChange7 = () =>{ 
        let path = '/signup';
        navigate(path);
    }
    const routeChange8 = () =>{ 
        let path = '/login';
        navigate(path);
    }

    
    return (
        <div>
            <form className="signin">
        
            <button onClick={routeChange}> Guest </button>
            <button onClick={routeChange1}> Instructor </button>
            <button onClick={routeChange2}> Trainee </button>
            <button onClick={routeChange3}> Corporate Trainee </button>
            <button onClick={routeChange4}> Admin  </button> 
            <button onClick={routeChange5}> Forgot Password  </button> 
            <button onClick={routeChange7}> Sign up  </button> 
            <button onClick={routeChange8}> Login  </button> 
            <button onClick={routeChange6}> Change Password  </button> 
            
            </form>
        </div>
    );
    }

    export default SignIn