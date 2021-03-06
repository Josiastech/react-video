import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
    state = {
        author: "Josias"
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         author: props.author
    //     }

    // //     this.handleClick = this.handleClick.bind(this);
    // }
    handleClick = (event) => {
        this.setState({
            author: "Josias Emanuel"
        })
    }
    render(){
        const styles = {
            container: {
                fontSize:14,
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img 
                    src={this.props.cover}
                    alt=""
                    width={260}
                    height={160}
                    className="Media-image"
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.state.author}</p>
                </div>
            </div>
        )
    }
}

// Validate the properties expected
Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(["video", "audio"]),
}

export default Media;