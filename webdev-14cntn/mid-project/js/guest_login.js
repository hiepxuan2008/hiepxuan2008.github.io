jQuery(document).ready(function () {

    adjustSocialButtonResponsive();

    $(window).bind('resize', function() {
        adjustSocialButtonResponsive();
    });

    function adjustSocialButtonResponsive() {
        var deviceWidth= $(window).width();
        if (deviceWidth < 320) {
            $('.btn-facebook').html('<i class="fa fa-facebook" aria-hidden="true"></i>Facebook');
            $('.btn-google-plus').html('<i class="fa fa-google-plus" aria-hidden="true"></i>Google');
        } else if (deviceWidth < 460) {
            $('.btn-facebook').html('<i class="fa fa-facebook" aria-hidden="true"></i>Đăng nhập bằng Facebook');
            $('.btn-google-plus').html('<i class="fa fa-google-plus" aria-hidden="true"></i>Đăng nhập bằng Google');
        } else {
            $('.btn-facebook').html('<i class="fa fa-facebook" aria-hidden="true"></i>Đăng nhập bằng tài khoản Facebook');
            $('.btn-google-plus').html('<i class="fa fa-google-plus" aria-hidden="true"></i>Đăng nhập bằng tài khoản Google');
        }
    }
});