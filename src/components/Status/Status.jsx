import React, { Component } from 'react'

class Status extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({ // setState АСИНХРОННЫЙ МЕТОД
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
                }
            </>
        )
    }
}

export default Status;