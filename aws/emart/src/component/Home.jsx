import React from 'react'
import Products from './Products'

const Home =() => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="https://static.vecteezy.com/system/resources/previews/016/264/237/non_2x/portrait-of-an-excited-beautiful-girl-wearing-dress-and-sunglasses-holding-shopping-bags-cheerful-young-woman-with-handbag-on-yellow-background-shopaholic-shopping-fashion-free-photo.jpg" className="card-img" alt="Background" height="657px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                    <p className="card-text lead fs-2">Check Out All The Trends</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home


// import React from 'react';

// const Home = () => {
//     return (
//         <div className="hero">
//             <div className="card bg-dark text-white">
//                 <img
//                     src="/assets/shopping_bg.avif"
//                     className="card-img"
//                     alt="Shopping Background"
//                 />
//                 <div className="card-img-overlay">
//                     <h5 className="card-title">Welcome to Our Store</h5>
//                     <p className="card-text">
//                         Explore a wide variety of products with amazing deals. Shop now for the
//                         best experience!
//                     </p>
//                     <p className="card-text">
//                         <small>Last updated 3 mins ago</small>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;
