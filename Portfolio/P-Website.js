// // Disable right-click context menu 
// document.addEventListener('contextmenu', function(e) { 
//     e.preventDefault();  
// }); 
// Disable text selection on mouse events 
document.addEventListener('mousedown', function(e) { 
    e.preventDefault(); 
}); 
// Disable text selection on keyboard events 
document.addEventListener('keydown', function(e) { 
    // Prevent Ctrl+A (Select All) 
    if (e.ctrlKey && e.key === 'a') { 
        e.preventDefault(); 
    } 
});