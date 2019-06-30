import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, Link } from 'react-feather';

const Footer = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: 200,
            background: '#000',
            alignItems: 'center',
            position: 'relative',
            color: '#fff'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                color: '#fff',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <p>Contact Info : panjiafrialdo@gmail.com</p>
                <ul style={{
                    display: 'flex',
                    padding: 0,
                    margin: 0,
                    width: '50%',
                    justifyContent: 'space-between'
                }}>
                    <li style={{ listStyle: 'none' }}>
                        <a style={{
                            textDecoration: 'none',
                            color: '#fff'
                        }} href="https://twitter.com/panjulle" target='_blank' rel="noopener noreferrer"><Twitter /></a>
                    </li>

                    <li style={{ listStyle: 'none' }}>
                        <a style={{
                            textDecoration: 'none',
                            color: '#fff'
                        }} href="https://www.instagram.com/panjiafr/" target='_blank' rel="noopener noreferrer"><Instagram /></a>
                    </li>

                    <li style={{ listStyle: 'none' }}>
                        <a style={{
                            textDecoration: 'none',
                            color: '#fff'
                        }} href="https://www.facebook.com/panji.afrialdo" target='_blank' rel="noopener noreferrer"><Facebook /></a>
                    </li>

                    <li style={{ listStyle: 'none' }}>
                        <a style={{
                            textDecoration: 'none',
                            color: '#fff'
                        }} href="https://www.linkedin.com/in/panji-afrialdo-898879176/?originalSubdomain=id" target='_blank' rel="noopener noreferrer"><Linkedin /></a>
                    </li>

                </ul>
                <i data-feather="circle"></i>
            </div>
            <p style={{
                position: 'absolute',
                bottom: 0,
                fontSize: 12
            }}>Copyright {new Date().getFullYear()} © All rights reserved | Panji Titan Afrialdo |</p>
        </div>
    );
}

export default Footer;