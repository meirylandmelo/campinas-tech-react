import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Products"

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/produtos" exact component={Products} />
        </Switch>
    )
}

export default Routes