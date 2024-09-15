import { useState } from 'react';
import './Form.css';

function Form() {
    const [formContent, setFormContent] = useState([]);
    const addQuestion = () => {
        const field ={
            "name": `question_${formContent.length}`,
            "lable": "Untitled question",
            "question_type": "showt question", // "paregraph", "multichoice",
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
                {formContent.map((field, index) => {
                    return(
                        <div key={index}>
                            test
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
