import "./Form.css"



function Formulário() {
    return (
        <>
        <div className="form">

        <input type="text" name="nome" placeholder="Seu nome"/>
        <input type="email" name="nome" placeholder="Seu email"/>
        <textarea placeholder="Sua mensagem"/>
        <input type="submit" value="Enviar"/>
        
        </div>
        </>
    )
}

export default Formulário;