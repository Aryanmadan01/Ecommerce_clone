// import React, {useState, useEffect} from 'react';
// import { NavLink } from 'react-router-dom';
// import Skeleton from "react-loading-skeleton";

// const Products = () => {

//     const [data, setData] = useState([]);
//     const [filter, setFilter] = useState(data);
//     const [loading, setLoading] = useState(false);
//     let componentMounted = true;

//     useEffect(() => {
//         const getProducts = async () => {
//             setLoading(true);
//             const response = await fetch("http://localhost:5000/api/products");
//             if(componentMounted){
//                 setData(await response.clone().json());
//                 setFilter(await response.json());
//                 setLoading(false);
//                 console.log(filter);
//             }

//             return () => {
//                 componentMounted = false;
//             }
//         }
//         getProducts();
//     }, []);


//     const Loading = () => {
//         return(
//             <>
//                 <div className="col-md-3">
//                     <Skeleton height={350}/>
//                 </div>
//                 <div className="col-md-3">
//                     <Skeleton height={350}/>
//                 </div>
//                 <div className="col-md-3">
//                     <Skeleton height={350}/>
//                 </div>
//                 <div className="col-md-3">
//                     <Skeleton height={350}/>
//                 </div>
//             </>
//         );
//     }


//     const filterProduct = (cat) => {
//         const updatedList = data.filter((x)=>x.category === cat);
//         setFilter(updatedList);
//     }

//     const ShowProducts = () => {
//         return (
//             <>
//             <div className="buttons d-flex justify-content-center mb-5 pb-5">
//                 <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
//                 <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
//                 <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
//                 <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
//                 <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
//             </div>
//             {filter.map((product)=> {
//                 return (
//                     <>
//                         <div className="col-md-3 mb-4">
//                             <div class="card h-100 text-center p-4" key={product.id}>
//                                 <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
//                                 <div class="card-body">
//                                     <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
//                                     <p class="card-text lead fw-bold">${product.price}</p>
//                                     {/* <NavLink to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</NavLink> */}
//                                     <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark buy-now-link">Buy Now </NavLink>
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                 )
//             })}
//             </>
//         );
//     };

//     return (
//         <div>
//             <div className="container my-5 py-5">
//                 <div className="row">
//                     <div className="col-12 mb-5">
//                         <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
//                         <hr />
//                     </div>
//                 </div>
//                 <div className="row justify-content-center">
//                     {loading ? <Loading /> : <ShowProducts />}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Products


import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:5000/api/products");
                const products = await response.json();
                console.log('Fetched products:', products); // Debugging line

                if (componentMounted) {
                    setData(products);
                    setFilter(products); // Initialize filter with all products
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching products:', error); // Handle error
                setLoading(false);
            }
        };

        getProducts();

        return () => {
            componentMounted = false;
        };
    }, []);

    const Loading = () => (
        <>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
        </>
    );

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    // const ShowProducts = () => (
    //     <>
    //         <div className="buttons d-flex justify-content-center mb-5 pb-5">
    //             <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
    //                 All
    //             </button>
    //             <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
    //                 Men's Clothing
    //             </button>
    //             <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
    //                 Women's Clothing
    //             </button>
    //             <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>
    //                 Jewelry
    //             </button>
    //             <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
    //                 Electronics
    //             </button>
    //         </div>

    //         {filter.map((product) => (
    //             <div className="col-md-3 mb-4" key={product._id}>
    //                 <div className="card h-100 text-center p-4">
    //                     <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
    //                     <div className="card-body">
    //                         <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
    //                         <p className="card-text lead fw-bold">${product.price}</p>
    //                         <NavLink to={`/products/${product._id}`} className="btn btn-outline-dark buy-now-link">
    //                             Buy Now
    //                         </NavLink>
    //                     </div>
    //                 </div>
    //             </div>
    //         ))}
    //     </>
    // );

    // const ShowProducts = () => (
    //     <>
    //         <div className="buttons d-flex justify-content-center mb-5 pb-5">
    //             <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
    //                 All
    //             </button>
    //             <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
    //                 Men's Clothing
    //             </button>
    //             <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
    //                 Women's Clothing
    //             </button>
    //             <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>
    //                 Jewelry
    //             </button>
    //             <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
    //                 Electronics
    //             </button>
    //         </div>
    
    //         {filter.map((product) => (
    //             <div className="col-md-3 mb-4" key={product._id}>
    //                 <div className="card h-100 text-center p-4">
    //                     <img src={product.image} className="card-img-top" alt={product.title || "Product"} height="250px" />
    //                     <div className="card-body">
    //                         <h5 className="card-title mb-0">
    //                             {product.title ? `${product.title.substring(0, 12)}...` : ""}
    //                         </h5>
    //                         <p className="card-text lead fw-bold">${product.price}</p>
    //                         <NavLink to={`/products/${product._id}`} className="btn btn-outline-dark buy-now-link">
    //                             Buy Now
    //                         </NavLink>
    //                     </div>
    //                 </div>
    //             </div>
    //         ))}
    //     </>
    // );


    const ShowProducts = () => (
        <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
                    All
                </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
                    Men's Clothing
                </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
                    Women's Clothing
                </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>
                    Jewelry
                </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
                    Electronics
                </button>
            </div>
    
            {filter.map((product) => (
                <div className="col-md-3 mb-4" key={product._id}>
                    <div className="card h-100 text-center p-4">
                        <img 
                            src={product.image || "https://via.placeholder.com/250"} 
                            className="card-img-top" 
                            alt={product.title || "Product"} 
                            height="250px" 
                        />
                        <div className="card-body">
                            <h5 className="card-title mb-0">
                                {product.title 
                                    ? `${product.title.substring(0, 12)}...` 
                                    : ""}
                            </h5>
                            <p className="card-text lead fw-bold">
                                ${product.price || "0.00"}
                            </p>
                            <NavLink 
                                to={product._id ? `/products/${product._id}` : "#"} 
                                className="btn btn-outline-dark buy-now-link"
                            >
                                Buy Now
                            </NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
    
    

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;
