import { useState } from "react";
import ProfilePhoho from "./ProfilePhoto"
import ProfileInfo from "./ProfileInfo";

const ProfileForm = () => {
    const [images, setImages] = useState ([]);
  


    const [info, setInfo] = useState ({
        
        nameInfo: "",
        ageInfo : "",
        emailInfo: "",
        passwordInfo: ""
        
    });


    const handleChange = (event) => {
        const {target} = event;
        const {files} = target;
        const newImageArray = [...images, files[0]]
        setImages (newImageArray);
     };

     const supportChange = (event) => {
        const {name, value} = event.target;

        setInfo (currentInfo => ({
            ...currentInfo,
            [name]: value
        }));

     };

     const handlesubmit = (event) => {
        event.preventDefault();
        generateList(info)
     }


    return (
        <>
            <form onSubmit={handlesubmit}>
                <label>
                    Profile Photo:
                    <input 
                    type="file" 
                    name="profilePhoto"
                    onChange={handleChange} 
                    />
                </label>
                <label>
                    Name:
                    <input 
                    type="text" 
                    name="nameInfo"
                    value={info.nameInfo}
                    onChange={supportChange}
                    />
                </label>
                <label>
                    age:
                    <input 
                    type="number" 
                    name="ageInfo" 
                    value={info.ageInfo}
                    onChange={supportChange}
                    />
                </label>
                <label>
                    Email:
                    <input 
                    type="email" 
                    name="emailInfo"
                    value={info.emailInfo}
                    onChange={supportChange}
                    />
                </label>
                <label>
                    password:
                    <input 
                    type="password" 
                    name="passwordInfo"
                    value={info.passwordInfo}
                    onChange={supportChange}
                    />
                </label>
                <button type="submit">Add Profile</button>
            </form>
            <ProfilePhoho images = {images}/>
            <ProfileInfo info = {info}/>
        </>
        
    )
}
export default ProfileForm