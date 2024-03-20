import UserProvider from "./Practice_set11/Context/UserContext"
import LanguageProvider from "./Practice_set11/Context/LanguageContext"
import Translate from "./Practice_set11/Componets/Translate";
import UserProfile  from "./Practice_set11/Componets/UserProfile"
import ThemeProvider from "./Practice_set11/Context/ThemeContext ";
import ThemeSwitcher from "./Practice_set11/Componets/ThemeSwitcher";
import CartProvider from "./Practice_set11/Context/CartTotalContext";
import CartSummary from "./Practice_set11/Componets/CartSummary";
import Tab from "./Practice_set4/Tab";
import Welcome from "./Practice_set4/Welcome";
import Basket from "./Practice_set4/Basket";
import Todo from "./Practice_set4/Todo";
import TodoItems from "./Practice_set4/TodoItems";


const todoItems = [
  {id: 1, task: "Writing 1-page poem", isDone: true},
  {id: 2, task: "Gym", isDone: false},
  {id: 3, task: "Shopping", isDone: false},
  {id: 4, task: "Standup call", isDone: true},
]

function App() {
  return (
    <div className="App">
      {/* Question 1 */}
      {/* <UserProvider>
        <UserProfile/>
      </UserProvider> */}
      {/* Question 2  */} 

       {/*<LanguageProvider>
        <Translate/>
      </LanguageProvider> */}

      {/* Ques3 */}
      {/* <ThemeProvider>
        <ThemeSwitcher/>
        </ThemeProvider> */}
     {/* Ques3 */}

      {/* Ques 4 */}
      
        {/* <CartProvider>
          <CartSummary/>
        </CartProvider> */}

      {/* Ques 4 */}



      {/* Set 4 start */}
            {/* <Tab/> */}
            {/* <Welcome/> */}
            {/* <Basket/> */}
            {/* <Todo todoItems = {todoItems}/> */}
            <TodoItems todoItems = {todoItems}/>
      {/* Set 4 start */}
    </div>
  );
}

export default App;
