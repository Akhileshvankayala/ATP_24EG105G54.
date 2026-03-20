function NavBar(){
    return(
        <div className="flex justify-between bg-cyan-200 py-3 px-10">
            <h1>LOGO</h1>
            <ul className="flex gap-12 px-5">
                <li>HOME</li>
                <li>REGISTER</li>
                <li>LOGIN</li>
            </ul>
        </div>
    )
}
export default NavBar;