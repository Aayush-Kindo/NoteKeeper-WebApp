import Button from '@restart/ui/esm/Button'
import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { BsPlus } from 'react-icons/bs'
import axios from 'axios'

class Note extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title:'',
            note:''
        }
    }

    changeHandler = (e) =>{
        this.setState({ [e.target.name]:e.target.value })
    }

    submitHandler = async(e) =>{
        e.preventDefault()
        await axios.post('/api/notes/add', this.state)
        this.setState({title:'',note:''})
        this.props.isUpdatedHandler()
        // this.props.isClickedOutHandler()
        // alert('title: '+ this.state.title + ', note: ' + this.state.note)
    }

    render() {
        return (
            <div className='w-100 p-3 text-center'>
                <div className="input" style={{ width: '50%', marginLeft: '20%' }}>
                    <form onSubmit={this.submitHandler}>
                        <InputGroup className="">
                            <FormControl
                                className="noteInput p-2"
                                placeholder="Title"
                                aria-label="Title"
                                aria-describedby="title"
                                name="title"                                
                                value={this.state.title}
                                onChange={this.changeHandler}
                                required={true}
                            />
                        </InputGroup>
                        <InputGroup className="">
                            <FormControl
                                className="noteInput p-2 border-white"
                                placeholder="Take a note.."
                                autoFocus={true}
                                aria-label="note"
                                aria-describedby="note"
                                name="note"
                                value={this.state.note}
                                onChange={this.changeHandler}
                                required={true}
                            />
                        </InputGroup>
                        <div className="text-center">
                            <Button id="submit" type="submit" className="m-0 p-0" style={{display:'inline-block'}}>
                                <BsPlus className="menu m-0 p-0" />
                            </Button>                            
                            &nbsp;    &nbsp;  &nbsp;  &nbsp;  &nbsp;
                            <div className="btn btn-danger" onClick={() => { this.props.isClickedOutHandler() }}>Close</div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default Note