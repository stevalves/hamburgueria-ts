import { UserProvider } from "./contexts/UserContexts";
import { RoutesList } from "./routes/RoutesList";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyles />
        <UserProvider>
          <RoutesList />
        </UserProvider>
      </>
    </div>
  );
}

export default App;
