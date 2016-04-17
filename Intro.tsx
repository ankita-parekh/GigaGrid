///<reference path="./node_modules/giga-grid/typings/tsd.d.ts"/>

import * as React from "react";
import {ListGroup, ListGroupItem} from "react-bootstrap";

export class Intro extends React.Component<any,{}> {
    
    render() {
        return (
            <div>

                <h2>Key Concepts</h2>

                <p>
                    You simply use <code>GigaGrid</code> like any other React component
                </p>
                <pre>
                    <code className="typescript">
                        {`
const myGrid = React.createElement(GigaGrid, ...);
ReactDOM.render(myGrid, document.body);
                        `}
                    </code>
                </pre>

                <h3>User Should Know these Classes</h3>
                <ListGroup>
                    <ListGroupItem>
                        <pre><code className="typescript">Row|SubtotalRow|DetailRow</code></pre>
                        <p>
                            Represents a single row in the table, you do not have to create these. They are created from the <code>data</code> prop you pass to the grid.
                            The only time you must deal <code>Row</code> objects is during callbacks that you provide in response to user events.
                        </p>
                        <p>
                            You can find out if a <code>Row</code> given to you is a <code>DetailRow</code> or a <code>SubtotalRow</code> via the <code>isDetail()</code> method.
                        </p>
                    </ListGroupItem>
                    <ListGroupItem>
                        <pre><code className="typescript">ColumnDef|Column</code></pre>
                        <p>
                            Defines a column in the grid. You must provide <code>ColumnDef</code> objects that describe column properties such as <code>format</code>, <code>title</code> etc.
                            <code>Column</code> are different from <code>ColumnDefs</code> in that you do not create <code>Column</code> objects, they are simply enriched <code>ColumnDef</code> objects. The only time you deal with them
                            is in callbacks.
                        </p>
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>Documentation To be Completed</strong>
                    </ListGroupItem>
                </ListGroup>

                <br/>

                <h2>GigaGrid Props</h2>
                <ListGroup>
                    <ListGroupItem>
                        <pre>
                            <code className="typescript">data : any[]</code>
                        </pre>
                        This prop is used to pass the raw data that the grid will render
                    </ListGroupItem>
                    <ListGroupItem>
                        <pre>
                            <code className="typescript">columnDefs : ColumnDef[]</code>
                        </pre>
                        The column definitions that describe columns of the <code>data</code> prop.
                    </ListGroupItem>
                    <ListGroupItem>
                        <pre>
                            <code className="typescript">initialSubtotalBys : Column[]</code>
                        </pre>
                        The columns listed here will be used to create the initial subtotals in the grid
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}
