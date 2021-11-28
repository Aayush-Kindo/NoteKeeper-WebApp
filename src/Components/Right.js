import React, { Component } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { IoIosCheckboxOutline } from 'react-icons/io'
import { BiPaint, BiImageAlt } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import axios from 'axios'
import '../Styles.css'
import Note from './Note'
import NoteCard from './NoteCard'

class Right extends Component {

    constructor(props) {
        super(props)

        this.state = {
            check: false,
            notes: [],
            updated: true,
            edit: false,
            // visibility:'visible',
            title: '',
            note: '',
            id:''
        }
    }

    async componentDidMount() {
        // const fetchedNotes = await axios.get('/notes')
        const fetchedNotes = await axios.get('/api/notes')
        console.log(fetchedNotes.data)
        this.setState({ notes: fetchedNotes.data })
    }

    isClickedHandler = () => {
        this.setState({ check: true })
    }

    isClickedOutHandler = async () => {
        this.setState({ check: false, edit: false, visibility: 'visible' })
        const fetchedNotes = await axios.get('/api/notes')
        this.setState({ notes: fetchedNotes.data, check: false })
    }

    // called when new note is added
    isUpdatedHandler = async () => {
        const fetchedNotes = await axios.get('/api/notes')
        this.setState({ notes: fetchedNotes.data, check: false })
    }

    deleteHandler = async (noteId) => {
        await axios.post(`/api/notes/delete/${noteId}`)
        const fetchedNotes = await axios.get('/api/notes')
        this.setState({ notes: fetchedNotes.data, check: false })
    }

    editHandler = async (fetchedTitle, fetchedNote, fetchedId) => {
        this.setState({ edit: true, title: fetchedTitle, note: fetchedNote, id: fetchedId})
        // document.body.style.backgroundColor = '#797a7c'
        // document.body.style.opacity = '0.4'
    }

    changeHandler = (e) =>{
        this.setState({ [e.target.name]:e.target.value })
        console.log(e.target.name + ': ' + e.target.value)
    }

    submitHandler = async (e) => {
        e.preventDefault()
        const data = {id:this.state.id,title:this.state.title,note:this.state.note}
        await axios.post('/api/notes/edit', data)
        this.isClickedOutHandler()
        // const fetchedNotes = await axios.get('/notes')
        // this.setState({ notes: fetchedNotes.data, check: false })
        // console.log(data);
        // console.log(this.state.title)
        // console.log(this.state.note)
        // this.setState({title:'',note:''})
        // this.props.isUpdatedHandler()
    }

    render() {

        let notesList = this.state.notes.map((data) => {
            return (
                <NoteCard
                    key={data._id}
                    id={data._id}
                    title={data.title}
                    note={data.note}
                    deleteHandler={this.deleteHandler}
                    editHandler={this.editHandler}
                />
            )
        })

        return (
            <div className="h-100 m-0 p-3 keep-scrolling" style={{ width: '100%', overflow: 'auto' }}>
                {/* to check for state updation  */}
                {/* input section */}
                {this.state.check === false ?
                    <div className='w-100 p-3 text-center'>
                        <InputGroup className="input" style={{ width: '50%', left: '25%' }}>
                            <FormControl
                                className="noteInput p-2"
                                name="abc"
                                // onClick={()=>{this.props.isClickedHandler()}}
                                onClick={this.isClickedHandler}
                                placeholder="Take a note.."
                                aria-label="Take a note.."
                                aria-describedby="note"
                            />
                            <div>
                                <IoIosCheckboxOutline className="menu" />
                            </div>
                            <div>
                                <BiPaint className="menu" />
                            </div>
                            <div id="note-input-right">
                                <BiImageAlt className="menu" />
                                {/* <img className="img-menu" src="https://cdn2.iconfinder.com/data/icons/generel-ui-set/48/list_view-128.png" alt="list style" /> */}
                            </div>
                            {/* <div id="note-input-right">@example.com</div> */}
                        </InputGroup>
                    </div>
                    : <Note
                        isClickedOutHandler={this.isClickedOutHandler}
                        isUpdatedHandler={this.isUpdatedHandler}
                    />
                }
                {/* end of input section */}

                {/* notes */}
                {notesList}

                {/* edit section */}
                {this.state.edit === true ?
                    <div className="outer h-100 w-100" style={{ position: 'absolute' }}>
                        <div className="edit">
                            {/* delete */}
                            <div className="bg-primary m-0 p-2 text-white" style={{ fontSize: '2rem' }}>
                                Edit Note
                                <MdClose className="delete"
                                    style={{ display: 'block', top: '5px', right: '5px' }}
                                    onClick={this.isClickedOutHandler}>
                                </MdClose>
                            </div>
                            {/* end of delete */}
                            <form onSubmit={this.submitHandler}>
                                <div className="w-100 h-auto p-3">
                                    {/* <Card.Title>{this.state.title}</Card.Title> */}
                                    <InputGroup className="">
                                        <FormControl
                                            name="title"
                                            className="m-0 p-0"
                                            value={this.state.title}
                                            aria-label="title"
                                            aria-describedby="title"
                                            style={{ border: 'none', fontWeight: 'bolder', fontSize: '30px' }}
                                            onChange={this.changeHandler}
                                        />
                                    </InputGroup>
                                    <InputGroup className="">
                                        <FormControl
                                            name="note"
                                            className="m-0 p-0 keep-scrolling"
                                            as="textarea"
                                            value={this.state.note}
                                            aria-label="note"
                                            aria-describedby="note"
                                            style={{ border: 'none' }}
                                            onChange={this.changeHandler}
                                        />
                                    </InputGroup>
                                </div>
                                <div className="text-end p-2">
                                    <Button type="submit" className="btn btn-secondary">
                                        Apply Changes
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    null
                }
                {/* end of edit section */}
            </div>
        )
    }
}


export default Right
