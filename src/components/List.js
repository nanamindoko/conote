import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../components';
import { Card } from "semantic-ui-react";


class List extends React.Component {
    render() {
        const mapToComponents = data => {
            return data.map((item, i) => {
                return (<Item
                            data={item}
                            owernership={item.writer=== this.props.currentUser}
                            key={item._id}
                />);
            });
        }

        return (
            <div>
                <Card.Group>
                    {mapToComponents(this.props.data)}
                </Card.Group>
            </div>
        )
    }
}

List.propType = {
    data: PropTypes.array,
    currentUser: PropTypes.string
};

List.defaultProps = {
    data: [],
    currentUser: ''
}

export default List;