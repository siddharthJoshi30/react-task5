import React from 'react'
const CalculateAge = (event) => {
    
    event.preventDefault();
    const age = Math.abs(new Date(Date.now() - new Date(document.getElementById("d1").value).getTime()).getUTCFullYear() - 1970)
    document.getElementById("p1").innerHTML = "You are " +age.toString()+" years old"
    document.getElementById("p1").style.font = "black"
    
}
const checkAge = () =>{

    return(
        <div>
            <header><h1>Age Calculator</h1></header>
            <main>
                <p>Enter your date of birth</p>
                <form>
                    <input type="date" id="d1" style={{width:"200px"}}/><br /><br />
                    <button onClick={CalculateAge} style={{backgroundColor:"#007BFF",color:"white",padding:"9px",
                                                            borderRadius:"6px"}}>Calculate age</button>
                    <p id="p1"></p>
                </form>
            </main>
        </div>
    )
}
export default checkAge;