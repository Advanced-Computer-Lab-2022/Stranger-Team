//da akher file 
//HANA
    // import React from 'react';
    import { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";   
    import 'bootstrap/dist/css/bootstrap.min.css';
 
    const TraineeWallet = () =>{
        const[balance,setBalance] = useState([])
        const queryParams = new URLSearchParams(window.location.search);
        //const traineeID = queryParams.get('TraineeId');
        var c;
   
      
        useEffect( () =>{
          // dispatch(setIsLoading(false))
            const fetchBalance = async() =>{

              //?TraineeId=${traineeID}
               const response = await fetch(`/ViewBalance/`)
              //  console.log(response)
                const json = await response.json()
                if(response.ok){
                  c = json;
                 console.log(json)
                    setBalance(json)
                } 
            }
           // console.log(balance);
            fetchBalance()
           // console.log(balance);
          },TraineeWallet )
        const data=balance.Balance;
        console.log(data);
      return(
        <div>
          <h4>Current balance:</h4>  
          <h5>{data}</h5>
          {/* {balance.map(name => <div>{name}</div>)} */}
          {/* <div>
            {balance.map((Balance) => (
              <div>
                <p>{Balance}</p>
              </div>
            ))}
          </div> */}
           
        </div>
      )
    }
   

    export default TraineeWallet