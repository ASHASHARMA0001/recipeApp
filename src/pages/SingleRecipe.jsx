import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SingleRecipe = () => {
    
    let location = useLocation();
    console.log(location.state.recipe)
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-md-4 bg-primary d-flex justify-contant-center'>
          <img height={'250px'} width={'250px'} src={location.state.recipe.image} alt="" />
          </div>
          <div className='col-md-8 bg-secondary'>
          <h1 className="text-center">{location.state.label}</h1>
         <h5 className='text-center'>Meal type: {location.state.recipe.mealType}</h5>
          <div className='col-md-4 m-auto mt-3 d-flex justify-contant-center bg-secondary'>
            <Link  to={location.state.recipes.url}className=' btn btn-primary'>see Recipe </Link>
            </div>

          <div className=' bg-dark gap-2 row d-flex justify-contant-center w-75 m-auto mt-2'>
            <div className=' col-md-3 bg-warning p-2'>
              <h3 className='text-center'>{location.state.recipe.totalDaily.CA.label}</h3>
              <p className='text-center'>{Math.floor(location.state.recipe.totalDaily.CA.quantity)}%</p>
            </div>

            <div className=' col-md-3 bg-warning p-2'>
              <h3 className='text-center'>{location.state.recipe.totalDaily.CA.label}</h3>
              <p className='text-center'>{Math.floor(location.state.recipe.totalDaily.CA.quantity)}%</p>
            </div>

            <div className=' col-md-3 bg-warning p-2'>
              <h3 className='text-center'>{location.state.recipe.totalDaily.CA.label}</h3>
              <p className='text-center'>{Math.floor(location.state.recipe.totalDaily.CA.quantity)}%</p>
            </div>
            </div>
            </div>
     </div>
        <ul>
        <h2>Ingredients{location.state.recipe.ingredients.length}</h2>
        {location.state.recipe.totalDaily.CA.quantity}
  
        {location.state.recipe.ingredients.map((ele)=>{
         return <li key={ele.food}>{ele.food}</li>
        })}
        </ul>
        <h1>{location.state.recipe.totalNutrients.CA.label}</h1>
       

   </div>     
  )
}

export default SingleRecipe
