/* eslint-disable array-callback-return */
import { useState } from 'react';
import './Form.css';
import { CiSquarePlus } from "react-icons/ci";

function Form() {
    const [formContent, setFormContent] = useState([]);
    const [onEdit, setOnEdit] = useState(false);
    const [textField, setTextField] = useState('');
    const [editedField, setEditedField] = useState('');

    const camelize = (str) => {
        return str.replace(/(?:^\|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0) return "";
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    };

    const addQuestion = () => {
        const field ={
            "name": `question_${formContent.length}`,
            "label": "Untitled question",
            "question_type": "showt_answer",
            "list": [],
        }
        setFormContent([...formContent, field]);
    }

    const editField = (fieldName, fieldLabel) => {
        const formFields = [...formContent];
        const fieldIndex = formFields.findIndex(f => f.name === fieldName);
        if (fieldIndex > -1) {
            formFields[fieldIndex].label = fieldLabel;
            setFormContent(formFields);
        }
    }

    const editFieldType = (fieldName, fieldLabel) => {
        const formFields = [...formContent];
        const fieldIndex = formFields.findIndex(f => f.name === fieldName);
        if (fieldIndex > -1) {
            formFields[fieldIndex].question_type = fieldLabel;
            setFormContent(formFields);
        }
    }

    const addFieldOption = (fieldName, option) => {
        const formFields = [...formContent];
        const fieldIndex = formFields.findIndex(f => f.name === fieldName);
        if (fieldIndex > -1) {
            if (option && option !== "") {
                formFields[fieldIndex].list.push(option);
                setFormContent(formFields);
                setTextField('');
            }
            
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        const formTargets = e.target;
        let data = [];
        formContent.map(content => {
            const element = camelize(content.label)
            data.push({
                question: content.label,
                answer: formTargets[element].value,
            })
            console.log('form data', data);
        })
    }

    return (
        <div className='container'>
            <div className='title'>
                <h1>Form Header</h1>
                <h2>Form description</h2>
            </div>
            <div>
            <div className='questions'>
                {formContent.map((field) => {
                    return(
                        <div key={field.id} className='question_type'>
                            <div>
                            <div className='question_choice'>
                                <div key={field.name} className='question_titel'>
                                    {
                                        onEdit && (editedField === field.name) ?
                                        <input type="text" value={field.label} onChange={(e) => editField(field.name, e.target.value)} onBlur={() => {setOnEdit(false); setEditedField("")}}/>
                                        :
                                        <label onClick={() => {setOnEdit(true); setEditedField(field.name)}}>{field.label}</label>
                                    }
                                </div>
                                <div className='choices'>
                                    <select onChange={(e) => editFieldType(field.name, e.target.value)}>
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
                                    <div className='selected'>
                                        <select>
                                            {field.list.map((item) => <option key={item} value={item}>{item}</option>)}
                                        </select>
                                        <div>
                                            <input type="text" onChange={(e) => setTextField(e.target.value)} value={textField} placeholder='Add option' />
                                            <button type="button" onClick={() => addFieldOption(field.name, textField)} className='add'>Add</button>
                                        </div>
                                    </div>
                                }
                            </div>
                            </div>
                        </div>
                    )
                })}
                <div className='button'>
                    <div>
                        <button onClick={addQuestion}>
                            <CiSquarePlus className='plus'/>
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <div className='title'>
                <h1>Form Mark Preview</h1>
                <h2>Untitled Form</h2>
            </div>
            
            <form onSubmit={submitForm} className='questions'>
                {formContent.map((field) => {
                    return(
                        <div className='question_type'>
                            <div className='question_choice'>
                            <div key={field.name} className='question_titel'>
                            <label onClick={() => setOnEdit(true)}>{field.label}</label>
                                </div>
                            </div>
                            <div className='choice_type'>
                                {
                                    field.question_type === 'showt_answer' && <input type="text" placeholder={field.label} name={camelize(field.label)}/>
                                }
                                {
                                    field.question_type === 'paregraph' && <textarea rows={4} placeholder={field.label} name={camelize(field.label)}/>
                                }
                                {
                                    field.question_type === 'multichoice' && 
                                        <select name={camelize(field.label)}>
                                            {field.list.map((item) => <option key={item} value={item}>{item}</option>)}
                                        </select>
                                }
                            </div>
                        </div>
                    )
                })}
                
                <div>
                    <div>
                        <button type='submit' className='submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
