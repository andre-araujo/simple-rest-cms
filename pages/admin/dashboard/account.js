import { Component } from 'react';
import Header from '../../../components/modules/Header';

function Dashboard() {
    return(
        <div>
            <Header />
            <h1 className="container">ACCOUNT</h1>

            <style jsx>{`
                .content {
                    margin-top: 40px;
                }
            `}</style>
        </div>
    )
}

export default Dashboard;
