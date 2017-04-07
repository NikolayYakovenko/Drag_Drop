import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'
import { ItemTypes } from './itemTypes'

// here is our DragSource

const boxSource = {
    beginDrag(props) {
        console.log('beginDrag');
        return {
            name: props.name,
        };
    },

    endDrag(props, monitor) {
        // When dropped on a compatible target, do something.
        // Read the original dragged item from getItem():
        const item = monitor.getItem();

        // You may also read the drop result from the drop target
        // that handled the drop, if it returned an object from
        // its drop() method.
        const dropResult = monitor.getDropResult();
        console.log('endDrag');

        if (dropResult) {
            console.log(`You dropped ${item.name} into ${dropResult.name}!`);
        }
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Box extends Component {
    render() {
        const { connectDragSource, isDragging } = this.props;
        const { name } = this.props;

        return connectDragSource(
            <div style={{
                border: '1px solid grey',
                lineHeight: '100px',
                textAlign: 'center',
                width: '100px',
                height: '100px',
                background: isDragging ? 'grey' : 'lime',
            }}>
                {name}
            </div>
        )
    }
}


Box.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
};

export default DragSource(ItemTypes.BOX, boxSource, collect)(Box);
