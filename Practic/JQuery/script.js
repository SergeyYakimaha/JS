import $ from 'jquery'; 

// $(document).ready(function() {
//     $("#btn").hover(function() {
//         $(this).toggleClass('active');
//     });
// });

$(document).ready(function() {
    $(".list .list-item").each(function() {
        $(this).hover(function() {
            $(this).toggleClass('active');
        });
    });

    $(".list").children().each(function(indx, elem) {
        $(elem).hover(function() {
            $(elem).toggleClass('active');
        });
    });  
    
   $(".list-item").eq(2).click(function() {
        $(".wrapper img").each(function() {
            $(this).fadeToggle(5000);
        }); 
   }); 

   $(".list-item:eq(4)").click(function() {
    $(".wrapper img").each(function() {
        $(this).animate({
            opacity: 'toggle',
            height: 'toggle'    
        }, 2000);
    }); 
}); 

});

