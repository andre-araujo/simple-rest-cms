import { Component } from 'react';
import Link from 'next/link';
import ContentType from '../../elements/ContentType';

class ContentTypes extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <ul>
                        <ContentType />
                    </ul>
                </div>

                <style jsx>{`
                    section {
                        margin: 2rem 0;
                    }

                    h1 {
                        border-bottom: 1px solid #333;
                    }
                `}</style>
            </section>
        );
    }
}

export default ContentTypes;
