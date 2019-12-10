import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Write from "./Write";


/* Modal for new course */
class NewCourse extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            code: '',
            prof: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleProfChange = this.handleProfChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleCodeChange(e) {
        this.setState({
            code: e.target.value
        });
    }

    handleProfChange(e) {
        this.setState({
            prof: e.target.value
        })
    }

    handlePost() {
        let contents = this.state;

        this.props.onPost(contents).then(
            (success) => {
                if(success) {
                    this.setState({
                        name: '',
                        code: '',
                        prof: '',
                    });
                    this.props.close();
                }

            }
        );
    }



    render() {

        const customStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
        };

        let modal = (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    style={customStyles}
                    >

                    <h2>Create new course</h2>
                    <div className="form-group">
                        <label htmlFor="name">Course Name:</label>
                        <input type="text" className="form-control" id="usr" value={this.state.name} onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">Course Code:</label>
                        <input type="text" className="form-control" id="code" value={this.state.code} onChange={this.handleCodeChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prof">Instructor:</label>
                        <input type="password" className="form-control" id="prof" value={this.state.prof} onChange={this.handleProfChange}/>
                    </div>

                    <button type="button" class="btn btn-primary" onClick={this.props.onPost}>Create</button>
                    <button type="button" class="btn btn-danger" onClick={this.props.close}>Close</button>
                </Modal>
            </div>
        );

        return (
            <div>
                {this.props.isOpen ? modal : undefined}
            </div>
        )
    }
}

NewCourse.propTypes = {
    isOpen: PropTypes.bool,
    close: PropTypes.func,
    onPost: PropTypes.func
};

NewCourse.defaultProps = {
    isOpen: false,
    close: () => {
        console.error("close function")
    },
    onPost: (contents) => {
        console.error('Post function not defined');
    }
}

export default NewCourse