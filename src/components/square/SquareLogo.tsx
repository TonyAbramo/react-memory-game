import * as React from 'react'
import { GridListTile } from '@material-ui/core'
import logoQuestionMark from "../../assets/question-mark.png"

interface SquareLogoProps {
  tiles?: any
}

export default function SquareLogo(props: SquareLogoProps) {

  const [isFlipped, setFlip] = React.useState(false);
  const handleMouseClick = () => {
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
        src={isFlipped ? props.tiles : logoQuestionMark}
        alt="LOGO"
        style={{ height: 115, width: 115 }}
      />

    </GridListTile>
  )
}