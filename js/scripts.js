// $(document).ready(function(){
//   $("#blank form").submit(function(event){
//     event.preventDefault();
//     var nameInput = $("input#name").val();
//     var dateInput = $("input#date").val();
//     var startInput = $("input#start").val();
//     var endInput = $("input#end").val();
//
//     $(".name").text(nameInput);
//     $(".date").text(dateInput);
//     $(".start").text(startInput);
//     $(".end").text(endInput);
//
//     $("#confirm").show();
//   });
// });

$(document).ready(function(){

  $("form#convertInputForm").submit(function(event){
    event.preventDefault();
    var ounceInput = parseInt($("input#ozC").val());
    var cupOutput = ounceInput / 8;
    $("#ozC1").text(cupOutput);
    console.log(cupOutput);
  });

  $("form#convertInputForm").submit(function(event){
    event.preventDefault();
    var cupInput = parseInt($("input#cOZ").val());
    var ounceOutput = cupInput * 8;
    $("#cOZ1").text(ounceOutput);

    console.log(ounceOutput);
  });

  $("form#convertInputForm").submit(function(event){
    event.preventDefault();
    var cupInput = parseInt($("input#cL").val());
    var literOutput = cupInput / 4.23;
    $("#cL1").text(literOutput);
    console.log(literOutput);
  });

  $("form#convertInputForm").submit(function(event){
    event.preventDefault();
    var literInput = parseInt($("input#lC").val());
    var cupOutput = literInput * 4.23;
    $("#lC1").text(cupOutput);
    console.log(cupOutput);
  });

  $("form#convertInputForm").submit(function(event){
    event.preventDefault();
    var literInput = parseInt($("input#lG").val());
    var gallonOutput = literInput / 4;
    $("#lG1").text(gallonOutput);
    console.log(gallonOutput);
  });

  $("form#convertInputForm").submit(function(event){
    event.preventDefault();
    var gallonInput = parseInt($("input#gL").val());
    var literOutput = gallonInput * 8;
    $("#gL1").text(literOutput);
    console.log(literOutput);

    $("#Conversions").show();
  });

});
