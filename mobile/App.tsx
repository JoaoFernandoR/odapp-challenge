import { PacientsProvider } from "./src/context/pacientsContext/pacientsContext";
// Components
import Main from "./src/components/Main";

export default function App() {
    return (
        <PacientsProvider>
            <Main />
        </PacientsProvider>
    );
}
