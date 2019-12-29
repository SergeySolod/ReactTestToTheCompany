import React from 'react'

const ModeSelector = (props) => {
    return (
        <div className='row justify-content-md-center'>
            <button onClick={() => props.onSelect(32)} className="btn btn-success">32 элемента</button>
            <button onClick={() => props.onSelect(1000)} className="btn btn-danger">1000 элементов</button>
        </div>
    )
}

export default ModeSelector