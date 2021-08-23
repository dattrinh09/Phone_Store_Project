import React, { useState, useEffect } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtnLink,
    NavItemBtn
} from './Navbar.elements'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    const [showAddProduct, setShowAddProduct] = useState(false)

    window.addEventListener("resize", showButton);

    const signOut = () => {
        localStorage.removeItem("adminLogin")
    }

    useEffect(() => {
        if(localStorage.getItem("adminLogin")){
            setShowAddProduct(true)
        }else{
            setShowAddProduct(false)
        }
    })

    return (
        <>
        <IconContext.Provider value={{ color: "#fff"}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon/>
                            PHONE STORE
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : 
                        <FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/">
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/">
                                Services
                            </NavLinks>
                        </NavItem>                                    
                        <NavItem>
                            {showAddProduct ? (
                                <NavLinks to="/add-products">
                                    Add Products
                                </NavLinks>
                            ) : (
                                <NavLinks to="/products">
                                    Products
                                </NavLinks>
                            )}
                        </NavItem>
                        {showAddProduct ? (
                            <>
                            <NavItem>
                                    <NavLinks>
                                        <i class="far fa-user"></i>
                                    </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/">
                                    <Button primary onClick={signOut}>SIGN OUT</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/">
                                    <Button fontBig primary onClick={signOut}>
                                        SIGN OUT
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                            </>
                        ) : (<NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button fontBig primary>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                        )}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
