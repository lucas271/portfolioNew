import {scrollToSection} from "../../utils/scrollAnchor"

function Presentation() {

    return (
    <section className="d-flex flex-column container mx-auto py-3" id="presentation" style={{minHeight: "calc(100vh - 56px)", height: 'fit-content', marginTop: '56px', maxHeight: "120vh"}}>

        <header className="text-center my-2">
            <h2 className="h1">Quem sou eu?</h2>
        </header>
        <div className="flex-grow-1  flex-shrink-1 flex-column flex-sm-row justify-content-center justify-content-sm-around d-flex gap-5 align-items-center" >
            <div className=" rounded-circle text-bg-yellow overflow-hidden border-yellow border border-5 border-light" style={{height: "225px", width: "225px"}}>
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" className="object-fit-cover w-100 h-100" alt="..."/>

            </div>


            <article className="text-center flex-shrink-1 w-75 ">
                <h3>Oi, Eu sou o Lucas</h3> 
                <p>Possuo inglês avançado e estou cursando o quarto período da faculdade de Ciencia da computação.<br/> Estou também na busca do primeiro emprego na área.</p>           

            </article>
        </div>
        <footer className="mx-auto" style={{width: 'fit-content'}}>
            <span className="d-flex mb-3 align-items-center justify-content-center gap-3">
                {[0, 0, 0].map((_value, index) => {
                    return <span key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                        </svg>
                    </span>
                })}
            </span>
            <div className="my-2 btn-group flex-wrap d-flex gap-2 display-1 border border-white py-4 px-3 rounded-5 border-4" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary p-3" onClick={() => scrollToSection('tecnologies')}>Tecnologias</button>
                <button type="button" className="btn btn-secondary" onClick={() => scrollToSection('projects')}>Projetos</button>
                <button type="button" className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Entrar em contato</button>
            </div>
        </footer>
    </section>

    )
  }
  
  export default Presentation
  