import { Switch, Route } from "react-router-dom"
import Private from "./pages/PrivatePage"

const Routes = () => {
    return(
        <Switch>
            <Route path="/private" exact component={Private}/>
        </Switch>
    )
}

export default Routes