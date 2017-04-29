/**
 * Created on April 27, 2017.
 */
$(document).ready(function(){
    $(".add-footer").load("./footer.html");
    $('.credit-packages input[type=radio]').on('click', function() {
        $('#pay-money').val($(this).val() * 1000);
    });
});
