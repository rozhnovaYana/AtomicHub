'use strict'
import menu from "./modules/menu"
import scroll from "./modules/scroll"
document.addEventListener("DOMContentLoaded", ()=>{
    menu({
        humburgerSelector:"#humburger",
        menuOverlaySelector:".menu-overlay",
        menuSelector:".menu-wrapper",
        menuItemsSelector:".menu-item"
    })
    scroll("#header");
    scroll("#about")
    scroll("#footer")
    scroll("#works")
})