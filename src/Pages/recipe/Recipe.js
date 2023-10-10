import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Recipe.css'

export default function Recipe() {
   const[listeData, dataChange]=useState(null);
    const navigate = useNavigate();

     const LoadDetail = (id) => {
        navigate("/recette/detail/" + id);
    }

     const LoadEdit = (id) => {
        navigate("/recette/edit/" + id);
    }

  useEffect(() => {
      fetch("http://192.168.0.2:1000/recipe").then((res) =>{
           return res.json();

      }).then((resp)=>{
          dataChange(resp);

      }).catch((err) => {
        console.log(err.message);
      })
    }, [])
  return (

    <div className="mt-5">
       <main role="main">

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Mes recettes</h1>
          <p class="lead text-muted">Choisissez une recette pour commencer a cuisiner aujourd'hui, ou</p>
          <p>

            <Link to="create" className="btn btn-success">Ajouter une nouvelle recette</Link>

          </p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">

           {
                      listeData && listeData.map(item=>(
               <div class="col-md-4">
              <div class="card mb-4 box-shadow">

                <div class="card-body" key={item.id}>

                  <p class="card-text"> <b className="card-title">{item.nom}</b></p>
                  <p class="card-text"> {item.category}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button onClick={() => { LoadDetail(item.id) }} type="button" class="btn btn-sm btn-outline-secondary">Voir</button>
                      <button  onClick={() => { LoadEdit(item.id) }} type="button" class="btn btn-sm btn-outline-secondary">Modifier</button>
                    </div>
                    <small class="text-muted"></small>
                  </div>
                </div>
              </div>
            </div>


                      ))
                     }




          </div>
        </div>
      </div>

    </main>

    </div>

  )
}
