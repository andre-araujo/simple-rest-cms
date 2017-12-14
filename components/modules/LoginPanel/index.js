import { Component } from 'react';

import Input from '../../elements/TextInput'

class LoginPanel extends Component {
    state = {}

    registerField = (proxyEvent) => {
        if (proxyEvent && proxyEvent.target && proxyEvent.target.name) {
            this.setState({
                [proxyEvent.target.name]: proxyEvent.target.value,
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        const {
            onSubmit,
            error,
        } = this.props;

        return (
            <section className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        label="Login"
                        onChange={this.registerField}
                    />
                    <Input
                        name="password"
                        label="Password"
                        type="password"
                        onChange={this.registerField}
                    />
                    {
                        error &&
                        <p className="red f6 tc">{error}</p>
                    }
                    <input
                        className="f4 ba link dim br1 ph3 pv2 mb2 mt2 dib white bg-black pointer w-100"
                        type="submit"
                        value="login"
                    />
                </form>
            </section>
        );
    }
}

export default LoginPanel;
