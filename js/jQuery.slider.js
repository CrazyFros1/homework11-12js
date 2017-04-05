(function ($) {

    $.fn.slider = function () {

        var $leftUIEl = $('.carousel-arrow-left');
        var $rightUIEl = $('.carousel-arrow-right');
        var $elementList = $('.carousel-list');
        var pixelOffset = 125;
        var currentLeftValue = 0;
        var $elementsCount = $elementList.find('li').length;
        var minOffset = - (($elementsCount - 5) * pixelOffset);
        var maxOffset = 0;

        $leftUIEl.on('click', function () {
            if (currentLeftValue != maxOffset) {
                currentLeftValue += 125;
                $elementList.animate({left: currentLeftValue + 'px'}, 500);
            }
        });
        $rightUIEl.on('click', function () {
            if (currentLeftValue != minOffset) {
                currentLeftValue -= 125;
                $elementList.animate({left: currentLeftValue + 'px'}, 500);
            }
        });
    };
})(jQuery);
