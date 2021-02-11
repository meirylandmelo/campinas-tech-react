import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Produto from "./components/Produto"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/produto/:id" exact component={Produto} />

        </Switch>
    )

}

export default Routes