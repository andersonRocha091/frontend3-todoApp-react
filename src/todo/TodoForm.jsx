import React from 'react';

export default props => (
    <div role="form" className="todoForm">
        <div className="input-group">
            <div className="col-xs-12 col-sm-9 col-md-10">
                <input type="text" className="form-control" placeholder="Adicione uma tarefa" />
            </div>
            <span className="input-group-btn">
                <div className="col-xs-12 col-sm-3 col-md-2">
                    <button className="btn btn-primary">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </span>
        </div>
    </div>
);
