import React, {Component} from 'react';
import Homes from '../../components/home';
import {baseurl} from '../../../common/baseurl';
import {get} from '../../../common/api';
import {connect} from 'react-redux';
import {actionYuan, actionId, actionDa} from '../../../store/action/home';
class Home extends Component {
    componentDidMount () {
        const {dispatch} = this.props;
        get(`${baseurl}/users`).then((res) => {
            if (res.data.code === 0) {
                const shuju = res.data.data.data;
                const daShuju = [...shuju, ...shuju];
                console.log(daShuju);
                dispatch(actionDa(daShuju));
                this.initNav(daShuju, '更多');
            }
        });
    }
    initNav (daShuju, name) {
        const {dispatch} = this.props;
        if (daShuju.length > 6) {
            const xiao = daShuju.slice(0, 6);
            xiao.push({name: name, sportType: 'more'});
            dispatch(actionYuan(xiao));
        }
    }
    handle (id, navname) {
        if (id !== 'more' && id !== 'yc') {
            const {dispatch} = this.props;
            // console.log(id);
            dispatch(actionId(id));
            const {yuan} = this.props;
            this.initNav(yuan, navname);
        } else if (id === 'more') {
            // console.log(this.props, '11111111111111111');
            const {big, dispatch} = this.props;
            dispatch(actionYuan([...big, {name: '隐藏', sportType: 'yc'}]));
        } else {
            const {yuan} = this.props;
            this.initNav(yuan, navname);
        }
    }
    render () {
        // console.log(this.props, '11111111111111111');
        const {yuan} = this.props;
        return (
            <div className="home">
                {
                    yuan !== null ? <Homes yuan={yuan} gaibian={this.handle.bind(this)}></Homes> : ''
                }
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    // console.log(state, 'state');
    return {
        yuan: state.home.yuan,
        id: state.home.id,
        big: state.home.big
    };
};
export default connect(mapStateToProps)(Home);
