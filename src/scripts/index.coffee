# 
# Global Constants
# 

HEADER_HEIGHT = 100

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

setupSlideShow = ->
  $('.slide-show-arrow-left').click prevSlide
  $('.slide-show-arrow-right').click nextSlide
  $(window).on 'keyup', (e) ->
    if e.which is rightArrow = 39
      nextSlide()
    else if e.which is rightArrow = 37
      prevSlide()
  $('ul.slide-show-dots li').click -> showSlide $(@).index()

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
  setupSlideShow()
  setInterval nextSlide, 7000

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

setupPopLockRightIndex = ->
  
  popLockIndex = ->
    proceduresFloor = $('.left-procedures-container').height() - 
                      $('.right-procedure-index').height()
    pxFromTop = $(window).scrollTop() + HEADER_HEIGHT - 
                $('.left-procedures-container').offset().top
    $('.right-procedure-index').css(
      "margin-top": Math.max Math.min(pxFromTop, proceduresFloor), 0
    )
  
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
# Press / Testomonials
# 
pressTestomonials = ->
  $('#press-testomonials-link').addClass 'active'


# 
# Contact
# 
contact = ->
  map = new GMaps
    div: '#contact-gmaps'
    lat: 40.772164
    lng: -73.967136
  map.addMarker
    lat: 40.772164
    lng: -73.967136
    title: 'JTav Clinical Skin Care'

# 
# Generic Setup
# 
  
$ ->
  
  # Attach browser targeting class to body
  $('body').addClass if navigator.userAgent.match /Firefox/
                       'moz'
                     else if navigator.userAgent.match /WebKit/
                       'webkit'
                     else if navigator.userAgent.match /MSIE/
                       'msie'
  
  # Load page specific code
  index() if location.pathname.match(/index/) or location.pathname is '/'
  about() if location.pathname.match /about/
  procedures() if location.pathname.match /procedures/
  pressTestomonials() if location.pathname.match /press-test/
  contact() if location.pathname.match /contact/
  
  # Procedures dropdown
  $('#procedures-link').click -> $("#procedures-list").toggle()