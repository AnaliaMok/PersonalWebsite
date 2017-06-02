/*
    File Name: main.js
    Description: Main JavaScript file for website

    @author: Analia Mok
 */

/**
 * Opens and closes the mobile nav depending on the
 * current display property of the ul
 *
 * @param menu - Reference to the navigation
 * @return null
 */
function openMenu(menu){
    // Getting ul in menu
    list = menu.getElementsByTagName("ul")[0];
    if(list.style.display == "none" || list.style.display == ""){
        list.style.display = "block";

        if(menu.parentElement.id === "sticky-header"){
            // Need to readjust the top positioning
            // for the sticky-header
            menu.style.position = "absolute";
            menu.style.top = "0";
        }
    }else{
        list.style.display = "none";
        if(menu.parentElement.id === "sticky-header"){
            // Only needs to be applied to sticky header
            // the landing page overlay would be pushed off
            // if this was applied
            menu.style.position = "static";
        }
    }

    // Maximizing width on menu icon bars
    menuBars = menu.getElementsByClassName("menu-icon")[0]
                   .getElementsByTagName("div");

    for(var i = 0; i < 3; i++){
        if(list.style.display == "block"){
            menuBars[i].style.width = "2em";
        }else{
            // Applying original widths to each bar
            switch(i){
                case 1:
                    menuBars[i].style.width = "1.5em";
                    break;
                case 2:
                    menuBars[i].style.width = "1em";
                    break;
                default:
                    // the first bar
                    menuBars[i].style.width = "2em";
                    break;
            }
        }
    }

}
