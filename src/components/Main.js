import React from 'react'
import styled from 'styled-components'

const Section=styled.div`
      .amazon1 img{
        background-size: cover;
        height: 480px;
        width: 1215px;
        
      }
      .amazon_boxes{
        display: flex;
        justify-content: space-evenly;
        margin-top: -235px;
       .box1, .box2 , .box3{
        height: 420px;
        width: 378px;
        background-color: #ffffff;
        }
       .box{
        display: flex;
        justify-content: center;
        
       }
        .box1_1{
            width: 378px;
            height: 27px;
            display: flex;
            padding: 10px 0 0 20px;
            font-size: 20px;
            font-weight: 600;
           
        }
        
        .box1_img{
            padding-top: 10px;
        }
        .box1_img img{
            width: 166px;
            height: 122px;
            padding-left: 11px;
        }
         .box_text{
          display: flex;
          font-size: 12px;
          padding: 0 0 0 15px;
          .box1_1_1{
            width: 55px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #CC0C39;
            color: white;
            margin-left: 3px;
            border-radius: 2px;
          }

          .box1_1_2{
            color: #CC0C39;
            font-weight: 700;
            padding-left: 2px;
            display: flex;
            align-items: center;
          }
        }
      }
      .box_footer a{
        font: 13px;
        color: #007185;
        font-family: sans-serif;
        text-decoration: none;
        display: block;
        display: flex;
        padding: 20px 0 0 20px;
        
      }
`;
const Main = () => {
  return (
    <Section>
      <div className='amazon1'>
        <img src="/images/amazon1.jpg" alt="Hero"/>
      </div>
      <div className='amazon_boxes'>
          <div className='box1'>
            <div className='box1_1'><p>4+ star deals for you</p></div>
            <div className='box'>
            <div className='box1_img'>
                <img src="/images/mini_img.jpg" alt="" />
                <div className='box_text'>
                <div className='box1_1_1'>90% off</div>
                <div className='box1_1_2'>Limited time deal</div>
                </div>
                </div>
            <div className='box1_img'>
                <img src="/images/shoe_image.png" alt="" />
                <div className='box_text'>
                <div className='box1_1_1'>27% off</div>
                <div className='box1_1_2'>Limited time deal</div>
                </div>
                </div>
            </div>
            
            <div className='box'>
            <div className='box1_img'>
                <img src="/images/brand_logo.png" alt="" />
                <div className='box_text'>
                <div className='box1_1_1'>90% off</div>
                <div className='box1_1_2'>Limited time deal</div>
                </div>
                </div>
            <div className='box1_img'>
                <img src="/images/mini_img.jpg" alt="" />
                <div className='box_text'>
                <div className='box1_1_1'>90% off</div>
                <div className='box1_1_2'>Limited time deal</div>
                </div>
                </div>
            </div>
          <div className='box_footer'><a href="#">See all deals</a></div>
          </div>


          <div className='box2'>
          <div className='box1_1'><p>Deals for you in Accesssories </p></div>
            <div className='box'>
            <div className='box1_img'>
                <img src="/images/mini_img.jpg" alt="" />
                <div className='box_text'>
                <div className='box1_1_1'>90% off</div>
                <div className='box1_1_2'>Limited time deal</div>
                </div>
                </div>
            <div className='box1_img'>
                <img src="/images/shoe_image.png" alt="" />
                <div className='box_text'>
                <div className='box1_1_1'>27% off</div>
                <div className='box1_1_2'>Limited time deal</div>
                </div>
                </div>
            </div>
            
            <div className='box'>
            <div className='box1_img'>
                <img src="/images/mini_img.jpg" alt="" />
                <div className='box_text'>
                <div className='box1_1_1'>90% off</div>
                <div className='box1_1_2'>Limited time deal</div>
                </div>
                </div>
            <div className='box1_img'>
                <img src="/images/mini_img.jpg" alt="" />
                <div className='box_text'>
                <div className='box1_1_1'>90% off</div>
                <div className='box1_1_2'>Limited time deal</div>
                </div>
                </div>
            </div>
          <div className='box_footer'><a href="#">See all deals</a></div>
          </div>

          <div className='box3'><div className='box1_1'><p>Best selling products</p></div>
            <div className='box'>
            <div className='box1_img'>
                <img src="/images/mini_img.jpg" alt="" />
                <div className='box_text'>
                <div className='box1_1_1'>90% off</div>
                <div className='box1_1_2'>Limited time deal</div>
                </div>
                </div>
            <div className='box1_img'>
                <img src="/images/shoe_image.png" alt="" />
                <div className='box_text'>
                <div className='box1_1_1'>27% off</div>
                <div className='box1_1_2'>Limited time deal</div>
                </div>
                </div>
            </div>
            
            <div className='box'>
            <div className='box1_img'>
                <img src="/images/mini_img.jpg" alt="" />
                <div className='box_text'>
                <div className='box1_1_1'>90% off</div>
                <div className='box1_1_2'>Limited time deal</div>
                </div>
                </div>
            <div className='box1_img'>
                <img src="/images/mini_img.jpg" alt="" />
                <div className='box_text'>
                <div className='box1_1_1'>90% off</div>
                <div className='box1_1_2'>Limited time deal</div>
                </div>
                </div>
            </div>
          <div className='box_footer'><a href="#">See all deals</a></div></div>
      </div>
      
    </Section>
  )
}

export default Main
