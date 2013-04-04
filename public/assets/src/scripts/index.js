(function() {
  var HEADER_HEIGHT, about, contact, index, nextSlide, pressTestomonials, prevSlide, procedures, setupPopLockRightIndex, setupSlideShow, showSlide;

  HEADER_HEIGHT = 100;

  showSlide = function(i) {
    $("ul.slide-show li:eq(" + i + ")").addClass('active').siblings().removeClass('active');
    return $("ul.slide-show-dots li:eq(" + i + ")").addClass('active').siblings().removeClass('active');
  };

  nextSlide = function() {
    var index;
    index = $("ul.slide-show li.active").index() + 1;
    return showSlide(index >= $("ul.slide-show li").length ? 0 : index);
  };

  prevSlide = function() {
    var index, len;
    index = $("ul.slide-show li.active").index() - 1;
    return showSlide(index >= (len = $("ul.slide-show li").length) ? len : index);
  };

  setupSlideShow = function() {
    $('.slide-show-arrow-left').click(prevSlide);
    $('.slide-show-arrow-right').click(nextSlide);
    $(window).on('keyup', function(e) {
      var rightArrow;
      if (e.which === (rightArrow = 39)) {
        return nextSlide();
      } else if (e.which === (rightArrow = 37)) {
        return prevSlide();
      }
    });
    return $('ul.slide-show-dots li').click(function() {
      return showSlide($(this).index());
    });
  };

  index = function() {
    var map;
    map = new GMaps({
      div: '#home-gmaps',
      lat: 40.772164,
      lng: -73.967136
    });
    map.addMarker({
      lat: 40.772164,
      lng: -73.967136,
      title: 'JTav Clinical Skin Care'
    });
    setupSlideShow();
    return setInterval(nextSlide, 7000);
  };

  about = function() {
    return $('#about-link').addClass('active');
  };

  procedures = function() {
    setupSlideShow();
    return setupPopLockRightIndex();
  };

  setupPopLockRightIndex = function() {
    var highlightIndex, onClickIndexItem, popLockIndex;
    popLockIndex = function() {
      var proceduresFloor, pxFromTop;
      proceduresFloor = $('.left-procedures-container').height() - $('.right-procedure-index').height();
      pxFromTop = $(window).scrollTop() + HEADER_HEIGHT - $('.left-procedures-container').offset().top;
      return $('.right-procedure-index').css({
        "margin-top": Math.max(Math.min(pxFromTop, proceduresFloor), 0)
      });
    };
    highlightIndex = function() {
      var el, viewportTop, _i, _len, _ref;
      _ref = $('[data-waypoint-index]').toArray().reverse();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        el = _ref[_i];
        viewportTop = $(window).scrollTop() + HEADER_HEIGHT + 25;
        index = $(el).data('waypoint-index');
        if (viewportTop > $(el).offset().top) {
          break;
        }
      }
      return $(".right-procedure-index .index-items > *:eq(" + index + ")").addClass('highlight').siblings().removeClass('highlight');
    };
    onClickIndexItem = function(e) {
      return $(window).scrollTop($("[data-waypoint-index=" + ($(e.target).index()) + "]").offset().top - HEADER_HEIGHT - 20);
    };
    $(window).on('scroll', popLockIndex);
    $(window).on('scroll', highlightIndex);
    return $('.right-procedure-index .index-items >  *').click(onClickIndexItem);
  };

  pressTestomonials = function() {
    return $('#press-testomonials-link').addClass('active');
  };

  contact = function() {
    var map;
    map = new GMaps({
      div: '#contact-gmaps',
      lat: 40.772164,
      lng: -73.967136
    });
    return map.addMarker({
      lat: 40.772164,
      lng: -73.967136,
      title: 'JTav Clinical Skin Care'
    });
  };

  $(function() {
    $('body').addClass(navigator.userAgent.match(/Firefox/) ? 'moz' : navigator.userAgent.match(/WebKit/) ? 'webkit' : navigator.userAgent.match(/MSIE/) ? 'msie' : void 0);
    if (location.pathname.match(/index/) || location.pathname === '/') {
      index();
    }
    if (location.pathname.match(/about/)) {
      about();
    }
    if (location.pathname.match(/procedures/)) {
      procedures();
    }
    if (location.pathname.match(/press-test/)) {
      pressTestomonials();
    }
    if (location.pathname.match(/contact/)) {
      contact();
    }
    return $('#procedures-link').click(function() {
      return $("#procedures-list").toggle();
    });
  });

}).call(this);
