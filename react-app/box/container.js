import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Box from './box'
import Target from './target'

class Container extends Component {
    render() {
        return (
            <div>
                <Box name='draggable item' />
                <Target />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Container);
