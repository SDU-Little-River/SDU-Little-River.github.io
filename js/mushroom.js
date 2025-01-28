if (document.body.clientWidth > 992) {
    function getBasicInfo() {
        var ViewH = $(window).height();
        var DocH = $("body")[0].scrollHeight;
        var ScrollTop = $(window).scrollTop();
        var S_V = DocH - ViewH;
        var Band_H = ScrollTop / (DocH - ViewH) * 100;
        return {
            ViewH: ViewH,
            DocH: DocH,
            ScrollTop: ScrollTop,
            Band_H: Band_H,
            S_V: S_V
        };
    }

    function show(basicInfo) {
        if (basicInfo.ScrollTop > 0.001) {
            $(".neko").css('display', 'block');
        } else {
            $(".neko").css('display', 'none');
        }
    }

    (function ($) {
        $.fn.nekoScroll = function (option) {
            var defaultSetting = {
                top: '0',
                scroWidth: '6px',
                z_index: 9999,
                zoom: 0.9,
                borderRadius: '5px',
                right: '100px',
                nekoImg: "https://xhbsh.top/img/mushroom.png",
                color: "#6f42c1",
                during: 500,
                blog_body: "body",
            };

            var setting = $.extend(defaultSetting, option);
            var getThis = this.prop("className") ? "." + this.prop("className") : this.prop("id") ? "#" + this.prop("id") : this.prop("nodeName");

            if ($(".neko").length == 0) {
                this.after("<div class=\"neko\" id=" + setting.nekoname + " data-msg=\"" + '你好' + "\"></div>");
            }

            let basicInfo = getBasicInfo();
            $(getThis).css({
                'position': 'fixed',
                'width': setting.scroWidth,
                'top': setting.top,
                'height': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 + 'px',
                'z-index': setting.z_index,
                'background-color': setting.bgcolor,
                "border-radius": setting.borderRadius,
                'right': setting.right,
                'background-image': '-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)',
                'background-size': 'contain'
            });

            $("#" + setting.nekoname).css({
                'position': 'fixed',
                'top': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 - 50 + 'px',
                'z-index': setting.z_index * 10,
                'right': setting.right,
                'background-image': 'url(' + setting.nekoImg + ')',
            });

            show(getBasicInfo());

            $(window).scroll(function () {
                let basicInfo = getBasicInfo();
                show(basicInfo);

                $(getThis).css({
                    'position': 'fixed',
                    'width': setting.scroWidth,
                    'top': setting.top,
                    'height': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 + 'px',
                    'z-index': setting.z_index,
                    'background-color': setting.bgcolor,
                    "border-radius": setting.borderRadius,
                    'right': setting.right,
                    'background-image': '-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)',
                    'background-size': 'contain'
                });

                $("#" + setting.nekoname).css({
                    'position': 'fixed',
                    'top': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 - 50 + 'px',
                    'z-index': setting.z_index * 10,
                    'right': setting.right,
                    'background-image': 'url(' + setting.nekoImg + ')',
                });
            });

            this.click(function () {
                btf.scrollToDest(0, 500);
            });

            $("#" + setting.nekoname).click(function () {
                btf.scrollToDest(0, 500);
            });

            return this;
        };
    })(jQuery);

    $(document).ready(function () {
        $("#myscoll").nekoScroll({
            bgcolor: 'rgb(0 0 0 / .5)',
            borderRadius: '2em',
            zoom: 0.9
        });
    });
}
