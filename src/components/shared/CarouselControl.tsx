function CarouselControl({target} : {target: string}) {

    return <>
        <button className="carousel-control-prev my-auto " style={{height: 'fit-content', width: 'fit-content'}} type="button" data-bs-target={target} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next my-auto " style={{height: 'fit-content', width: 'fit-content'}} type="button" data-bs-target={target} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </>
  }
  
  export default CarouselControl
  