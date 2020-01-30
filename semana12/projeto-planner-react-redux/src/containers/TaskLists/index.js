import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../../actions'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;  
    justify-content: space-evenly  
`

const Card = styled.div`
    width: 300px;
    margin: 1em;
    border: 2px dotted violet;  
    background-color: khaki;
    padding-left: 1em;
`

function TaskLists(props) {

    useEffect(() => {
        props.fetchTasks()
    }, [])

    const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

    return (
        <Wrapper>
            {days.map(day => (
                <Card>
                    <h2>{day}</h2>
                    <ul>{
                        props.taskList.filter(
                            task => task.day === day
                        ).map(
                            task => <li>{task.text}</li>
                        )
                    }</ul>
                </Card>
            ))}
        </Wrapper>
    )

}

export default connect(
    state => ({
        taskList: state.tasks.list
    }),
    dispatch => ({
        fetchTasks: () => dispatch(fetchTasks())
    })
)(TaskLists)