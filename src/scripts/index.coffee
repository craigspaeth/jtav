index = ->
  map = new GMaps
    div: '#home-gmaps'
    lat: 40.772164
    lng: -73.967136
  map.addMarker
    lat: 40.772164
    lng: -73.967136
    title: 'JTav Clinical Skin Care'
    
about = ->
  $('#about-link').addClass 'active'
  
procedures = ->
  
  showSlide = (i) ->
    $("ul.slide-show li:eq(#{i})")
      .addClass('active').siblings().removeClass('active')
    $("ul.slide-show-dots li:eq(#{i})")
      .addClass('active').siblings().removeClass('active')
  
  nextSlide = ->
    index = $("ul.slide-show li.active").index() + 1
    showSlide if index >= $("ul.slide-show li").length then 0 else index
  
  prevSlide = ->
    index = $("ul.slide-show li.active").index() - 1
    showSlide if index >= (len = $("ul.slide-show li").length) then len else index
  
  $('.slide-show-arrow-left').click prevSlide
  $('.slide-show-arrow-right').click nextSlide
  $(window).on 'keyup', (e) ->
    if e.which is rightArrow = 39
      nextSlide()
    else if e.which is rightArrow = 37
      prevSlide()
    
$ ->
  
  # Load page specific code
  index() if window.location.pathname.match /index/
  about() if window.location.pathname.match /about/
  procedures() if window.location.pathname.match /procedures/
  
  # Procedures dropdown
  $('#procedures-link').click -> $("#procedures-list").toggle()