import React, { useState } from 'react';
import './style.css';

const ProductList = () => {
  const initialProducts = [
    
    {
      id: 1,
      name: 'Donuts',
      description: 'Description du produit 5',
      image: '/images/pexels-geraud-pfeiffer-6150707.jpg',
      category: 'patisserie',
      price: 1500,
    },
    {
      id: 2,
      name: 'Cookie',
      description: 'Description du produit 5',
      image: '/images/pexels-lisa-fotios-230325.jpg',
      category: 'patisserie',
      price: 1500,
    },
    
    {
      id: 3,
      name: 'Biscuit',
      description: 'Description du produit 5',
      image: '/images/pexels-pixabay-266706.jpg',
      category: 'patisserie',
      price: 1500,
    },
    {
      id: 4,
      name: 'Cacapigeon nature',
      description: 'Description du produit 1',
      image: '/images/cacapigeon.png',
      category: 'amuse gueule',
      price: 500,
    },
    {
      id: 5,
      name: 'Cacapigeon au fromage',
      description: 'Description du produit 2',
      image: '/images/cacapigeon.png',
      category: 'amuse gueule',
      price: 500,
    },
    {
      id: 6,
      name: 'Cacapigeon au fromage',
      description: 'Description du produit 3',
      image: '/images/cacapigeon.png',
      category: 'amuse gueule',
      price: 1000,
    },
    {
      id: 7,
      name: 'Cacapigeon nature',
      description: 'Description du produit 4',
      image: '/images/cacapigeon.png',
      category: 'amuse gueule',
      price: 1000,
    },
   
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState({
    filterBy: 'all', 
    query: '',
  });

  const filterProducts = () => {
    return initialProducts.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(filter.query.toLowerCase());
      const categoryMatch = filter.filterBy === 'all' || product.category === filter.filterBy;

      if (filter.filterBy === 'all') {
        return nameMatch || categoryMatch; 
      }

      return nameMatch && categoryMatch;
    });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredProducts = filterProducts();

  return (
    <div>
      <h1 className="product-list-title mt-3">Nos Produits</h1>

      <div className="filters">
        <input
          type="text"
          name="query"
          placeholder="Rechercher par nom"
          value={filter.query}
          onChange={handleFilterChange}
          className="filter-input"
        />

        <select
          name="filterBy"
          value={filter.filterBy}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="all">Tout</option>
          <option value="amuse gueule">Amuse-gueule</option>
          <option value="patisserie">Pâtisserie</option>
        </select>
      </div>

      <div className="content content-boxed">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-lg-4" key={product.id}>
              <a className="block block-rounded block-link-pop overflow-hidden" href="#">
                <img className="img-fluid" src={product.image} alt={product.name} />
                <div className="block-content">
                  <h4 className="mb-1">{product.name}</h4>
                  <p className="fs-sm fw-medium mb-1">
                    <span className="text-primary">Catégorie: {product.category}</span>
                  </p>
                  <p className="fs-sm fw-medium mb-1">
                    <span className="text-primary">Prix: {product.price} Ariary</span>
                  </p>
                  <p className="fs-sm text-muted"></p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
