import * as React from 'react'
import { GridListTile } from '@material-ui/core'
import logoQuestionMark from "../../assets/question-mark.png"
import checkMark from "../../assets/checkmark.png"
interface SquareLogoProps {
  tiles?: any
}
let count = 0
let flippedCards: string[] = []
const RESET = logoQuestionMark
let resetTile: string | undefined = undefined
export default function SquareLogo(props: SquareLogoProps) {

  const [isFlipped, setFlip] = React.useState(false);
  // const [numberFlippedCard, setNumberFlippedCard] = React.useState([])

  const handleMouseClick = () => {
    flippedCards.push(props.tiles)
    console.log("flippedCards: ", flippedCards)
    if (!isFlipped) {
      count++
      if (count == 2 && flippedCards[0] === flippedCards[1]) {
        console.log("if same");
        // resetTile = RESET
        count = 0
        flippedCards = []
      } else if ((count == 2 && flippedCards[0] !== flippedCards[1])) {
        console.log("else if not same");
        // resetTile = RESET
        count = 0
        flippedCards = []

      }
    }
    setFlip(!isFlipped)
  }

  const id = Math.floor(Math.random() + Math.random())

  return (
    <GridListTile
      key={id}
      cols={0.8}
      onClick={handleMouseClick}
      style={{
        height: 170,
        margin: 20,
        border: "1px solid black",
        padding: 20,
        backgroundColor: "#fff"
      }}
    >
      <img
        key={id}
        src={isFlipped ? resetTile || props.tiles : logoQuestionMark}
        alt="LOGO"
        style={{ height: 115, width: 115 }}
      />

    </GridListTile>
  )
}