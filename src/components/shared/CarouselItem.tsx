function CarouselItem({title, text, img, isActive=false, key}: {title: string, text?: string, img: any, isActive?: boolean, key?: any}) {

    return <>
        <div className={"carousel-item  text-center " + (isActive ? 'active': '')} key={key}>
            <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
                <div className=" text-bg-yellow overflow-hidden  " style={{height: "200px", width: "200px"}}>
                    <img src={img} className="object-fit w-100 h-100" alt="..."/>

                </div>
                <article>
                    <h3>{title}</h3>
                    {text && <p>{text}</p>}
                </article>
            </div>
        </div>
    </>
  }
  
  export default CarouselItem
  