import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose, AiFillPlayCircle } from "react-icons/ai"
import { useContext, useState } from "react"

import logo from "../../images/logo_500px.png"
import { NavLink as Link } from 'react-router-dom';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';


import { TransactionContext } from "../context/TransactionContext"





const NavbarItem = ({ title, classProps }) => {

    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}
const Navbar = ({ direction, ...args }) => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const { currentAccount, connectWallet } = useContext(TransactionContext)

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4 h-full ">
            <div className=" mr-96">

                <Link to="/"><img src={logo} alt="Chainerist logo" width={150} /> </Link>
            </div>
            <ul className="text-white md:flex hidden list-none flew-row justify-between items-center flex-initial">


                <li>

                    <Link className=" py-2  mx-4 rounded-full cursor-pointer " to="/Lists">Claim List</Link>

                </li>
                <li>

                    <Link className=" py-2  mx-4 rounded-full cursor-pointer " to="/Transactions">Transactions</Link>

                </li>
                <li>

                    <Link className=" py-2  mx-4 rounded-full cursor-pointer " to="/Eventsending">Claim Data</Link>

                </li>
                
                {currentAccount &&
                    (<li>

                    <Link className=" py-2  mx-4 rounded-full cursor-pointer " to="/ClaimedDatas">My Claims</Link>

                </li>)}
                <div className="d-flex p-2">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} >
                        <DropdownToggle caret className="hover:bg-[#2952e3] bg-[#2952e3] rounded-full" color="primary">Companies</DropdownToggle>
                        <DropdownMenu {...args} className="my-2">
                            <DropdownItem header>Insurance Companies</DropdownItem>
                            <DropdownItem><li>
                                <a href="https://www.allianz.com.tr/tr_TR.html#/customer-lead-form">Allianz Sigorta</a>
                            </li></DropdownItem>
                            <DropdownItem><li>
                                <a href="https://www.axasigorta.com.tr/">Axa Sigorta</a>
                            </li></DropdownItem>
                            {/* <DropdownItem>Quo Action</DropdownItem> */}
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <li  >
                    {!currentAccount && (
                        <button
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                        >
                            <AiFillPlayCircle className="text-white mr-2" />
                            <p className="text-white text-base font-semibold">
                                Connect Wallet
                            </p>
                        </button>
                    )}
                </li>
            </ul>
            <div className="flex relative">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)}></AiOutlineClose>
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                            <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar;