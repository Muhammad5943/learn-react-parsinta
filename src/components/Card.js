import React from 'react';

function Card() {
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src="http://placekitten.com/g/300/200" alt="profile" />
                <div className="card-body">
                    <h4 className="card-title">This the first post</h4>
                    <small className="text-muted">Publish 6 Feb, 2020</small>
                </div>
            </div>
        </div>
    );
}

export default Card;