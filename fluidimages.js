/**
 * Created by khanhnh on 11/10/2014.
 */

'use strict';
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {
    $.fn.extend({
        fluidImages: function(options)
        {
            if(!options.imgBox) return;
            var images = $(this).find(options.imgNode);
            for(var i = 0, length = images.length; i< length; i++)
            {
                var img = new Image(),
                    $image = $(images[i]),
                    imgBox = $image.closest(options.imgBox);

                imgBox.css({position: 'relative', overflow: 'hidden'});

                img.onload = function(e){
                    var cw = imgBox.width();
                    var ch = imgBox.height();
                    var r = Math.max(cw/img.width, ch/img.height);
                    var h = r * img.height;
                    var w = r * img.width;
                    $image.css({position: 'absolute', top: (ch-h)/2 + 'px', left: (cw-w)/2 + 'px', width: w + 'px', height: h + 'px'});
                }
                img.src = $image.attr('src');
            }
        }
    });
}));