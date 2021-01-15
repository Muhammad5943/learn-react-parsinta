import React from 'react';
import Card from './components/Card';

function ClassExample() {
    return (
        <div className="py-4">
            <div className="container">
                <h4>Post</h4>
                <hr />
                <div className="d-flex">
                    <div className="col-md-4">
                        <Card
                            imageUrl="http://placekitten.com/300/300"
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            imageUrl="http://placekitten.com/300/200"
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            imageUrl="http://placekitten.com/g/300/150"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClassExample;