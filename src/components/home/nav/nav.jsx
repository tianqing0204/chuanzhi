import React, {Component} from 'react';
class Nav extends Component {
    handle () {
        const {text, index} = this.props;
        // console.log(text);
        const id = text.sportType;
        const {change} = this.props;
        const navname = index > 6 ? text.name : '更多';
        change(id, navname);
        // console.log(navname);

    }
    render () {
        const {text} = this.props;
        return (
            <li className="nav"
                onClick={this.handle.bind(this)}
            >
                {text.name}
                
            </li>
        );
    }
};
export default Nav;
