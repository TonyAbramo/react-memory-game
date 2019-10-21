import * as React from 'react'
import { GridListTile } from '@material-ui/core'
import logoQuestionMark from "../../assets/question-mark.png"
import checkMark from "../../assets/checkmark.png"

interface SquareLogoProps {
  tiles?: any,
  onClick?: any
}
let count: number = 0
let flippedCards: string[] = []

export default function SquareLogo(props: SquareLogoProps) {

  const [isFlipped, setFlipped] = React.useState(false);

  const handleMouseClick = () => {
    flippedCards.push(props.tiles)
    if (!isFlipped) {
      count++
      if (count == 2 && flippedCards[0] === flippedCards[1]) {
        console.log("same");
        count = 0
        flippedCards = []
      } else if ((count == 2 && flippedCards[0] !== flippedCards[1])) {
        console.log("not the same");
        count = 0
        flippedCards = []
      }
    }
    setFlipped(!isFlipped)
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
        src={isFlipped ? props.tiles : logoQuestionMark}
        alt="LOGO"
        style={{ height: 115, width: 115 }}
      />

    </GridListTile>
  )
}