import React from 'react'
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../Components/MenuItem';
import '../styles/Menu.css';

function Menu() {
    console.log(MenuList);
  return (
    <div className='menu'>
        <h1 className='menuTitle'> Our menu </h1>
        <div className='menuList'>
            { MenuList.map((menuItem, key) => {
                return ( 
                <MenuItem 
                    key ={key}
                    image={menuItem.image}  
                    name={menuItem.name} 
                    price={menuItem.price} 
                />)
            })}
        </div>
    </div>
  ) 
}

export default Menu