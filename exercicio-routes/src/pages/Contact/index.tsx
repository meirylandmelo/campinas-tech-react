import { Helmet } from "react-helmet"

const Contact = () => {
    return (
        <div className="contato">
            <Helmet>
                <title>Contato</title>
            </Helmet>
            <h2>Contatos</h2>
            <p>meirylandmelo@gmail.com</p>
            <p>(19) 9 99608411</p>
            <a href="https://www.linkedin.com/in/meiryland/">Linkedin</a><br/>
            <a href="https://github.com/meirylandmelo">GitHub</a>
        </div>
    )
}

export default Contact