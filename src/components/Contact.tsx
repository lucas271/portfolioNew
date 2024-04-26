function Contact() {
    
    return (
    <section className="text-bg-primary" style={{height: 'calc(50vh)'}} id="contact">
        <div className="container h-100   d-flex flex-column gap-3 justify-content-center align-items-center">
            <header className="">
                <h2>Entre em contato!</h2>

            </header>
            <form className="d-flex flex-column align-items-center flex-shrink-1 justify-content-center gap-3  w-100 overflow-hidden">
                
                <div className="form-group w-75">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control w-100"  id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group w-75">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                </div>

                <button type="button" className="btn btn-secondary w-75 py-2">Enviar</button>
            </form>
            <footer>
                <p className="text-center">Você enviará um email para: lucasdev2124@gmail.com ao clicar em enviar</p>
            </footer>
        </div>

    </section>

    )
  }
  
  export default Contact
  