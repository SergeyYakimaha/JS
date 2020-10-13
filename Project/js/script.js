"use strict";
 
const tabContent = document.querySelectorAll('.tabcontent'),
      tabMenu = document.querySelectorAll('.tabheader__item');
 
 
function hideElement(el) {
    el.style.display = 'none';
}
 
function showElement(el) {
    el.style.display = 'block';
}
 
function makeTabs(tabMenu, tabContent, activeClass) {
    tabMenu.forEach((tab, idx) => {
        tab.addEventListener('click', () => {
            tabMenu.forEach(el => {
                el.classList.remove(activeClass);
                tabMenu[idx].classList.add(activeClass);
            });
            
            tabContent.forEach(el => {
                hideElement(el);
                showElement(tabContent[idx]);
            });
        });
        
        if(!tab.classList.contains(activeClass)) {
            hideElement(tabContent[idx]);
        } else {
            showElement(tabContent[idx]);
        }
    });
}
 
makeTabs(tabMenu, tabContent, 'tabheader__item_active');