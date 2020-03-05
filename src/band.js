import data from './metal.js'
import React from 'react';
import Band from './display'

function Content() {
    let count = 0
    const band = data.map((band, i) => {
        count += 1
        return (
        <Band
            key={`${band.ID}`} 
            name={band.band_name} 
            fans = {band.fans}
            formed = {band.formed}
            origin = {band.origin}
        />
        )
      })

    return (
        <div>
            <p>{count} bands</p>
            {band}
        </div>
    )
   }

export default Content;
