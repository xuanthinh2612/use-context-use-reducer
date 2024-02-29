import {ThemeContext} from "./ThemeContext"
import { useContext } from "react"

function Paragrah() {
const obContext = useContext(ThemeContext)

    return(
        <p className={obContext.theme}>
            Context provides a way to pass data through the component tree without having to pass props down manually at every level.
        </p>
    )
}

export default Paragrah