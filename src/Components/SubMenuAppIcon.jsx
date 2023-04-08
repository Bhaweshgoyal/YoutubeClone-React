import React from 'react'

export default function SubMenuAppIcon({SubMenu}) {
    let style = {}
    if(SubMenu === false){
         style = {display : "none"}
    }else{
         style = {display : "flex"}
    }
  return (
    <div style = {style}>subMenu</div>
  )
}
