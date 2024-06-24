import { useState } from 'react'
import ProfileForm from './components/ProfileForm';



function App() {
    const [setProfileForm] = useState({});

  return (
    <>
      <h1>Info Profile</h1>
      <ProfileForm generatelist={setProfileForm}/>

    </>
  )
}

export default App
