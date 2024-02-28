import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contribute = () => {
    const navigate = useNavigate();
    const handleOnClick = (e)=>{
        navigate("/")
    }
    return (
        <>
            <div className="container">
                <h2>Share Your Recipe Here </h2>
                <form className='mx-5'>
                    <div className="mb-3">
                        <label htmlFor="recipeName" className="form-label text-danger">Recipe Name</label>
                        <input type="text" className="form-control mx-2" id="recipeName" name="recipeName" aria-describedby="emailHelp" />
                        <div id="recipeHelp" className="form-text mx-2">Give a unique name to your Recipe so that it stands out.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ingredients" className="form-label text-success">Ingredients</label>
                        <input type="text" className="form-control mx-2" id="ingredients" name='ingredients' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description of Recipe</label>
                        <input type="text" className="form-control mx-2" id="description" name='description' />
                    </div>

                    <button type="submit" onClick={handleOnClick} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contribute