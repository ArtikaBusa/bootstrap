var total_no_of_students = 3;
$( document ).ready(function() {
  function update_summary() {
    var total = 0;
    var min = 300;
    var max = 0;
    var student_count = 0;
    $(".total").each(function( index ) {
      student_count = student_count + 1;
      student_total = (parseInt($(this).text()) ? parseInt($(this).text()) : 0);
      if(max < student_total) { max = student_total }
      if(min > student_total) { min = student_total }
      total += student_total;
    });
    $("#total").html(total);
    $("#average").html((total/student_count).toFixed(2)+"%");
    $("#min").html(min);
    $("#max").html(max);
  }

  function assing_change_event(){
    $(".sum").change(function() {
      id = $(this).data("id");
      sum = (parseInt($("#english_" + id).val())  ? parseInt($("#english_" + id).val()) : 0) +
                 (parseInt($("#gujarati_" + id).val()) ? parseInt($("#gujarati_" + id).val()) : 0) +
                 (parseInt($("#hindi_" + id).val())     ? parseInt($("#hindi_" + id).val()) : 0);
      $("#total_" + id).html(sum);
      $("#average_" + id).html((sum/3).toFixed(2) + "%");
      update_summary();
      $("#record").removeClass("sum");
    });
  }

  assing_change_event();
  function change_event(){
    $("#add").click(function(){

    total_no_of_students += 1;
    var english = parseInt($("#english").val())  ? parseInt($("#english").val()) : 0;
    var gujarati = parseInt($("#gujarati").val())  ? parseInt($("#gujarati").val()) : 0;
    var hindi = parseInt($("#hindi").val())  ? parseInt($("#hindi").val()) : 0;

    var sum = english + gujarati + hindi;
    var avg = (sum/3).toFixed(2)+"%";
    var markup1 =  "<tr id='row'>" +
                    "<td><button type='button' class='fa fa-edit' id='editbutton' data-toggle='modal' data-target='#editdata'></button></td>" +
                    "<td align='center' id = 'id'>" + parseInt($("#id").val()) + "</td>" +
                    "<td align='right' class = 'name'>" + $("#name").val() + "</td>" +
                    "<td align='right' class = 'english'>" + english + "</td>" +
                    "<td align='right' class = 'gujarati'>" + gujarati + "</td>" +
                    "<td align='right' class = 'hindi'>" + hindi + "</td>" +
                    "<td align='right' id = 'total_"+ parseInt($("#id").val()) +"' class = 'total'>" + sum + "</td>" +
                    "<td align='right' id = 'average_"+ parseInt($("#id").val()) +"' class = 'average'>" + avg + "</td>" +
                  "</tr>";
    $("#record").append(markup1);
    $("#no_of_student").html(total_no_of_students);
     update_summary();
     $('.modal-body').find('input').val('');
  });
  }
  change_event();
  $("#submit").click(function(){
    var english = parseInt($("#english").val())  ? parseInt($("#english").val()) : 0;
    var gujarati = parseInt($("#gujarati").val())  ? parseInt($("#gujarati").val()) : 0;
    var hindi = parseInt($("#hindi").val())  ? parseInt($("#hindi").val()) : 0;
    var sum = english + gujarati + hindi;
    var avg = (sum/3).toFixed(2)+"%";
    var markup =  "<tr>"+
                    "<td align='center'>" + parseInt($("#id").val()) + "</td>" +
                    "<td align='right'>" + $("#name").val() + "</td>" +
                    "<td align='right'>" + english + "</td>" +
                    "<td align='right'>" + gujarati + "</td>" +
                    "<td align='right'>" + hindi + "</td>" +
                    "<td align='right'>" + sum + "</td>" +
                    "<td align='right'>" + avg + "</td>" +
                  "</tr>";
    var  matches = record.findAndReplace('markup', 'markup1');

    // $("#row").html(markup);
    // change_event();
    update_summary();
  });

  $("#remove").click(function(){
    $('#record tr:last').remove();
    total_no_of_students -= 1;
    $("#no_of_student").html(total_no_of_students);
    update_summary();
  });

  $("#small").click(function(){
    $("body").css({"font-size": "100%","background-color":"red"});
  });

  $("#medium").click(function(){
    $("body").css({"font-size": "150%","color":"red","background-color":"#ffd280"});
  });
  $("#large").click(function(){
    $("body").css({"font-size": "200%","background-color":"red","color":"blue"});
  });
});
