import React from 'react';
import {Card} from "semantic-ui-react";
import {Link} from "react-router-dom";

/*
List item component
 */

class Item extends React.Component {
    render() {
        const itemView = (
            <div className="card">
                <Card>
                    <Card.Content header="This note needs your FEEDBACK! #1"/>
                </Card>
            </div>
        )


        return (
            <div className="container item">
                { itemView }
            </div>
        );
    }
}

Item.propTypes = {
    data: React.PropTypes.object,
    ownershiop: React.PropTypes.bool
}

Item.defaultProps = {
    data: {
        _id: "anonymous",
        writer: "anonymous",
        contents: "Blank",
        is_edited: false,
        date: {
            edited: new Date(),
            created: new Date()
        },
        starred: []
    },
    ownership: true
}

export default Item;