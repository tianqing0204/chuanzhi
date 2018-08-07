import React, {Component} from 'react';
import Nav from './nav';
class Home extends Component {
    handle (val, navname) {
        const {gaibian} = this.props;
        gaibian(val, navname);
    }
    render () {
        const {yuan} = this.props;
        return (
            <div className="home">
                <ul>
                    {
                        yuan.map((v, i) => {
                            return <Nav key={i} text={v} index={i} change={this.handle.bind(this)}></Nav>;
                        })
                    }
                </ul>
                
            </div>
        );
    }
};
export default Home;
