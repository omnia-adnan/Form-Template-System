import { useState } from 'react';
import './Form.css';


function Form() {
    const [formContent, setFormContent] = useState([]);
    const addQuestion = () => {
        const field ={
            "name": `question_${formContent.length}`,
            "label": "Untitled question",
            "question_type": "showt_answer", // "paregraph", "multichoice",
            "list": [],
        }
        setFormContent([...formContent, field]);
    }

    return (
        <div className='container'>
            <div className='title'>
                <h1>Form Mark</h1>
                <h2>Untitled Form</h2>
            </div>
            <div className='questions'>
                {formContent.map((field) => {
                    return(
                        <div className='question_type'>
                            <div className='question_choice'>
                                <div key={field.name}>
                                    <label>{field.label}</label>
                                </div>
                                <div className='choices'>
                                    <select>
                                        <option value="showt_answer">Showt Answer</option>
                                        <option value="paregraph">Paregraph</option>
                                        <option value="multichoice">Multichoice</option>
                                    </select>
                                </div>
                            </div>
                            <div className='choice_type'>
                                {
                                    field.question_type === 'showt_answer' && <input type="text" placeholder={field.label} />
                                }
                                {
                                    field.question_type === 'paregraph' && <textarea rows={4} placeholder={field.label} />
                                }
                                {
                                    field.question_type === 'multichoice' && 
                                        <select>
                                            {field.list.map((item) => <option key={item} value={item}>{item}</option>)}
                                        </select>
                                }
                            </div>
                        </div>
                    )
                })}
                <div className='button'>
                    <div>
                        <button type="button" onClick={addQuestion}>Add Question</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Form;
