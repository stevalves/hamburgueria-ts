import { HambProvider } from "./contexts/HambContext";
import { UserProvider } from "./contexts/UserContexts";
import { RoutesList } from "./routes/RoutesList";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyles />
        <UserProvider>
          <HambProvider>
            <RoutesList />
          </HambProvider>
        </UserProvider>
      </>
    </div>
  );
}

export default App;
