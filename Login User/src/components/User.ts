
export type UserType = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
    phoneNumber: string
}
export type Action = {
    type: "CREATE_USER",
    data: { id: string } & { firstName: string } & { password: string }
} | {
    type: "UPDATE_USER",
    data: Partial<UserType> & { id: string }
} |
{
    type: "GET_USER",
    data: string
} |
{
    type: "DELETE_USER",
    data: string
}

export default (user: UserType, action: Action): UserType => {

    switch (action.type) {
        case 'CREATE_USER':
           
            return {...user, ...action.data };
        case 'UPDATE_USER':
            return { ...user, ...action.data }
        default:
            return user;
    }
}
