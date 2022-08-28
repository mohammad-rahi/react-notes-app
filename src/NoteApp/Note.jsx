import {MdDeleteForever} from 'react-icons/md'
import './Note.css'

const Note = ({id, text, date, handleDeleteNote}) => {
    return (
        <div className="note" data-id={id}>
            <span>{text}</span>
            <div className="note_footer">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete_icon' title='Delete' size='1.3em' />
            </div>
        </div>
    );
}

export default Note;