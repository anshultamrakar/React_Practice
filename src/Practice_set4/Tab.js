import { useState } from "react"

const characters = {
    heroes: [
      {
        name: "IRON MAN",
        powers: "Genius,Rich,IRON Suit",
        costume: "IRON MAN suit",
      },
      {
        name: "ANT MAN",
        powers: "Ant man suit",
        costume: "Ant man suit",
      },
      {
        name: "Spider-man",
        powers: "Reflexes,Speed,Spider-Sense",
        costume: "Spider Suit",
      },
      {
        name: "Bat man",
        powers: "Rich,Bat suit",
        costume: "Bat Suit",
      },
      {
        name: "Super-man",
        powers: "Superhuman strength,Reflexes,Speed",
        costume: "Superman  Suit",
      },
    ],
    villains: [
      {
        name: "Thanos",
        powers: "Superhuman strength,Reflexes,Speed,",
        costume: "Metal armor",
      },
      {
        name: "Venom",
        powers: "shapeshifting and camouflage Symbiotes autonomous defense",
        costume: "black suit",
      },
      {
        name: "Kang the conqueror",
        powers: "time travel, can access all tech",
        costume: "kang armor",
      },
      {
        name: "Joker",
        powers: "clownlike appearance and sick humour",
        costume: "Joker costume",
      },
    ],
  };


const Tab = () => {
    const [currentTab , setCurrentTab] = useState("tab1")

    const showHeros = () => {
        setCurrentTab("tab1")
    }

    const showVillans = () => {
        setCurrentTab("tab2")
    }

    return(
        <div>
            <h2>My Tab</h2>
            <button onClick={showHeros}>Show Heros</button>
            <button onClick = {showVillans}>Show Villans</button>
            <br/>
            <hr/>
            {currentTab === "tab1" && (
                characters.heroes.map(hero => (
                    <div>
                        <h2>{hero.name}</h2>
                        <p>Powers : {hero.powers}</p>
                        <p>Custome : {hero.costume}</p>
                    </div>
                ))
            )}
            {currentTab === "tab2" && (
                 characters.villains.map(hero => (
                    <div>
                        <h2>{hero.name}</h2>
                        <p>Powers : {hero.powers}</p>
                        <p>Custome : {hero.costume}</p>
                    </div>
                ))
            )}

        </div>
    )
}

export default Tab