import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Gallery from './Gallery'



const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [search,setSearch] = useState("")
  const [data,setData] = useState([])
  useEffect(()=>{

  },[])
  const changeHandler = e =>{
    setSearch(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault()
    axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    ).then(
      res => {setData(res.data.photos.photo)
  })

  
  
    
  }
  return (
    <div>
      <center>
        <form onSubmit ={submitHandler}>     
      <h1>Image Gallery App</h1>
      <input type = "text" value={search} onChange={changeHandler}/><br></br>
      <input type =  "submit" name={search} />
      </form>
   {data.length>=1?<Gallery data={data}/>:<h4>No Image Loaded</h4>}
   </center>
   
    </div>
  )
}

export default App
