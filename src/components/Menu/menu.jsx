import React from 'react'
import "../../Styles/Menu.css"
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import menu_data from "../../data/MenuData";

const menu = () => {
  return (
    <div className="menu">
        { menu_data.map((data) => {
            return (
                <div className="item" key={data.id}>
                    <span className='title'>{data.title}</span>
                    { data.listItems.map((listItem) => {
                        return (
                        <>
                            <Link to={listItem.url} className='listItem' id={listItem.id}>
                                {listItem.img}
                                <span className="listItemTitle">{listItem.title}</span>
                            </Link>                            
                        </>)
                    }) }
                </div>      
            )
        })}
         
    </div>
  )
}

export default menu