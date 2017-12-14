import { Component } from 'react';
import Link from 'next/link';
import Input from '../Input';
import ButtonIcon from '../ButtonIcon';

class ContentType extends Component {
    state = {
        isEditingMode: false,
        title: null,
        types: []
    }

    addType = (state) => {
        this.setState({
            isEditingMode: true,
            types: [[], ...this.state.types]
        })
    }

    toggleEdit = () => {
        if(this.state.isEditingMode) {
            console.info('saving...');
            this.setState({ isEditingMode: false });
        } else {
            this.setState({ isEditingMode: true });
        }
    }

    render() {
        const {
            title,
            isEditingMode,
            types
        } = this.state;

        return (
            <section>
                <div>
                    <header>
                        <Input
                            disabled={!isEditingMode}
                            placeholder="Title"
                        />
                    </header>

                    <div className="content">
                        {
                            types.map((type, index) => (
                                <Input
                                    key={index}
                                    onChange={() => this.setState({ types: [ ...types,  ] })}
                                    disabled={!isEditingMode}
                                    placeholder={'Type a content type name...'}
                                />
                            ))
                        }

                        <div className="button-container">
                            <ButtonIcon
                                icon="plus"
                                onClick={this.addType}
                            />

                            <ButtonIcon
                                icon={isEditingMode ? 'floppy-o' : 'pencil-square-o'}
                                onClick={this.toggleEdit}
                            />
                        </div>
                    </div>

                </div>

                <style jsx>{`
                    section {
                        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
                    }

                    h1 {
                        font-size: 1.5rem;
                        text-transform: uppercase;
                    }

                    header {
                        background: #ddd;
                        padding: 15px;
                        color: #333;
                    }

                    .content {
                        background: #fafafa;
                        padding: 15px;
                    }

                    .button-container {
                        margin: .5rem;
                    }
                `}</style>
            </section>
        );
    }
}

export default ContentType;
