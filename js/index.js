/**
 * ITCAST WEB
 * Created by zhousg on 2017/2/9.
 */
$(function () {
    $('.wrapper').fullpage({
        navigation: true,
        slidesNavigation:true,
        continuousVertical:true,
        afterLoad: function (link, index) {
            var that = this;
            setTimeout(function () {
                $('section').removeClass('now').eq(index-1).addClass('now');
            }, 200);
        }
    });

    (function(){
       $('.inner').on('mouseover','li',function(){
           var index = $('.inner li').index($(this));
           $('.inner_con > div').removeClass('now').eq(index).addClass('now');
       });
    })();

    (function () {
        var width = 960,
            conWidth = 760,
            col = 7,
            space = (width - conWidth) / (col - 1),
            initSpace = width / col;
        $('.fsbanner').children('div').width(conWidth).each(function (index, item) {
            $(item).css({'left': index * initSpace, 'transition': 'all 0.5s'}).data('index', index);
        }).on('mouseover', function () {
            var i = $(this).data('index');
            $('.fsbanner').children('div').each(function (index, item) {
                if (index <= i) {
                    $(item).css('left', index * space).data('index', index);
                } else {
                    $(item).css('left', (index - 1) * space + conWidth).data('index', index);
                }
            })
        }).on('mouseleave', function () {
            $('.fsbanner').children('div').width(conWidth).each(function (index, item) {
                $(item).css({'left': index * initSpace, 'transition': 'all 0.5s'}).data('index', index);
            });
        });
    })();
});
