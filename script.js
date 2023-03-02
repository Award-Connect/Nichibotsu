var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else
    {
        navigationHeader.style.marginLeft = '-100vw'; 
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar()
{
    if(showSidebar)
    {
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && showSidebar)
    {
        toggleSidebar();
    }
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function()
{
 nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

