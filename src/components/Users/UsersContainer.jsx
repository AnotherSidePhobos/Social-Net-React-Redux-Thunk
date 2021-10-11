import { connect } from "react-redux";
import {setCurrentPage} from './../../redux/usersReducer';
import {getUsers} from './../../redux/usersReducer';
import {follow} from './../../redux/usersReducer';
import {unFollow} from './../../redux/usersReducer';
import Users from './Users';
import React from 'react'
import Loading from './../Loading/Loading';

 
class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageClick = (p) => {

        debugger
        this.props.getUsers(p, this.props.pageSize);

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


let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, 
    {follow, unFollow, setCurrentPage, getUsers})(UsersContainer);


