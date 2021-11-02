import { createSelector } from "reselect"

export const getUsersPrimitiveSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersPrimitiveSelector, (users) => {
    return users.filter(u => true)
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}