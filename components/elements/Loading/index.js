import { Component } from 'react';

import Router from 'next/router';

class Loading extends Component {
    state = {
        isActive: false,
    }

    componentDidMount() {
        Router.onRouteChangeStart = () => this.setState({ isActive: true });
        Router.onRouteChangeComplete = () => this.setState({ isActive: false });
        Router.onRouteChangeError = () => this.setState({ isActive: false });
    }

    render() {
        return (
            <div className={this.state.isActive && 'active'}>
                <span />
                <span />
                <span />

                <style jsx>{`
                    @keyframes loading {
                        0% {
                            opacity: 0;
                            transform: rotate(-90deg);
                        }
                        50% {
                            opacity: 1;
                            transform: rotate(0);
                        }
                    }

                    div {
                        align-items: center;
                        background: rgba(255, 255, 255, 0.85);
                        bottom: 0;
                        display: flex;
                        left: 0;
                        opacity: 0;
                        pointer-events: none;
                        position: fixed;
                        justify-content: center;
                        right: 0;
                        top: 0;
                        z-index: 10;
                    }

                    div.active {
                        opacity: 1;
                        pointer-events: all;
                    }

                    span {
                        animation: loading 1s infinite;
                        background: #666;
                        display: inline-flex;
                        height: 1rem;
                        margin: 0.5rem;
                        opacity: 0;
                        transform: rotate(90deg);
                        width: 1rem;
                    }
                    span:nth-child(2) {
                        animation-delay: 0.1s;
                    }
                    span:nth-child(3) {
                        animation-delay: 0.2s;
                    }
                `}</style>
            </div>
        );
    }
}

export default Loading;
