import { connect } from "react-redux";
import {setCurrentPage} from './../../redux/usersReducer';
import {requestUsers} from './../../redux/usersReducer';
import {follow} from './../../redux/usersReducer';
import {unFollow} from './../../redux/usersReducer';
import Users from './Users';
import React from 'react'
import Loading from './../Loading/Loading';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import { getPageSize, getUsers, getTotalUserCount, getCurrentPage, getIsFetching} from "../../redux/users_selectors";
 
class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageClick = (p) => {

        debugger
        this.props.requestUsers(p, this.props.pageSize);

    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Loading/> :
                <div>
                    <Users totalUserCount = {this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageClick={this.onPageClick}
                    users={this.props.users}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    isFetching={this.props.isFetching}
                    />
                </div>
                }
            </>
        )
    }
}


// let mapStateToProps = (state) =>{
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//     }
// }
let mapStateToProps = (state) =>{
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
    }
}


export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, {follow, unFollow, setCurrentPage, requestUsers})
)(UsersContainer)

// export default withAuthRedirect(connect(mapStateToProps, 
//     {follow, unFollow, setCurrentPage, getUsers})(UsersContainer));


