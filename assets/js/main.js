/*
    File Name: main.js
    Description: Main JavaScript file for website

    @author: Analia Mok
 */

window.onload = init;

/**
 * Initializing function for when the window is fully loaded
 * @return {[type]} [description]
 */
function init(){
    var sideNav = document.getElementById("side-nav");
    if(sideNav != null){
        // If side nav is present
        var listItems = sideNav.getElementsByTagName("li");
        // Assign each list item onclick method to change the current items
        for(var i = 0, length = listItems.length; i < length; i++){
            var  currItem = listItems[i];
            currItem.getElementsByTagName("a")[0].onclick = changeCurrItem;
        }
    }
} // End of init

/**
 * Opens and closes the mobile nav depending on the
 * current display property of the ul
 *
 * @param menu - Reference to the navigation
 * @return null
 */
function openMenu(menu){
    // Getting ul in menu
    var list = menu.getElementsByTagName("ul")[0];
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
    var menuBars = menu.getElementsByClassName("menu-icon")[0]
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

} // End of openMenu

/**
 * Toggle function for the collapsed sidenav menu
 * @return null
 */
function toggleDropdown(listItem){
    var list = listItem.getElementsByTagName("ul")[0];
    var listState = list.style.display;

    if(listState == "none" || listState == ""){
        list.style.display = "block";
    }else{
        list.style.display = "none";
    }

} // End of toggleDropdown


/**
 * Changes the current item displayed in side nav
 * @param item: MouseEvent
 * @return null
 */
function changeCurrItem(){
    // Grab text this a tag
    var itemText = this.innerText;

    // Change display text
    var holder = document.getElementById("output");
    holder.innerHTML = itemText;

    // Close Dropdown menu
    var sideNav = document.getElementById("side-nav");
    var list = sideNav.getElementsByTagName("ul")[0];
    list.style.display = "none";

} // End of changeCurrItem
