// import React, { memo } from 'react';
import React, { memo } from 'react';
import './ComponentHeader.css'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { TbMailQuestion } from "react-icons/tb";
import { BiImages } from "react-icons/bi"
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Row } from 'reactstrap';
function ComponentHeader() {
    return (
        <div className='header_top'>
            <>
                <div className='row'>
                    <div className='col-6 header_top_left'>
                        <ul>
                            <li>
                                <AiOutlineMail />
                                <span>tranquangtu0498@gmail.com</span>
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                    <div className='col-6 header_top_right'>
                        <ul>

                            <li>
                                <Link to={"/image"}>
                                    <BiImages />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <TbMailQuestion />
                                </Link>
                            </li>
                            <li>
                                <AiOutlineUser />
                                <Link to={"/login"} style={{ textDecoration: 'none' }} className='Link'>
                                    <span><b>Login</b></span>
                                </Link>

                            </li>
                            {/* <li>
                                <Link to={"/register"}>
                                    <span>Đăng ký</span>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </>

        </div>

    );
}

export default ComponentHeader;