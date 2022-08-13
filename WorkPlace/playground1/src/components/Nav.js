import logo from '../images/logo192.png'
const Nav = () =>{
    return(
        <>
        <nav className='nav'>
            <div className='logo'>
                <span>
                    <img src={logo} alt='' />
                </span>
                <span>ReactFacts</span>
            </div>
           <p>React Course - Project 1</p>
        </nav>
        </>
    )
}
export default Nav