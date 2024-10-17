import React from 'react'
import styled from "styled-components"
import { GrLocation } from "react-icons/gr"
import { FaSearch } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

const Main=styled.div`
    .header_main{
        background-color: #0f1111;
        height: 60px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .amazon_logo{
      height: 50px;
      width: 100px;

      
    }

   .amazon_logo img{
         padding: 1px 8px 0px 6px;
         width: 100%;
         height: 50px;
         background-size: cover;
   }
   
   //box2
    .icon2{
       padding-left: 15px;
       display: flex;
    }
    .icon2_1{
      padding-top: 5px;
      align-items: center;
      line-height: 1.2;
    }
    

        .deliver{
          font-size: 12px;
          color: #cccccc;
          padding-left: 2px;
        }
        .pincode{
          font-size: 14px;
          color: #ffffff;
          font-weight: 600;
          
        }
        .location_icon{
          padding-top: 16px;

        }
    
        //Box3
        .search_bar{
         display: flex;
         height: 40px;
         padding-left: 10px;
         border-radius: 5px;
        }
        .search_icon{
          background-color: #febd68;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          width: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2rem;
          color: #0f1111;
          
        }
        .search_area{
          width: 500px;
          border: none;
          font-size: 1rem;
        }
        .select_all{
          width: 51px;
          height: 40px;
          background-color: #E6E6E6;
          text-align: center;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          border: none;
        }

        //Box4
      .Box4{
        color: #D6D6D6;
        line-height: 1rem;

        p{
          color: white;
          font-size: 12px;
          padding-left: 5px;
        }
        .account{
          font-size: 14px;
          background: none;
          color: white;
          border: none;
          font-weight: 700;
        }
        
      }
      .cart{
        font-size: 30px;
        line-height: 0.1;
        display: flex;
        p{
          font-size: 14px;
          padding-top: 21px;
          font-weight: 650;
        }
      }
     
      .second_navbar{
        height: 39px;
        background-color: #232f3e;
        color: #ffffff;
        font-size: 14px;
        align-items: center;
        display: flex;
        justify-content: space-evenly;
      }
      .all{
        font-size: 14px;
        display: flex;
        align-items: center;
        font-weight: 700;
      }
      .nav_option{
        display: flex;
        width: 70%;
        font-size: 0.85rem;
        p{
          margin-left: 15px;
        }
      }


`;
const Header = () => {
  return (
    <Main>
      <div className='header_main'>

        {/* Box1 */}
        <div className='amazon_logo border'>
            <div className='logo'>
              <img src="/images/logo.png" alt="" />
            </div>
        </div>

       {/* Box2 */}
        <div className='icon2'>
        <div className='location_icon'><GrLocation fontSize={"18px"}/></div>
              <div className='icon2_1'>
                  <p className='deliver'>Deliver to Mukul</p>
                  <p className='pincode' >Chennai 600127</p>
             </div> 
        </div>

      {/* Box3 */}
      <div className='search_bar'>
        <select name="" className='select_all'>
          <option value="">All</option>
        </select>
        <input type="text" placeholder='Search Amazon.in' className='search_area'/>
        <div className="search_icon"><FaSearch /></div> 
      </div>

      {/* Box4 */}
      <div className='Box4'>
          <p>Hello, Mukul</p>
          <select name="" className='account'>
            <option value="">Account & Lists</option>
          </select>
      </div>
     {/* Box5 */}
      <div className='Box4'>
          <p>Returns</p>
          <span name="" className='account'>
            & Orders
          </span>
      </div>

      {/* Box6 */}
      <div className="cart">
      <FaOpencart />
      <p>Cart</p>
      </div>
      </div>

      {/* Navbar-2 */}

      <div className='second_navbar'>
        
        <div className='all'>
        <IoMenuSharp  fontSize={"25px"}/>
        <div>All</div>
        </div> 
        <div className='nav_option'>
        <p>Fresh</p>
        <p>Amazon miniTV</p>
        <p>Sell</p>
        <p>Gift Cards</p>
        <p>Amazon Pay</p>
        <p>Buy Again</p>
        <p>Today's Deals</p>
        <p>Coupons</p>
        <p>Gift Ideas</p>
        </div>
        <div className="offerlist">
          Shop Deals in Accessories
        </div>
      </div>


      {/* Hero section */}
    </Main>
  )
}

export default Header
