import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        Author Name
                        <input type="text"/>
                    </label>
                    <label>
                        Email
                        <input type="text"/>
                    </label>
                    <label>
                        Password
                        <input type="password"/>
                    </label>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;