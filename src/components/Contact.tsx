import emailjs from '@emailjs/browser'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import FlashMessage from './shared/FlashMessage';

function Contact() {
    const [isResponse, setIsResponse] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] =  useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    interface emailForm{
        message: string,
        email: string,
        name: string
    }

    const { register, handleSubmit, formState: { errors } } = useForm<emailForm>();

    const sendEmail = async (data: emailForm) => {
        setIsLoading(true)

        // I want to keep it simple so I won't add email validation outside of the browser's default one. I'll only check for empty fields.
        if(!data.email || !data.message || !data.name) {
            setIsResponse(false)
            setIsLoading(false)
            setIsSuccess(false)
            setIsResponse(true)
            return
        }

        //it would be fine to define a function for boileirPlate state handling.
        emailjs.send(process.env.REACT_APP_SERVICE_ID || '', process.env.REACT_APP_TEMPLATE_ID || '', {
            from_name: data.name,
            message: data.message,
            email: data.email,
        }, process.env.REACT_APP_CLIENT_ID || '').then(() => { 
            setIsResponse(true)
            setIsSuccess(true)
            setIsLoading(false)
        }).catch(() => {
            setIsResponse(true)
            setIsSuccess(false)
            setIsLoading(false)

        })
    }
    return (
    <section className="text-bg-primary" style={{height: 'fit-content'}} id="contact">
        <div className="container h-100   d-flex flex-column gap-3 justify-content-center align-items-center">
            <header className="mt-3">
                <h2>Entre em contato!</h2>

            </header>
            <form onSubmit={handleSubmit(sendEmail)} className="d-flex flex-column align-items-center flex-shrink-1 justify-content-center gap-3  w-100 overflow-hidden">
                <div className="form-group w-75">
                    {errors.name && <span>{errors.name.message}</span>}
                    <label htmlFor="exampleFormControlInput1">seu nome</label>
                    <input type="text" className="form-control w-100" {...register("name")}  id="name" placeholder="ex: OSVALDO" />
                </div>
                <div className="form-group w-75">
                    {errors.email && <span>{errors.email.message}</span>}
                    <label htmlFor="exampleFormControlInput1">Seu endereço de email</label>
                    <input type="email" className="form-control w-100" {...register("email", {required: true})}  id="email" placeholder="name@example.com" />
                </div>
                <div className="form-group w-75">
                    {errors.message && <span>{errors.message.message}</span>}
                    <label htmlFor="exampleFormControlTextarea1" >Digite sua mensagem</label>
                    <textarea className="form-control" placeholder='Mensagem sobre: ' {...register("message", {required: true})} id="message" rows={3}></textarea>
                </div>

                <button type="submit" disabled={isLoading} className="btn btn-secondary w-75 py-2">Enviar</button>
            </form>
            <footer>
                <p className="text-center">Você enviará um email para: lucasdev2124@gmail.com ao clicar em enviar</p>
            </footer>
        </div>
        {isResponse && <FlashMessage setIsResponse={setIsResponse} message={isSuccess ? "Mensagem enviada com sucesso" : "houve um erro no envio da mensagem"} isSuccess={isSuccess}/>}
    </section>

    )
  }
  
  export default Contact
  