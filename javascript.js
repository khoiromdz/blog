//<![CDATA[

var summary = 22;

var ry = "<i><h4>Related Posts</h4></i>";
rn = "<h5>No related post available</h5>";

function stripHtmlTags(e, r) {
    return e["replace"](/<.*?>/gi, "")["split"](/\s+/)["slice"](0, r - 1)["join"](" ")
}

function bintiz(e, r, t, s, i) {
    var n = t,
        r = r,
        l = document["getElementById"](e),
        m = l["innerHTML"];
    if (/<!--\s*more\s*-->/ ["test"](m)) {
        l["innerHTML"] = getSummaryLikeWP(e)
    } else {
        {
            var c = ""
        }
        var o = "<p>" + stripHtmlTags(m, summary) + "... </p>";
        l["innerHTML"] = o;
    };
}
rcomment = "comments";
rdisable = "disable comments";
commentYN = "no";
var dw = "";
titles = new Array;
titlesNum = 0;
urls = new Array;
timeR = new Array;
thumb = new Array;
commentsNum = new Array;
comments = new Array;

function related_results_labels(c) {
    for (var b = 0; b < c.feed.entry.length; b++) {
        var d = c.feed.entry[b];
        titles[titlesNum] = d.title.$t;
        for (var a = 0; a < d.link.length; a++) {
            if ("thr$total" in d) commentsNum[titlesNum] = d.thr$total.$t + " " + rcomment;
            else commentsNum[titlesNum] = rdisable;
            if (d.link[a].rel == "alternate") {
                urls[titlesNum] = d.link[a].href;
                timeR[titlesNum] = d.published.$t;
                if ("media$thumbnail" in d) thumb[titlesNum] = d.media$thumbnail.url;
                else thumb[titlesNum] = "https://2.bp.blogspot.com/-pAkyABlSI9I/V5Vb3h5bgGI/AAAAAAAAEEg/03XLR_fUHfciuaylJJCi1GxDG2Lw9WqVwCLcB/s320/couper.jpg";
                titlesNum++;
                break
            }
        }
    }
}

function removeRelatedDuplicates() {
    var b = new Array(0);
    c = new Array(0);
    e = new Array(0);
    f = new Array(0);
    g = new Array(0);
    for (var a = 0; a < urls.length; a++)
        if (!contains(b, urls[a])) {
            b.length += 1;
            b[b.length - 1] = urls[a];
            c.length += 1;
            c[c.length - 1] = titles[a];
            e.length += 1;
            e[e.length - 1] = timeR[a];
            f.length += 1;
            f[f.length - 1] = thumb[a];
            g.length += 1;
            g[g.length - 1] = commentsNum[a]
        }
    urls = b;
    titles = c;
    timeR = e;
    thumb = f;
    commentsNum = g
}

function contains(b, d) {
    for (var c = 0; c < b.length; c++)
        if (b[c] == d) return true;
    return false
}

function printRelatedLabels(a) {
    var y = a.indexOf("?m=0");
    if (y != -1) a = a.replace(/\?m=0/g, "");
    for (var b = 0; b < urls.length; b++)
        if (urls[b] == a) {
            urls.splice(b, 1);
            titles.splice(b, 1);
            timeR.splice(b, 1);
            thumb.splice(b, 1);
            commentsNum.splice(b, 1)
        }
    var c = Math.floor((titles.length - 1) * Math.random());
    var b = 0;
    if (titles.length == 0) dw += rn;
    else {
        dw += ry;
        dw += "<ul>";
        while (b < titles.length && b < 20 && b < maxresults) {
            if (y != -1) urls[c] = urls[c] + "?m=0";
            if (commentYN == "yes") comments[c] = " - " + commentsNum[c];
            else comments[c] = "";
            dw += '<li><a href="' + urls[c] + '"><div class="bimb"><img src="' + thumb[c].replace(/\/s72\-c/, "/s" + size + "") + '"/><span class="overlay"/></div></a><h3><a href="' + urls[c] + '">' + titles[c] + "</a></h3></li></div>";
            if (c < titles.length - 1) c++;
            else c = 0;
            b++
        }
        dw += "</ul>"
    }
    urls.splice(0, urls.length);
    titles.splice(0, titles.length);
    document.getElementById("related-article").innerHTML = dw
};

