import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import SignedInMenu from './SignedInMenu'
import SignedoutMenu from './SignedoutMenu'
const Navbar = () => {

    const { user, setUser } = useContext(UserContext)

    const logout = async () => {
        try {
            const res = await fetch('http://localhost:5000/logout', {
                credentials: 'include',
            })
            console.log(res)
            const data = res.json()
            console.log("Data", data)
            setUser(null)

        } catch (err) {
            console.log(err)
        }
    }

    const menu = user ? <SignedInMenu logout={logout} /> : <SignedoutMenu/>

    return (
        <>
            <nav className="green">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Chat</a>
                    <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {menu}
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {menu}
            </ul>
        </>


    )
}

export default Navbar