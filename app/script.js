$(function () {
  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger0",
    offset: $(window).height() / 2 + 10,
  })
    .setTween("#pinned-element0", 2.5, { backgroundColor: "transparent", scale: 0.5 }) // trigger a TweenMax.to tween
    .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
    .addTo(controller);

  var blockTween = new TweenMax.to('#pinned-trigger1', 1.5, {
    backgroundColor: '#cf3535'
  });
  new ScrollMagic.Scene({
    triggerElement: '#pinned-trigger1',
    // offset: 100, // start scene after scrolling for 100px
    // duration: 400 // pin the element for 400px of scrolling
    duration: $(window).height() - 200, // pin element for the window height - 1
    // triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    // reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
    .setTween(blockTween)
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: "#pinned-trigger2" })
    .setTween("#pinned-trigger2 > div", { y: "80%", ease: Linear.easeNone })
    .addIndicators()
    .addTo(controller);

  var tween = TweenMax.to(".box", 0.5, { scale: 2, rotation: 0, ease: Linear.easeNone });

  new ScrollMagic.Scene({ triggerElement: "#pinned-trigger3", duration: 100, offset: 100 })
    .setTween(tween)
    // .setPin("#box1")
    .addIndicators({ name: "resize" }) // add indicators (requires plugin)
    .addTo(controller);

  // new ScrollMagic.Scene({ triggerElement: "#pinned-trigger4" })
  //   // trigger animation by adding a css class
  //   .setClassToggle("#animate1", "zap")
  //   .addIndicators({ name: "1 - add a class" }) // add indicators (requires plugin)
  //   .addTo(controller);

  var eles = document.querySelectorAll("#bar1,#bar2,#bar3")
  var tween = TweenMax.fromTo(eles, 1, { scaleY: 0 }, { scaleY: 1, ease: Linear.easeNone });
  new ScrollMagic.Scene({ triggerElement: "#pinned-trigger4", duration: 200, offset: 50 })
    .setTween(tween)
    // .setPin("#box1")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  var eles = document.querySelectorAll("#dia2 rect[fill='#81c904']");
  var tween = TweenMax.to(eles, 1, { fill: '#7e36fb', ease: Linear.easeNone });
  new ScrollMagic.Scene({ triggerElement: "#pinned-trigger5", duration: 400, offset: 50 })
    .setTween(tween)
    // .setPin("#box1")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);



  var eles = document.querySelectorAll("#pinned-element6");
  var tween = TweenMax.fromTo(eles, 1, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone });
  new ScrollMagic.Scene({ triggerElement: "#pinned-trigger6", duration: 400, offset: 50 })
    .setTween(tween)
    // .setPin("#box1")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


  var eles = document.querySelectorAll("#last-svg");
  var tween = TweenMax.fromTo(eles, 1, { scale: 0.1 }, { scale: 1.1, ease: Linear.easeNone });
  new ScrollMagic.Scene({ triggerElement: "#pinned-trigger7", duration: 400, offset: 50 })
    .setTween(tween)
    // .setPin("#box1")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

});