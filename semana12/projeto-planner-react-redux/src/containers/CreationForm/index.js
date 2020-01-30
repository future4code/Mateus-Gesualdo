import React, { useState } from 'react';
import { connect } from 'react-redux'
import { create } from '../../actions'
import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 3px;
    background-color: violet;
`
export const Form = styled.form`
    display: flex;
`
export const Input = styled.input`
   
`

export function CreationForm(props) {

    const [newTask, setTask] = useState({})

    const handleSubmission = ev => {
        ev.preventDefault()
        props.create(newTask) // console.log(newTask) 
        setTask({text: '', day: 'Segunda'})
    }

    const handleChange = ev => {
        setTask({
            ...newTask,
            [ev.target.name]: ev.target.value
        })
    }

    return (

        <Form
            onSubmit={handleSubmission}
            className={'classes.root'}
        >

            <Input
                name="text"
                value={newTask.text}
                onChange={handleChange}
                placeholder="Nova Tarefa"
                required
            />
            <select
                name="day"
                value={newTask.day}
                onChange={handleChange}
            >
                <option>Segunda</option>
                <option>Terça</option>
                <option>Quarta</option>
                <option>Quinta</option>
                <option>Sexta</option>
                <option>Sábado</option>
                <option>Domingo</option>
            </select>
            <Button type="submit">Salvar</Button>
        </Form>
    );

}

export default connect(
    null,
    dispatch => ({
        create: (newTask) => dispatch(create(newTask))
    })
)(CreationForm)