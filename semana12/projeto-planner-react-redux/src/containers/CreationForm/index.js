import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
//import { create } from '../../actions'

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: 'theme.spacing(1)',
//       width: 200,
//     },
//   },
// }));

export class CreationForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newTask: ''
        }
    }

    handleInputChange = ev => {
        this.setState(
            { newTask: ev.target.value }
        )
    }

    handleFormSubmission = ev => {
        const { newTask } = this.state
        ev.preventDefault()
        this.props.create(newTask)
    }

    render() {

        //   const classes = useStyles();

        return (

            <form
                onSubmit={this.handleFormSubmission}
                className={'classes.root'}
                noValidate
                autoComplete="off"
            >

                <TextField
                    value={this.state.newTask}
                    onChange={this.handleInputChange}
                    color="primary"
                    label="Nova Tarefa"
                    variant="outlined"
                    required
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                >
                    Salvar
                </Button>
            </form>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        //create: (newTask) => dispatch(create(newTask))
    })
)(CreationForm)