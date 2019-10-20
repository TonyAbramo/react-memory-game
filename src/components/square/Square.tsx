import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import logoQuestionMark from "../../assets/question-mark.png"

interface SquareProps {
  id?: any,
  label?: string,
  frontImg?: any;
  backImg?: any,
  flipped?: boolean,
  onClick?: any
}

export default function Square(props: SquareProps) {

  const [isFlipped, setFlip] = React.useState(false);
  const handleMouseClick = () => {
    setFlip(!isFlipped)
  }
  return <>
    <h2>{props.label}</h2>
    <Card
      style={{ width: 200, height: 200 }}
      raised={true}
      onClick={handleMouseClick}
    >
      <CardMedia
        style={{ width: 150, height: 150, margin: 20 }}
        image={isFlipped ? props.frontImg : logoQuestionMark}
        title="Contemplative Reptile"
      />
    </Card>
  </>
}

  // return <div>
  //   {
  //     tab.map((img, index) =>

  //       <Square
  //         key={`${id}-${index}`}
  //         frontImg={img}
  //       />
  //     )
  //   }
  // </div>
