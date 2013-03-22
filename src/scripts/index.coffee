# 
# Global Constants
# 
HEADER_HEIGHT = 100

# 
# Home page
#

index = ->
  map = new GMaps
    div: '#home-gmaps'
    lat: 40.772164
    lng: -73.967136
  map.addMarker
    lat: 40.772164
    lng: -73.967136
    title: 'JTav Clinical Skin Care'


# 
# About page
# 
    
about = ->
  $('#about-link').addClass 'active'

# 
# Procedures
# 

procedures = ->
  setupSlideShow()
  setupPopLockRightIndex()

setupSlideShow = ->
  
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

setupPopLockRightIndex = ->
  
  popLockIndex = ->
    diff = $(window).scrollTop() + HEADER_HEIGHT - 
           $('.left-procedures-container').offset().top
    $('.right-procedure-index').css "margin-top": if diff > 0 then diff else 0
    
  highlightIndex = ->
    for el in $('[data-waypoint-index]').toArray().reverse()
      viewportTop = $(window).scrollTop() + HEADER_HEIGHT + 25
      index = $(el).data('waypoint-index'); break if viewportTop > $(el).offset().top
    $(".right-procedure-index .index-items > *:eq(#{index})")
      .addClass('highlight').siblings().removeClass('highlight')
      
  onClickIndexItem = (e) ->
    $(window).scrollTop(
      $("[data-waypoint-index=#{$(e.target).index()}]").offset().top - HEADER_HEIGHT - 20
    )
    
  $(window).on 'scroll', popLockIndex
  $(window).on 'scroll', highlightIndex
  $('.right-procedure-index .index-items >  *').click onClickIndexItem
  
# 
# Generic Setup
# 
  
$ ->
  
  # Load page specific code
  index() if window.location.pathname.match /index/
  about() if window.location.pathname.match /about/
  procedures() if window.location.pathname.match /procedures/
  
  # Procedures dropdown
  $('#procedures-link').click -> $("#procedures-list").toggle()