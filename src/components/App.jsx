import React, { Component } from 'react';
import Form from './Form';
import Chords from './Chords';
import Spinner from './Spinner';

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#' ];
const types = ['Major'];

class App extends Component {
  state = {
    scale: undefined,
    progression: undefined,
    spinner: false
  }

  getRandom = chords => {
    let progression = []
    for(let i=0; i<5; i++) {
      progression.push(chords[Math.floor((Math.random() * 7))])
    }
    this.setState({
      spinner: false,
      progression: progression
    })
  }

  getProgression = (e) => {
    e.preventDefault()
    this.setState({spinner: true})
    let firstIndex = notes.indexOf(e.target.elements.chordKey.value)
    let firstSlice = notes.slice(0, firstIndex)
    let finalSlice = notes.slice(firstIndex)
    let chromaticScale = finalSlice.concat(firstSlice)

    switch(e.target.elements.progressionType.value) {

      case 'Major':
        firstSlice = []
        finalSlice = []
        let finalScale = []
        for(let i = 0; i < chromaticScale.length; i++) {
          if(i <= 4 && i%2 === 0) {
            if(i===2 || i===4) {
              firstSlice.push(chromaticScale[i]+'m')  
            } else {
              firstSlice.push(chromaticScale[i])
            }
          }

          if(i > 4 && Math.abs(i % 2) === 1) {
            if(i===9) {
              firstSlice.push(chromaticScale[i]+'m')
            } else if(i===11) {
              finalSlice.push(chromaticScale[i]+'dim')  
            } else {
              finalSlice.push(chromaticScale[i])
            }
          }
        }
        finalScale = firstSlice.concat(finalSlice)
        this.setState({scale: finalScale}, () => {
          this.getRandom(this.state.scale)
        })
        
      break;

      default:
      break;

    }
  }

  render() {
    return (
      <div className="container center">
        <div className="row">
        <h1>Chord Progression Generator</h1>
        <Form
          notes = {notes}
          types = {types}
          getProgression = {this.getProgression}
        />
        {( this.state.spinner === true
        ? <Spinner/>
        : <Chords
          progression = {this.state.progression}
        />
        )}
        </div>
      </div>
    )
  }
};

export default App;