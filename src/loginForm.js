import React, { Component } from 'react'

class loginForm extends Component {
    state = {
        fullName: '',
        email: '',
        phone: '',
        message: ''
    }
    render() {
        return (
            <div className="formDetails">
                <h2>Contact Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <input  type="text" name="fullName" value={this.state.fullName} placeholder="Enter FullName" onChange={this.handleChange}/>
                    <input  type="email" name="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleChange}/>
                    <input  type="phone" name="phone" value={this.state.phone} placeholder="Enter Phone" onChange={this.handleChange}/>
                    <textarea name="message" value={this.state.message} placeholder="Message" ></textarea>
                    <button type="submit" className="btnPrimary">Send</button>
                </form>
            </div>
        )
    }
}

export default loginForm
