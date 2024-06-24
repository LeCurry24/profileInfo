import { useState } from "react";
import ProfilePhoho from "./ProfilePhoto"

const ProfileForm = () => {
    const [images, setImages] = useState ([]);

    const handleChange = (event) => {
        const {target} = event;
        const {files} = target;
        const newImageArray = [...images, files[0]]
        setImages (newImageArray);
     };
    return (
        <>
            <form>
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
                    onChange={handleChange}
                    />
                </label>
                <label>
                    age:
                    <input 
                    type="number" 
                    name="ageInfo" 
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input 
                    type="email" 
                    name="emailInfo"
                    onChange={handleChange}
                    />
                </label>
                <label>
                    password:
                    <input 
                    type="password" 
                    name="passwordInfo"
                    onChange={handleChange}
                    />
                </label>
            </form>
            <ProfilePhoho images = {images} />
        </>
        
    )
}
export default ProfileForm