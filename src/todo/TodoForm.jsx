import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

import { changeDescription, search, add } from './TodoActions';


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        const { add, search, description } = this.props;
        if (e.key == 'Enter') {
            e.shiftKey ? search() : add(description);
        }
        else if (e.key == 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        const { add, search, description } = this.props;
        return (
            <div role="form" className="todoForm">
                <div className="input-group">
                    <Grid cols='12 9 10'>
                        <input type="text" className="form-control"
                            placeholder="Adicione uma tarefa"
                            onChange={this.props.changeDescription}
                            onKeyUp={this.keyHandler}
                            value={this.props.description}
                        />
                    </Grid>

                    <Grid cols="12 3 2">
                        <IconButton style="primary" icon="plus"
                            onClick={() => { add(description) }}
                        ></IconButton>
                        <IconButton style='info' icon='search'
                            onClick={()=>{search()}} />
                        <IconButton style='default' icon='close'
                            onClick={this.props.handleClear} />
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, search, add }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);