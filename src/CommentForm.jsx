import { useState } from "react"

export default function CommentForm() {
    let [formData,setFormData] = useState({
        username : "",
        remarks : "",
        rating : 5,
    });

    let handleInputChange = (event) =>{
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value};
        });
    };

    let handleSubmit = (event) =>{
        console.log(formData);
        event.preventDefault();
    }

    return (
        <div>
            <h4>Giva a comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username"/>
                <br></br><br></br>
                <label htmlFor="remark">Remarks</label>
                <textarea value={formData.remarks} placeholder="add a remarks" onChange={handleInputChange} id="remark"></textarea>
                <br></br><br></br>
                <label htmlFor="rating">Rating</label>
                <input placeholder="rating" type="number" min={1} max={5}  value={formData.rating} onChange={handleInputChange} id="rating"/>
                <br></br><br></br>
                <button>Add comment!</button>
            </form>
        </div>
    )
}