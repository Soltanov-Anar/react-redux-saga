import React from 'react';

export default ( { post } ) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className='card-title'>
                    {post.title}
                </h4>
            </div>
        </div>
    )
}