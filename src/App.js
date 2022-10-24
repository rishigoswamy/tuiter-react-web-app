import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./components/tuiter";
import ExploreScreen from "./components/tuiter/explore-screen/explore-screen";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index path=""
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter"
                           element={<Tuiter/>}/>
                    <Route path="/tuiter/explore"
                           exact={true}
                           element={<ExploreScreen/>}/>
                </Routes>
            </div>

        </BrowserRouter>
    );
}
export default App;



