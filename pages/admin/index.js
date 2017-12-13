import { Component } from 'react';
import Router from 'next/router'
import LoginPanel from '../../components/modules/LoginPanel';
import fetchHandler from '../../utils/fetchHandler';
import storage from '../../utils/storage';

class Home extends Component {
    state = {
        error: false
    }

    doLogin = (values) => {
        fetchHandler('http://localhost:3000/api/account/token', {
            method: 'POST',
            body: JSON.stringify(values)
        })
            .then(resp => resp.json())
            .then(resp => {
                storage.setAccount(resp);
                Router.push('/admin/dashboard');
            })
            .catch(error =>
                error
                    .json()
                    .then(errorJson => this.setState({ error: errorJson.status }))
            );
    }

    render() {
        return(
            <div className="flex flex-column vh-100-ns justify-center">
                <LoginPanel
                    onSubmit={this.doLogin}
                    error={this.state.error}
                />
            </div>
        )
    }
}

export default Home
