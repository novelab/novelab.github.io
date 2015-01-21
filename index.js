// all specific code dedicated to the index.html page

initParalax = function() {
  var controller = $.superscrollorama();
  controller.addTween('#title1', TweenMax.from( $('#title1'),.3,{css:{right:'2000px'},ease:Quad.easeInOut}),0,-300);
  controller.addTween('#title2', TweenMax.from( $('#title2'), .3,{css:{right:'2000px'},ease:Quad.easeInOut}),0,-300);
  controller.addTween('#title3', TweenMax.from( $('#title3'), .3,{css:{right:'2000px'},ease:Quad.easeInOut}),0,-300);
  controller.addTween('#we_do', TweenMax.from( $('#we_do'), .5,{css:{opacity: 0}}));
  controller.addTween('#our_projects', TweenMax.from($('#our_projects'), .5,{css:{opacity: 0}}));
  controller.addTween('#reference', TweenMax.from( $('#reference'), .5, {css:{opacity: 0}}),0,-300);;
  controller.addTween('#contact_us', TweenMax.from( $('#contact_us'), .5, {css:{opacity: 0}}));
}

/*initParalax = function() {
  var controller = $.superscrollorama();
  controller.addTween('#title1', TweenMax.from( $('#title1'), .5, {css:{right:'2000px'}, ease:Quad.easeInOut}));
  controller.addTween('#title2', TweenMax.from( $('#title2'), .5, {css:{right:'2000px'}, ease:Quad.easeInOut}));
  controller.addTween('#title3', TweenMax.from( $('#title3'), .5, {css:{right:'2000px'}, ease:Quad.easeInOut}));
  controller.addTween('#we_do', TweenMax.from( $('#we_do'), .5, {css:{opacity: 0}}));
}*/

initLogo = function() {
  var width = $(window).width();
  var height =$(window).height()/2;
  var logo_size = Math.min(height/10., 30.);

  var color = d3.scale.category20();

  var force = d3.layout.force()
      .charge(-logo_size*4)
      .linkDistance(logo_size*3)
      .size([width, height]);

  d3.select("svg")
      .remove();

  var svg = d3.select("#logo").append("svg")
      .attr("width", width)
      .attr("height", height);

  d3.json("lan.json", function(error, graph) {
    force
        .nodes(graph.nodes)
        .links(graph.links)
        .start();

    var link = svg.selectAll(".link")
        .data(graph.links)
      .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function(d) { return logo_size/3.; });

    var node = svg.selectAll(".node")
        .data(graph.nodes)
      .enter().append("circle")
        .attr("class", "node")
        .attr("r", function(d) { if (d.group == 1) return logo_size*2/3.; return logo_size })
        .style("fill", function(d) { if (d.group == 1) return "#00A5A6"; return "#00A5A6"; }) //"#005B63
        .call(force.drag);

    node.append("title")
        .text(function(d) { return d.name; });

    force.on("tick", function() {
      link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    });
  });
}

window.addEventListener('orientationchange', initLogo);
window.addEventListener('resize', initLogo);

initSlide = function() {
  $('#slides').slidesjs({
    width: 1920,
    height: 600,
    play: {
      active: false,
      auto: true,
      interval: 3000,
      swap: true,
      pauseOnHover: true,
      restartDelay: 2500
    },
    pagination: {
      active: false,
      effect: "slide"
    },
    navigation: false
  });
}

    function changeImage(dir) {
        var img = document.getElementById("imgClickAndChange");
        img.src = imgs[imgs.indexOf(img.src) + (dir || 1)] || imgs[dir ? imgs.length - 1 : 0];
    }

    document.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
            changeImage(-1) //left <- show Prev image
        } else if (e.keyCode == '39') {
            // right -> show next image
            changeImage()
        }
    }