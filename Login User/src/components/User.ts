
export type UserType={
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    address:string,
    phoneNumber:string
}
export type Action={
    type:"CREATE_USER",
    data:UserType
}|{
    type:"UPDATE_USER",
    data:Partial<UserType>&{email:string}}|
{
    type:"GET_USER",
    email:string}|
{
    type:"DELETE_USER",
    email:string}

export default (user:UserType,action:Action):UserType=>{
    switch (action.type) {
        case 'CREATE_USER':
            return {...user,...action.data};
        case 'UPDATE_USER':
            return {...user,...action.data}
        default:
            return user;
    }
}
