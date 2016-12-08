document.documentElement.id = 'custom'
document.body.addEventListener("mouseover",function(e) {
    if (e.target.classList.contains('result-small')) {
        var delay = setTimeout(function() { e.target.click() }, 300);
        this.onmouseout = function() { clearTimeout(delay) };
    }
});
