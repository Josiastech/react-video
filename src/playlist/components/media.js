import React, {Component} from 'react';

class Media extends Component {
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
            <div style={styles.container}>
                <div>
                    <img 
                    src=""
                    alt=""
                    width={260}
                    height={160}
                    />
                    <h3>Xq aprender reactjs</h3>
                    <p>Josias</p>
                </div>
            </div>
        )
    }
}

export default Media;