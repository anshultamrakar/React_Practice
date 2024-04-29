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
import MyBook from "./Practice_set4/MyBook";
import Game from "./Practice_set4/Game";
import CartoonCharacter from "./Practice_set3/CartoonCharacter";
import CartoonCharacter2 from "./Practice_set3/CartoonCharacter2";
import CartoonCharacter3 from "./Practice_set3/CartoonCharacter3";
import ImageComponent from "./Practice_set3/ImageComponent ";
import Vegetables from "./Practice_set3/Vegetables";
import Bouquet from "./Practice_set3/Bouquet";
import Bouquet2 from "./Practice_set3/Bouquet2";
import DonationAmount from "./Practice_set3/DonationAmount";
import StudentDataComponent from "./Practice_set3/StudentDataComponent";
import CarList from "./Practice_set3/CarList";
import OnlineUsers from "./Practice_set5/OnlineUsers";
import Products from "./Practice_set5/Products";
import UserProfile2 from "./Practice_set5/UserProfile";
import ChatData from "./Practice_set5/ChatData";
import Comments from "./Practice_set5/Comments";
import TrekkingBag from "./Practice_set6/TrekkingBag";
import TodoList from "./Practice_set6/TodoList";
import HabitTracker from "./Practice_set6/HabitTracker";
import SocialMedia from "./Practice_set6/SocialMedia";
import VideoLibrary from "./Practice_set6/VideoLibrary";
import HabbitTracker2 from "./Practice_set6/HabbitTracker2";
import Projects from "./Practice_set6/Projects";
import WheatherData from "./Practice_set7/WheatherData";
import UserData from "./Practice_set7/UserData";


const todoItems = [
  {id: 1, task: "Writing 1-page poem", isDone: false},
  {id: 2, task: "Gym", isDone: false},
  {id: 3, task: "Shopping", isDone: false},
  {id: 4, task: "Standup call", isDone: false},
]

const cartoons = [
  {
      id: 1,
      name: 'Mickey Mouse',
      superpower: 'Invisibility',
      magnitude: 1
    },
    {
      id: 2,
      name: 'Spongebob Squarepants',
      superpower: 'Super Strength',
      magnitude: 3
    },
    {
      id: 3,
      name: 'Bugs Bunny',
      superpower: 'Teleportation',
      magnitude: 9
    },
    {
      id: 4,
      name: 'Tom and Jerry',
      superpower: 'Intelligence',
      magnitude: 8
    },
    {
      id: 5,
      name: 'The Powerpuff Girls',
      superpower: 'Flight',
      magnitude: 10
    }
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


        {/* Set 3 start */}
         {/* <CartoonCharacter/> */}
         {/* <CartoonCharacter2 cartoons = {cartoons} /> */}
          {/* <CartoonCharacter3 cartoons = {cartoons} /> */}
          {/* <ImageComponent width = {"95px"}  height = {"60px"} image = {"https://picsum.photos/200"}/> */}
          {/* <Vegetables/> */}
          {/* <Bouquet/> */}
          {/* <Bouquet2/> */}
           {/* <DonationAmount/>  */}
          {/* <CarList/> */}
          {/* <StudentDataComponent/> */}
        {/* Set 3 end */}


      {/* Set 4 start */}
            {/* <Tab/> */}
            {/* <Welcome/> */}
            {/* <Basket/> */}
            {/* <Todo todoItems = {todoItems}/> */}
            {/* <TodoItems todoItems = {todoItems}/> */}
            {/* <MyBook/> */}
            {/* <Game/> */}

      {/* Set 4 start */}
        {/* <OnlineUsers/> */}
        {/* <Products/> */}
        {/* <UserProfile2/> */}

       {/* set 5 start  */}
        {/* <OnlineUsers/> */}
        {/* <Products/> */}
         {/* <UserProfile2/>  */}
         {/* <UserFeed/> */}
         {/* <ChatData/> */}
         {/* <Comments/> */}
        {/* set 5 start  */}


      {/* Set  6 start  */}
        {/* <TrekkingBag/> */}
        {/* <TodoList/> */}
        {/* <HabitTracker/> */}
         {/* <VideoLibrary/>   */}
         {/* <SocialMedia/> */}
        {/* <SocialMedia/> */}
        {/* <HabbitTracker2/> */}
        {/* <Projects/> */}
      {/* Set  6 start  */}

      {/* Set 7 start */}
       
      {/* <WheatherData/> */}
      {/* <UserData/> */}
      {/* Set 7 ends */}

    
    </div>
  );
}

export default App;
