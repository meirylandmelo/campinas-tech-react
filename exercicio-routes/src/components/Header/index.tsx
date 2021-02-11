import { NavLink } from "react-router-dom"


const Hearder = () => {
    return (
        <header>
            <div className="menu container">
                <div className="menu-logo">
                    <h3>Meiryland Melo</h3>
                    <p>Frontend Developer, Campinas/SP</p>
                </div>
                <nav className= "d-flex justify-content-center">
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/" exact>Home</NavLink> 
                        </li>
                        <li>
                             <NavLink to="/portfolio" exact >Portfolio</NavLink> 
                        </li>
                        <li>
                             <NavLink to="/contato" exact>Contato</NavLink> 
                        </li>
                    </ul>
                </nav>
            </div>
            
        </header>
    )
}

export default Hearder