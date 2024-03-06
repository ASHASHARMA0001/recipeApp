import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const[datarecipe,setdatarecipe]=useState([])
    const searchValue = useRef ( );
    const [value,setvalue] = useState("cookies")

    const fetchData  =  async()=>{
     let res = await fetch(`https://api.edamam.com/search?q=${value}&app_id=ac390952&app_key=230fdd1d2294c2f10b75ef2ca142b1fe`)

     let data = await res.json();
     setdatarecipe(data.hits)
    }
    useEffect(()=>{
        fetchData()
        // bar bar code re-render na ho iss liye useEffect bnaya hai
    },[value])
    console.log(datarecipe)
    const handleSearch =(e)=>{
      e.preventDefault( )
      let search =searchValue.current.value;
      setvalue(search)
      console.log(search)
    }
    console.log(value)
    // function scope ke bhar clg nhi kr skte h 
  return (
    <div className='container m-auto mt-3'>
      <div className='col-md-4 m-auto'>
      <form className="d-flex">
        <input className="form-control outline-primary me-2" type="search" placeholder="Search" aria-label="Search" ref={searchValue} />
        <button onClick={handleSearch} className="btn btn-success" type="submit">Search</button>
      </form>
      </div>
      <div className='row mt-3'>
      {datarecipe?.map((ele)=>{
       
       return<div key ={ele.recipe.label} className="card m-3" style={{width: "18rem"}}>
  <img src={ele.recipe.image} className="card-img-top  " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
    {/* {<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>} */}
    <Link state ={ele}to={'/SingleRecipe'} className=" btn btn-success">View Recipe</Link>
  </div>
</div>
       
          {/* return <div key ={ele.recipe.label}>
            <p>{ele.recipe.label}</p>
            <img src={} alt="" />
            </div> */}
        })}
   
    </div>
    </div>
  )
}

export default Home
