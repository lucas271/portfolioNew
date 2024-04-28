import stylesArray from "../utils/arrays/stylesArray"
import frontendArray from "../utils/arrays/frontendArray"
import pLanguagesArray from "../utils/arrays/pLanguagesArray"
import backendArray from "../utils/arrays/backendArray"
import CarouselControl from "./shared/CarouselControl"
import CarouselItem from "./shared/CarouselItem"
  


function Tecnologies() {
    
    return (
    <section className="d-flex flex-column mx-auto gap-5 w-100 overflow-hidden m-0 p-0 d-flex justify-content-center align-items-center text-bg-dark" id="tecnologies">

        <div className="container d-flex ga-5 flex-column" style={{maxHeight: "calc(100vh - 56px)"}}>


            <header className="my-5 text-center" style={{height: "fit-content"}}>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="language-tab" data-bs-toggle="tab" data-bs-target="#language-tab-pane" type="button" role="tab" aria-controls="language-tab-pane" aria-selected="true">Linguagens</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="frontend-tab" data-bs-toggle="tab" data-bs-target="#frontend-tab-pane" type="button" role="tab" aria-controls="frontend-tab-pane" aria-selected="false">FrontEnd</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="backend-tab" data-bs-toggle="tab" data-bs-target="#backend-tab-pane" type="button" role="tab" aria-controls="backend-tab-pane" aria-selected="false">BackEnd</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="style-tab" data-bs-toggle="tab" data-bs-target="#style-tab-pane" type="button" role="tab" aria-controls="style-tab-pane" aria-selected="false">Style</button>
                    </li>
                </ul>
            </header>
            <div className="tab-content flex-grow-1 flex-shrink-1 my-5 h-100 w-100" id="myTabContent">
                <div className="tab-pane fade show active w-100 h-100" id="language-tab-pane" role="tabpanel" aria-labelledby="language-tab" tabIndex={0}>
                    <div id="languages" className="carousel slide w-100 mx-auto d-flex overflow-hidden" >
                        <div className="carousel-indicators">
                            {pLanguagesArray.map((_item, index) => {
                                return <button type="button" data-bs-target="#languages" data-bs-slide-to={index} className={index === 0 ? "active" : ''} aria-current={index === 0 && true} aria-label={"Slide " + index + 1} />
                            })}
                        </div>
                        <div className="carousel-inner my-5 overflow-hidden" >
                            {pLanguagesArray.map((item, index) => {
                                return <CarouselItem title={item.name} img={item.img} key={index} isActive={index === 0}/>
                            })}
                        </div>
                        <CarouselControl target="#languages"/>
                    </div>  
                </div>
                <div className="tab-pane fade" id="frontend-tab-pane" role="tabpanel" aria-labelledby="frontend-tab" tabIndex={0}>
                    <div id="frontendCarousel" className="carousel slide w-100 mx-auto d-flex overflow-hidden" >
                        <div className="carousel-indicators">
                            {frontendArray.map((_item, index) => {
                                return <button type="button" data-bs-target="#frontendCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ''} aria-current={index === 0 && true} aria-label={"Slide " + index + 1} />
                            })}
                        </div>
                        <div className="carousel-inner my-5 overflow-hidden" >
                            {frontendArray.map((item, index) => {
                                return <CarouselItem title={item.name} img={item.img} key={index} isActive={index === 0}/>
                            })}
                        </div>
                        <CarouselControl target="#frontendCarousel"/>
                    </div>  
                </div>
                <div className="tab-pane fade" id="backend-tab-pane" role="tabpanel" aria-labelledby="backend-tab" tabIndex={0}>
                    <div id="backendCarousel" className="carousel slide w-100 mx-auto d-flex overflow-hidden" >
                        <div className="carousel-indicators">
                            {backendArray.map((_item, index) => {
                                return <button type="button" data-bs-target="#backendCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ''} aria-current={index === 0 && true} aria-label={"Slide " + index + 1} />
                            })}
                        </div>
                        <div className="carousel-inner my-5 overflow-hidden" >
                            {backendArray.map((item, index) => {
                                return <CarouselItem title={item.name} img={item.img} key={index} isActive={index === 0}/>
                            })}
                        </div>
                        <CarouselControl target="#backendCarousel"/>
                    </div>  
                </div>
                <div className="tab-pane fade" id="style-tab-pane" role="tabpanel" aria-labelledby="style-tab" tabIndex={0}>
                    <div id="styleCarousel" className="carousel slide w-100 mx-auto d-flex overflow-hidden" >
                        <div className="carousel-indicators">
                            {stylesArray.map((_item, index) => {
                                return <button type="button" data-bs-target="#styleCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ''} aria-current={index === 0 && true} aria-label={"Slide " + index + 1} />
                            })}
                        </div>
                        <div className="carousel-inner my-5 overflow-hidden" >
                            {stylesArray.map((item, index) => {
                                return <CarouselItem title={item.name} img={item.img} key={index} isActive={index === 0}/>
                            })}
                        </div>
                        <CarouselControl target="#styleCarousel"/>
                    </div>  
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
  