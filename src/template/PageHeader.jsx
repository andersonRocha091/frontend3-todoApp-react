import React from 'react';
import './PageHeader.css'


export default props=>(
    <header className="page-header">
        <h2>{props.name}<small className="page-header-small">{props.small}</small></h2>
    </header>
)
