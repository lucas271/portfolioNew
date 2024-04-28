import { MouseEvent, useEffect } from "react";
import { scrollToSection } from "../../utils/scrollAnchor";

function Navbar() {


  
  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function(e: MouseEvent | any)/*i honestly don't know which type to pass here search later*/ {
        e.preventDefault();
        const sectionId = e.target?.getAttribute('href').substring(1);
        scrollToSection(sectionId);
      });
    });

    let options = {
      rootMargin: "0px",
      threshold: 0.685,
    }
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

          if (entry.isIntersecting) {
            document.querySelector(`#link_${entry.target.id}`)?.classList.add('line_bellow')

            const elementToEdit = document.querySelector(`#link_${entry.target.id}`)
            if(document.querySelectorAll('.line_bellow')?.length > 1) {
              document.querySelectorAll('.line_bellow').forEach(e => {
                e.classList.add('line_bellow_fade_out')
                e.classList.remove('line_bellow')
              })
            }
            elementToEdit?.classList.remove('line_bellow_fade_out')
            elementToEdit?.classList.add('line_bellow')
          }else{
            const elementToEdit = document.querySelector(`#link_${entry.target.id}`)
            elementToEdit?.classList.remove('line_bellow_fade_out')
            elementToEdit?.classList.add('line_bellow_fade_out')
          }
      });
  }, options);
    const tecnologies = document.querySelector("#tecnologies")
    const projects = document.querySelector("#projects")
    const presentation = document.querySelector("#presentation")
    const contact = document.querySelector("#contact")

    if(tecnologies) observer.observe(tecnologies)
    if(projects) observer.observe(projects)
    if(presentation) observer.observe(presentation)
    if(contact) observer.observe(contact)
  }, [])

  return (
    <>
      <nav className="navbar  fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="navbar-brand ">Lucas</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link`} aria-current="page" href="#presentation" id="link_presentation">Apresentação</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects" id="link_projects">Projetos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tecnologies" id="link_tecnologies">Tecnologias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" id="link_contact">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
