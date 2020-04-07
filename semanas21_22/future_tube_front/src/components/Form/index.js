import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const StyledForm = styled.form`
    display: grid;
    grid-gap: 5px;
    padding: 5px;
    margin: 1em;
    border-radius: 5px;
    background-color: whitesmoke;
`

export const Form = props => <StyledForm>

    {props.fields.map(field => <TextField
        variant="filled"
        type={field.type}
        label={field.label}
        pattern={field.pattern}
        value={field.value}
        onChange={field.onChange}
    />)}

    <Button color="primary" variant="contained">{props.buttonText}</Button>

</StyledForm>