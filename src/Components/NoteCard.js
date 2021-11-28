import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { TiDelete } from 'react-icons/ti'
import '../Styles.css'

class NoteCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            // visibility: ''
        }
    }

    clicked=()=>{ 
        // this.setState({visibility:'hidden'})
        this.props.editHandler(this.props.title,this.props.note,this.props.id)
    }

    render() {

        return (
            // style={{visibility:`${this.state.visibility}`}}
            <Card>
                {/* delete */}
                <div className="delete" onClick={()=>{this.props.deleteHandler(this.props.id)}}>
                        <TiDelete className="menu" />
                    </div>
                {/* end of delete */}
                <Card.Body onClick={this.clicked}>                   
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.note}
                    </Card.Text>
                </Card.Body>
            </Card>         
        )

    }
}


export default NoteCard