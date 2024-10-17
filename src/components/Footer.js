import React from 'react'
import styled from 'styled-components'

const Foot=styled.div`
     .back_to_top{
       background-color: #37475a;
       color: #FFFFFF;
       width: 1216px;
       height: 49px;
       font-size: 13px;
       display: flex;
       justify-content: center;
       align-items: center;
     }
     .about_us{
        width: 1216px;
        height: 300px;
        display: flex;
        justify-content: space-evenly;
        padding-top: 47px;
        background-color: #232F3E;
        color: #DDDDDD;
        ul{
            list-style: none;
            line-height: 30px;
            font-size: 14px;
        }
        .link1, .link2, .link3, .link4{
            font-weight: 700;
            font-family: sans-serif;
            font-size: 16px;
        }
     }
`;
const Footer = () => {
  return (
    <Foot>
      <div>
           <div className='back_to_top'>Back to top</div>
           <div className='about_us'>
            <div>
                <ul>
                    <li className='link1'>Get to Know Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Releases</li>
                    <li>Amazon Science</li>
                </ul>
            </div>
            <div><ul>
                    <li className='link2'>Connect with Us</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                   
                </ul></div>
            <div><ul>
                    <li className='link3'>Make Money with Us</li>
                    <li>Sell on Amazon</li>
                    <li>Sell under Amazon Accelerator</li>
                    <li>Protect and Build Your Brand</li>
                    <li>Amazon Science</li>
                </ul>
                </div>
                <div><ul>
                    <li className='link4'>Get to Know Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Releases</li>
                    <li>Amazon Science</li>
                </ul>
                </div>
           </div>
      </div>
    </Foot>
  )
}

export default Footer
