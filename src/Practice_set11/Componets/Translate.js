import { useContext } from "react"
import {LanguageContext} from "../Context/LanguageContext"

const Translate = () => {
  const {translations} = useContext(LanguageContext)

    return(
        <div>
         <h2>Translate</h2>
         <br/>
         <p>{ translations?.en?.hello}</p>
         <p>{translations?.en?.goodbye}</p>
         <hr/>
         <p>{ translations?.es?.hello}</p>
         <p>{translations?.es?.goodbye}</p>

        </div>
    )
}

export default Translate