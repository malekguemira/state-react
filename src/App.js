import './App.css';
import React, { useState } from 'react';


function App() {
  const [Person,setPerson] = useState({
    fullName:"Mehd",
    bio:"Mehd is very good",
    imgSrc:"https://res.cloudinary.com/turkiskander96/image/upload/v1714295614/bbb_ypdvry.jpg",
    profession:"student",
  })
  const [shows,setShows]=useState(false)
  const handleshows =()=>{
    setShows(!shows)
  }
  return (
    <div className="App">
      <div className='Box'>
      <button onClick={handleshows}>Toggle Profile</button>
       {shows ? <div className='profile'>
            <img src={Person.imgSrc} alt="No" />
            <span>{Person.fullName}</span>
            <span>{Person.bio}</span>
            <span>{Person.profession}</span>
        </div>  :   <span>no user</span>
        }
      </div>
    </div>
     );
  
}

export default App;
