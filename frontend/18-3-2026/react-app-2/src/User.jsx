function User(props){
    const {userObj}=props
    return(
        <div>
            <img src={userObj.image} alt="" />
            <h1>{userObj.name}</h1>
            <h1>{userObj.email}</h1>
        </div>
    )
}
export default User