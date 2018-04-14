import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {initi, searchUsers} from '../../actions/user'
import {Users} from '../../components'

class UsersContainer extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return this.props.pages !== nextProps.pages;
    }

    componentDidMount() {}

    render() {
        return (<Users users={this.props.users}/>)
    }
} //class

//redux
const mapStateToProps = (state) => ({users: state.users})

const mapDispatchToProps = (dispatch) => ({
    initi() {
        dispatch(initi())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
