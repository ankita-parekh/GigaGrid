import * as React from 'react';
import Dispatcher = Flux.Dispatcher;
import * as classNames from 'classnames';
import {TableRowColumnDef} from "../models/ColumnLike";
import {DropdownMenu} from "./dropdown/DropdownMenu";
import {SimpleDropdownMenuItem} from "./dropdown/DropdownMenu";
import {ColumnFormat} from "../models/ColumnLike";
import {SubtotalByMenuItem} from "./dropdown/StandardMenuItems";
import {SortMenuItem} from "./dropdown/StandardMenuItems";
import {GigaGridAction} from "../store/GigaGridStore";
import ReactDOM = __React.ReactDOM;

export interface GridSubcomponentProps<T> extends React.Props<T> {
    dispatcher: Dispatcher<GigaGridAction>;
}

export interface TableHeaderProps extends GridSubcomponentProps<TableHeader> {
    tableColumnDef: TableRowColumnDef;
    isFirstColumn?: boolean;
    isLastColumn?: boolean;
}

class TableHeaderState {
    handleVisible:boolean;
}

export class TableHeader extends React.Component<TableHeaderProps,TableHeaderState> {

    private dropdownMenuRef:DropdownMenu;
    private dropdownToggleHandleRef:HTMLElement;

    constructor(props:TableHeaderProps) {
        super(props);
        this.state = {handleVisible: false};
    }

    private renderDropdownMenu() {
        return (
            <span style={{position:"relative"}}>
                <DropdownMenu ref={(c:DropdownMenu)=>this.dropdownMenuRef=c} alignLeft={this.props.isLastColumn}
                              toggleHandle={()=>this.dropdownToggleHandleRef}>
                    <SortMenuItem tableRowColumnDef={this.props.tableColumnDef} isLastColumn={this.props.isLastColumn}
                                  dispatcher={this.props.dispatcher}/>
                    <SubtotalByMenuItem tableRowColumnDef={this.props.tableColumnDef}
                                        isLastColumn={this.props.isLastColumn}
                                        dispatcher={this.props.dispatcher}/>
                </DropdownMenu>
            </span>
        );
    }


    render() {
        const columnDef = this.props.tableColumnDef;

        const cx = classNames({
            "fa": true,
            "fa-bars": true,
            "dropdown-menu-toggle-handle-hide": !this.state.handleVisible
        });

        const dropdownMenuToggle = (
            <i className={cx} ref={c=>this.dropdownToggleHandleRef=c}
               onClick={()=>this.dropdownMenuRef.toggleDisplay()}/>
        );

        return (
            <th style={{"height":0}} onMouseEnter={()=>this.setState({handleVisible:true})}
                onMouseLeave={()=>this.setState({handleVisible:false})}
                className={columnDef.format === ColumnFormat.NUMBER ? "numeric" : "non-numeric"}>
                {this.props.isLastColumn ? [dropdownMenuToggle," "] : null}
                <span>
                    {columnDef.title || columnDef.colTag}
                </span>
                {!this.props.isLastColumn ? [" ", dropdownMenuToggle] : null}
                {this.renderDropdownMenu()}
            </th>
        );
    }
}
