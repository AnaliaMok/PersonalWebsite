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
    }else{
        list.style.display = "none";
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
