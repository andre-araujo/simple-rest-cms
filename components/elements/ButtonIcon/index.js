import { Component } from 'react';

function ButtonIcon({ icon, onClick }) {
    return (
        <span onClick={onClick}>
            <i className={`fa fa-${icon}`} aria-hidden="true" />

            <style jsx>{`
                span {
                    cursor: pointer;
                    font-size: 2rem;
                }

                span:hover {
                    color: #ffa500;
                }

                span:not(:last-child) {
                    margin-right: 1rem;
                }
            `}</style>
        </span>
    );
}

export default ButtonIcon;
