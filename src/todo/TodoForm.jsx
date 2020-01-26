import React from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

export default props => (
    <div role="form" className="todoForm">
        <div className="input-group">
            <Grid cols='12 9 10'>
                <input type="text" className="form-control"
                    placeholder="Adicione uma tarefa"
                    onChange={props.handleChange}
                    value={props.description}
                />
            </Grid>

            <Grid cols="12 3 2">
                <span className="input-group-btn">
                    <IconButton style="primary" icon="plus"
                        onClick={props.handleAdd}
                    ></IconButton>
                    <IconButton style='info' icon='search'
                    onClick={props.handleSearch}/>
                </span>
            </Grid>
        </div>
    </div>
);
