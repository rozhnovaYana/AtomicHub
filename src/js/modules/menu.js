const menu=({humburgerSelector, menuOverlaySelector, menuSelector, menuItemsSelector})=>{
    const humb=document.querySelector(humburgerSelector),
    menuOverlay=document.querySelector(menuOverlaySelector),
    menu=document.querySelector(menuSelector),
    menuItems=menu.querySelectorAll(menuItemsSelector)
    const openMenu=()=>{
        menuOverlay.style.display="block"
        menu.style.transform="translateX(0%)"
    };
    const closeMenu=()=>{
        menuOverlay.style.display="none"
        menu.style.transform="translateX(-100%)"
    };
    menuOverlay.addEventListener("click", (e)=>{
        if(e.target===menuOverlay){
            closeMenu()
        }
    });
        
    menuItems.forEach(item=>{
        item.addEventListener("click", ()=>{
            closeMenu()
        })
    })
        
    
    humb.addEventListener("click", ()=>{
        openMenu()
    })
    document.addEventListener('keydown', (e)=> {
        if (e.key == "Escape") {
            closeMenu()
        }
      });
}
export default menu;