import UserProvider from "./Practice_set11/Context/UserContext"
import UserProfile  from "./Practice_set11/Componets/UserProfile"

function App() {
  return (
    <div className="App">
      <UserProvider>
        <UserProfile/>
      </UserProvider>
    </div>
  );
}

export default App;
