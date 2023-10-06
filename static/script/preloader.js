// window.onload = function() {
//     setTimeout(function() {
//         var preloader = document.getElementById('page-preloader');
//         if (!preloader.classList.contains('done'))
//         {
//             preloader.classList.add('done');
//         }
//     }, 300);
// };

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if (!preloader.classList.contains('done'))
        {
            preloader.classList.add('done');
        }
    }, 400);
});