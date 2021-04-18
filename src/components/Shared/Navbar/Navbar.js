import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light p-2">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Wedding Artista</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse bg-primary p-3" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link ms-5 active text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-white" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-white" href="#">Dental Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-white" href="#">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5  text-white" href="#">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-white" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;