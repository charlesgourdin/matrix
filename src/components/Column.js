import React, { Component } from 'react';
import Cell from './Cell'

class Column extends Component {
    constructor(props) {
        super(props)
        this.time = Math.floor(Math.random() * (1000 - 500 + 1)) + 500
        this.colorIndex2 = -1
        this.state = {
            tab: [],
            colorIndex: 0
        }
    }

    matrix = () => {

        let randomNumber = Math.floor(Math.random() * 5)

        let newTab = this.state.tab

        if (randomNumber === 1 && this.colorIndex2 === -1 && this.state.colorIndex-this.colorIndex2 >15) {
            this.colorIndex2 += 1
            newTab[this.colorIndex2] = <Cell
                character={String.fromCharCode(Math.floor(Math.random() * 400))}
                color={'chartreuse'}
                opacity={1}
            />
        }

        if (this.colorIndex2 > -1) {
            newTab[this.colorIndex2] = <Cell
                character={String.fromCharCode(Math.floor(Math.random() * 400))}
                color={'darkGreen'}
                opacity={0.5}
            />
            newTab[this.colorIndex2+1] = <Cell
                character={String.fromCharCode(Math.floor(Math.random() * 400))}
                color={'chartreuse'}
                opacity={1}
            />

            this.colorIndex2 += 1

            console.log(this.colorIndex2)

            if (this.colorIndex2 === 30) this.colorIndex2 = -1
        }



        newTab[this.state.colorIndex] = <Cell
            character={String.fromCharCode(Math.floor(Math.random() * 400))}
            color={'darkGreen'}
            opacity={0.5}
        />

        this.setState({
            tab: [...newTab, <Cell
                character={String.fromCharCode(Math.floor(Math.random() * 400))}
                color={'chartreuse'}
                opacity={1}
            />],
            colorIndex: this.state.tab.length
        })

        setTimeout(this.matrix, this.time)
    }

    componentDidMount() {
        this.matrix()
    }


    render() {
        return (
            <div>
                {
                    this.state.tab.map((cell, i) => {
                        return (
                            <div key={i}>
                                {cell}
                            </div>
                        )
                    })
                }
            </div >
        )
    }
}

export default Column