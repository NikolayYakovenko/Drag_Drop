import React, { Component, PropTypes } from 'react'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from './itemTypes'

const boxTarget = {
    drop() {
        return { name: 'boxTarget' };
    },
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class Target extends Component {
    render() {
        const { isOver, connectDropTarget } = this.props;

        return connectDropTarget(
            <div style={{
                position: 'relative',
                border: '2px solid #d0d4dc',
                padding: '15px',
                width: '350px',
                height: '350px',
                marginTop: '15px',
            }}>
                {isOver &&
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                        backgroundColor: 'yellow',
                    }} />
                }
            </div>
        );
    }
}

export default DropTarget(ItemTypes.BOX, boxTarget, collect)(Target)
