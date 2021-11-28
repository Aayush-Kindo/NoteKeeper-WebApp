import React, { Component } from 'react'
import './Styles.css'
import Header from './Components/Header'
// import Left from './Components/Left'
import Right from './Components/Right'

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }

    render(){

        return (
            <div>
                {/* header */}
                    <Header/>
                {/* end of header */}
                <div className="content">
                    {/* left content */}
                        {/* <Left/> */}
                    {/* right content i.e notes */}
                        <Right/>
                </div>
                {/* end of content */}
            </div>
        )

    }
}

export default App