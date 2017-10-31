function changeCheckbox(){
     var checkbox = $("#"+$(this).attr("for"));
     if(checbox.prop("checked")){
          $(this).children("img").animate({opacity:.5, height:40,"border-width":"1px"}, 500);}
          else{
               $(this).children("img").animate({opacity:1, height:60,"border-width":"2px"}, 500)};
          }

function changeRadio(){
     $(this).animate({opacity:.1}, 400, function(){
          $("input:radio").next("label").removeClass("rb_checked");
          $(this).addClass("rb_checked");
          $(this).animate({opacity:1}, 800);
     });
}

$(document).ready(function(){
     $("form").hide();
     $("p").click(function(){$("form").toggle(1000);
return false;});
})
