function Tecnologies() {
    
    return (
    <section className="d-flex flex-column mx-auto gap-5 w-100 overflow-hidden m-0 p-0 d-flex justify-content-center align-items-center text-bg-dark" id="tecnologies">

        <div className="container d-flex ga-5 flex-column" style={{maxHeight: "calc(100vh - 56px)"}}>


            <header className="my-5 text-center" style={{height: "fit-content"}}>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
                    </li>
                </ul>
            </header>
            <div className="tab-content flex-grow-1 flex-shrink-1 my-5 h-100 w-100" id="myTabContent">
                <div className="tab-pane fade show active w-100 h-100" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                    <div id="tecnologiesCarousel" className="carousel slide w-100 mx-auto d-flex overflow-hidden" >
                        <div className="carousel-inner my-5 overflow-hidden" >
                            <div className="carousel-item  active text-center " >
                                <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
                                    <div className=" rounded-circle text-bg-yellow overflow-hidden border-yellow border border-5 border-light" style={{height: "200px", width: "200px"}}>
                                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" className="object-fit-cover w-100 h-100" alt="..."/>

                                    </div>
                                    <article>
                                        <h3>React</h3>
                                        <p>Ideal para projetos que não precisem de SEO, e que precisem de escalar de forma mediana</p>
                                    </article>
                                </div>
                            </div>
                            <div className="carousel-item   text-center " >
                                <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
                                    <div className=" rounded-circle text-bg-yellow overflow-hidden border-yellow border border-5 border-light" style={{height: "200px", width: "200px"}}>
                                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" className="object-fit-cover w-100 h-100" alt="..."/>

                                    </div>
                                    <article>
                                        <h3>React</h3>
                                        <p>Ideal para projetos que não precisem de SEO, e que precisem de escalar de forma mediana</p>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev my-auto " style={{height: 'fit-content', width: 'fit-content'}} type="button" data-bs-target="#tecnologiesCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next my-auto " style={{height: 'fit-content', width: 'fit-content'}} type="button" data-bs-target="#tecnologiesCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>  
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                    <div id="tecnologiesCarousel" className="carousel slide w-100 mx-auto d-flex overflow-hidden" >
                        <div className="carousel-inner my-5 overflow-hidden" >
                            <div className="carousel-item  active text-center " >
                                <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
                                    <div className=" rounded-circle text-bg-yellow overflow-hidden border-yellow border border-5 border-light" style={{height: "200px", width: "200px"}}>
                                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" className="object-fit-cover w-100 h-100" alt="..."/>

                                    </div>
                                    <article>
                                        <h3>Next</h3>
                                        <p>Ideal para projetos que não precisem de SEO, e que precisem de escalar de forma mediana</p>
                                    </article>
                                </div>
                            </div>
                            <div className="carousel-item   text-center " >
                                <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
                                    <div className=" rounded-circle text-bg-yellow overflow-hidden border-yellow border border-5 border-light" style={{height: "200px", width: "200px"}}>
                                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" className="object-fit-cover w-100 h-100" alt="..."/>

                                    </div>
                                    <article>
                                        <h3>React</h3>
                                        <p>Ideal para projetos que não precisem de SEO, e que precisem de escalar de forma mediana</p>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev my-auto " style={{height: 'fit-content', width: 'fit-content'}} type="button" data-bs-target="#tecnologiesCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next my-auto " style={{height: 'fit-content', width: 'fit-content'}} type="button" data-bs-target="#tecnologiesCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>  
                </div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                    
                </div>
                <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={0}>
                    
                </div>
            </div>
            
        
            <footer className="h4 my-5 text-center d-flex ga-3 flex-column">
                <span className=" font-weight-normal" style={{color: '#cccccc'}}>Existem projetos no meu <a> github </a> com todas as tecnologias!</span>

            </footer>
        </div>
    </section>

    )
  }
  
  export default Tecnologies
  