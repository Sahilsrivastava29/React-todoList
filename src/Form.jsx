import { useState } from "react"

export default function Form() {
    let [formData, setFormdata] = useState({
        fullName : "",
        username : ""
    });

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // }

    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // }

    let handleInputchange = (event)=>{
        let fieldName = event.target.name;
        let newValue = event.target.value;
        
        setFormdata( (currData) =>{
            return {...currData, 
                [event.target.name] : event.target.value
            };
        });
    };

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormdata({
            fullName: "",
            username: ""
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="Enter your full name" type="text" value={formData.fullName} id="fullName" name="fullName" onChange={handleInputchange}/>
            <label htmlFor="userName">Username</label>
            <br></br>
            <br></br>
            <input placeholder="Enter user name" type="text" value={formData.username} id="username" name="username" onChange={handleInputchange}/>
            <button>Submit</button>
        </form>

    )
}