function ShowPost1(_19) {
    (function (_4) {
        var _0 = {
            blogURL: "",
            MaxPost: 5,
            idcontaint: "",
            FirstImageSize: 300,
            ImageSize: 300,
            Summarylength: 120,
            animated: false,
            loadingClass: "loadingz",
            pBlank: "http://2.bp.blogspot.com/-RFdFqW5Klsc/UitLuFMcVxI/AAAAAAAADpM/y5UnpsxUSrc/s1600/noimgs.jpg",
            MonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            tagName: true
        };
        _0 = _4["extend"]({}, _0, _19);
        var _8 = _4(_0["idcontaint"]);
        _8["html"]("<div class=\"box-content\"><ul></ul></div>")["addClass"](_0["loadingClass"]);
        _4["get"]((_0["blogURL"] === "" ? window["location"]["protocol"] + "//" + window["location"]["host"] : _0["blogURL"]) + "/feeds/posts/summary" + (_0["tagName"] === false ? "" : "/-/" + _0["tagName"]) + "?max-results=" + _0["MaxPost"] + "&orderby=published&alt=json-in-script", function (_21) {
            var _9, _10, _6, _20, _3, _14, _7, _15, _17, _11, _16, _5, _22, _18, _13 = "",
                _2 = _21["feed"]["entry"];
            for (var _1 = 0; _1 < _2["length"]; _1++) {
                for (var _12 = 0; _12 < _2[_1]["link"]["length"]; _12++) {
                    if (_2[_1]["link"][_12]["rel"] == "alternate") {
                        _9 = _2[_1]["link"][_12]["href"];
                        break
                    }
                };
                for (var _5 = 0; _5 < _12; _5++) {
                    if (_2[_1]["link"][_5]["rel"] == "replies" && _2[_1]["link"][_5]["type"] == "text/html") {
                        _20 = _2[_1]["link"][_5]["title"]["split"](" ")[0];
                        break
                    }
                };
                if ("media$thumbnail" in _2[_1]) {
                    _3 = _2[_1]["media$thumbnail"]["url"]
                } else {
                    _3 = _0["pBlank"]
                };
                if ("content" in _2[_1]) {
                    _6 = _2[_1]["content"]["$t"]
                } else {
                    if ("summary" in _2[_1]) {
                        _6 = _2[_1]["summary"]["$t"]
                    } else {
                        _6 = ""
                    }
                };
                _6 = _6["replace"](/<\S[^>]*>/g, "");
                if (_6["length"] > _0["Summarylength"]) {
                    _6 = _6["substring"](0, _0.Summarylength) + "..."
                };
                if (_2[_1] === _2[0]) {
                    _3 = _3["replace"](/\/s[0-9]+\-c/g, "/s" + _0["FirstImageSize"] + "");
                    if (_3["indexOf"]("i.ytimg.com/vi/") != -1) {
                        _3 = _3["replace"]("default", "0")
                    };
                    _7 = "<p>" + _6 + "</p>"
                } else {
                    _3 = _3["replace"](/\/s[0-9]+\-c/g, "/s" + _0["ImageSize"] + "");
                    _7 = ""
                };
                _10 = _2[_1]["title"]["$t"];
                _18 = _2[_1]["author"][0]["gd$image"]["src"];
                _5 = _2[_1]["published"]["$t"]["substring"](0, 10);
                _15 = _5["substring"](0, 4);
                _17 = _5["substring"](5, 7);
                _11 = _5["substring"](8, 10);
                _16 = _0["MonthNames"][parseInt(_17, 10) - 1];
                _14 = "<a title=\"" + _10 + "\" href=\"" + _9 + "\"><img src=\"" + _3 + "\"/></span></a>";
                j = "<a class=\"more-link\" href=\"" + _9 + "\">Read More</a>";
                _13 += "<li data-scroll-reveal=\"enter bottom and move 70px\">" + _14 + "<div class=\"denz\"></div></li>"
            };
            _4("ul", _8)["append"](_13);
            _4(_0["idcontaint"] + "  li:first-child .uj_thumb")["hover"](function () {
                _4(_0["idcontaint"])["find"](".nb_slide_icon ")["stop"]()["animate"]({
                    top: 0
                }, {
                    queue: false,
                    duration: 300
                })
            }, function () {
                _4(_0["idcontaint"])["find"](".nb_slide_icon ")["stop"]()["animate"]({
                    top: "-60px"
                }, {
                    queue: false,
                    duration: 300
                })
            });
            _8["removeClass"](_0["loadingClass"])
        }, "jsonp")
    })(jQuery)
};

var AnaglyphGlobal = {
    "headerFixedVartiation": "1",
    "slider_on": "1",
    "sliderParam": {
        "sliderParallaxOn": true,
        "slideshowSpeed": "8000",
        "animationSpeed": "1000",
        "directionNav": false,
        "controlNav": true,
        "animationeffectin": "flipInX",
        "animationeffectout": "fadeOutUp"
    }
};
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
$(window).scroll(function (event) {
    didScroll = true;
});
setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > navbarHeight) {
        $('header').removeClass('show-nav').addClass('hide-nav');
        $('.nav-toggle').removeClass('open');
        $('.menu-left').removeClass('collapse');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('hide-nav').addClass('show-nav');
        }
    }
    lastScrollTop = st;
}
//]]>  