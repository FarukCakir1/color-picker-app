import React, { useState } from 'react'
// Components
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import Footer from './Footer'
// Style
import { withStyles } from '@mui/styles'
import styles from "../styles/PaletteStyles"
// Packages
import { useParams } from "react-router-dom"
// Helpers"
// import seedColors from '../seedColors'
import { createPalette } from "../Helpers/ShadeGenerator";




function Palette({classes, palettes}) {
    const {Palette, boxes} = classes
    const { id } = useParams()
    // const [palettes, setPalettes] = useState(seedColors)
    const palette = createPalette(palettes.find(palette => palette.id === id))
    const [tone, setTone] = useState("normal")
    const [mode, setMode] = useState("rgb")
    const ColorBoxes = palette.colors[tone].map(color => 
      (<ColorBox 
        key={color.name} 
        colorValue={mode === "hex" ? color.hex : color.rgb} 
        name={color.name}
        moreURL={`/palette/${id}/${color.id}`}
        displayMore={true}
      />))
  return (
    <div className={Palette}>
        <NavBar paletteName={palette.paletteName} emoji={palette.emoji} setTone={setTone} setMode={setMode} mode={mode} tone={tone} displayTone={true}/>
        <div className={boxes}>{ColorBoxes}</div>
        <Footer palette={palette} />
    </div>
  )
}

export default withStyles(styles) (Palette)