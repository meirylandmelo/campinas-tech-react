import { Route, Switch } from "react-router-dom"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contato" exact component={Contact} />
        </Switch>
    )
}

export default Routes