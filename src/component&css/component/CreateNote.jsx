import { LinearProgress } from "@mui/material"
import { v4 as uuidv4 } from 'uuid';
const CreateNote = ({setInput, setNotes, input, notes}) => {
    //申明一个最大的textarea字符用来计算
    const maxlength = 100
    return (
        <div className="note">
            {/* 绑定表单 以及限制最大字符*/}
            <textarea value={input} onChange={(e) => setInput(e.target.value)} maxLength={100}></textarea>
            <div className="create-note__footer">
              <span className="label"></span>
              <button 
              //绑定动作使得notes顺利更新，使用prev使得修改最新状态，使用uuid确保id用不重复
                onClick={() => {
                    const newNote = {id: uuidv4(), title: input}
                    setNotes((prevNotes) => [...prevNotes, { id: uuidv4(), title: input }]);
                    setInput('')
                }}
                className="note__save">Save
              </button>
            </div>
            {/* 利用最大字符来计算还有多少字符位置剩余 */}
            <span>{(maxlength - input.length)} Left</span>
            {/* 计算value使得动态条随字数变化 */}
            <LinearProgress className="char__progress" variant="determinate" value={input.length}/>
        </div>
    )
}

export default CreateNote