import { Provider } from "./Hooks";
import { Router } from "./Routes/index.routes";
import { GlobalStyle } from "./Style/index";
function App() {
    return (
        <Provider>
            <GlobalStyle />
            <Router />
        </Provider>
    );
}

export default App;
