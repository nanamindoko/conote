import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

/* Modal for new course */
class NewCourse extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            code: '',
            prof: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
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
                        <input type="text" className="form-control" name="name" id="usr" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">Course Code:</label>
                        <input type="text" className="form-control" name="code" id="code" value={this.state.code} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prof">Instructor:</label>
                        <input type="password" className="form-control" name="prof" id="prof" value={this.state.prof} onChange={this.handleChange}/>
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