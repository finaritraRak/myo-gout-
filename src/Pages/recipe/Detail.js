import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const RecipeDetail = () => {
    const { id } = useParams();

    const [recipe, recipechange] = useState({});

    useEffect(() => {
        fetch("http://192.168.0.2:1000/recipe/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            recipechange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div className="mt-4">
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}
               <Link className="btn btn-secondary mb-2" to="/recette">Retour</Link>
               <div className="container">

            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h3 className="h-center">Laokako</h3>
                </div>
                <div className="card-body"></div>

                {recipe &&
                    <div>
                        <h2 className="h-center"><b>{recipe.nom}</b></h2>
                        <h5 className="h-center">Categorie : {recipe.category}</h5>
                        <h4>Preparation :</h4>
                        <p>{recipe.content}</p>

                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default RecipeDetail;
