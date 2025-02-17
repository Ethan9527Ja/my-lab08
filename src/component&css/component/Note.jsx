import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Note = ({notes, setNotes}) => {
    const handleDelNote = (id) => {
        setNotes((prevNotes) => prevNotes.filter(item => item.id !== id))
    }
    return (

        <div className="note">
            <div className="note__body">{notes.title}</div>
            <div className="note__footer">
                <DeleteForeverIcon className='del-button' onClick = {() => {handleDelNote(notes.id)}}/>
            </div>
        </div>
    )
}

export default Note