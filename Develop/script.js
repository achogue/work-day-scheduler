


$( ".saveBtn" ).click(function() {
  var d = $(this);
  var dParent = d.parent();
  var textArea = dParent.children(".description");
  var textAreaVal = textArea[0].value;
  localStorage.setItem(dParent[0].id, textAreaVal);
});


$(".time-block").each(function() {
  var d = $(this);
  console.log(d[0].id);
  var textArea = d.children(".description");
  $(textArea).val(localStorage.getItem(d[0].id));
})




$(function () {

  var today = dayjs();
  $('#currentDay').text(today.format('MM/DD/YYYY'));

  var hour = dayjs().hour()

  $(".time-block").each(function () {
    var d = $(this);

   if (d[0].id == hour){
      $(this).attr('class', '').addClass('row time-block present');
   }else
    if(d[0].id < hour){
      $(this).attr('class', '').addClass('row time-block past');
    }
    else
    if(d[0].id > hour){
      $(this).attr('class', '').addClass('row time-block future');
    }
  })

});
