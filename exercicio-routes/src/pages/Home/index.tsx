import Avatar from '../../components/Avatar'
import { Helmet } from "react-helmet"
import Links from "../../components/Links"

const Home = () => {
    return (
        
        <section className="container">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="conteudo">
                <Avatar />
                <div>
                    <h1>Olá,</h1>
                    <h2>sobre mim:</h2>
                    <ul className="conteudo-links">
                        <li>
                            <Links to="/curriculo" color="red">Curriculo</Links>
                        </li>
                        <li>
                            <Links to="/portifolio" color="green">Portfolio</Links>
                        </li>
                        <li>
                            <Links to="/contatos" color="yellow">Contatos</Links>
                        </li>
                    </ul>
                    <p>
                        Sou psicóloga por formação e aspirante a desenvolvedora front-end (HTML, CSS, JAVASCRIPT, REACT).
                        Me reinventar, buscando sempre adquirir novos conhecimentos e estar sempre em movimento é o que eu venho buscando para crescer como pessoa e profissionalmente.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home