import Note from "./Note"
import CreateNote from "./CreateNote"
import { useEffect, useState } from "react"
import '../css/Note.css'
const Notes = () => {
    //使用usestate来保存各个状态
    const [notes, setNotes] = useState([])
    const [loading,setLoading] = useState(true)
    const [input, setInput] = useState('')
    useEffect(() =>{
        const data = JSON.parse(localStorage.getItem("Notes")) || []
        //我不知道这种情况下用哪种比较好，请老师给一些建议，谢谢！
        if(Array.isArray(data) && data.length > 0){
            setNotes(data)
        }
        //用哪一种呢？老师可以给点建议嘛？使用短路还是用if
        //Array.isArray(data) && setNotes(data)
        setLoading(false)
    },[])
    //使用useeffect来监控notes是否发生改变
    useEffect(() => {
        if(!loading){
            localStorage.setItem('Notes', JSON.stringify(notes))
        }
    }, [notes])
    if(loading) {
        return <div>Loading</div>
    }
    return (
        <div className="notes">
            {/* map方法便利数组来实现渲染notes中的数据 */}
            {notes.map((notes) => (
                <Note key={notes.id} notes = {notes} setNotes = {setNotes}/>
            ))}
            <CreateNote setInput = {setInput} setNotes = {setNotes} input = {input} notes = {notes}/>
        </div>
    )
}

export default Notes