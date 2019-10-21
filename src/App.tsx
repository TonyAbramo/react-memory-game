import React from 'react';

import { GridList } from '@material-ui/core';
import SquareLogo from './components/square/SquareLogo'

import images from './components/images/images'

function shuffleArray(array: any) {
  let i = array.length - 1
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export default function App() {
  const shuffledTile = shuffleArray(images);
  return (
    <div style={{ margin: " 0 auto ", width: 800, backgroundColor: "#2C2F33" }}>
      <h1 style={{ marginLeft: 20, paddingTop: 20, color: "#fff" }}>Can you find them all ?</h1>
      <GridList cols={4}>
        {shuffledTile.map((image: any, index: any) => (
          <SquareLogo
            key={image.id}
            tiles={image.path}
          />
        ))}
      </GridList>
    </div>
  )
}
