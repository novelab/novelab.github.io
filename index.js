// all specific code dedicated to the index.html page

initParalax = function() {
  var controller = $.superscrollorama();
  controller.addTween('#title1', TweenMax.from( $('#title1'), .25, {css:{right:'2000px'}, ease:Quad.easeInOut}));
  controller.addTween('#title2', TweenMax.from( $('#title2'), .25, {css:{right:'2000px'}, ease:Quad.easeInOut}));
  controller.addTween('#title3', TweenMax.from( $('#title3'), .25, {css:{right:'2000px'}, ease:Quad.easeInOut}));
  controller.addTween('#we_do', TweenMax.from( $('#we_do'), .5, {css:{opacity: 0}}));

}

initLogo = function() {
  var width = 500,
      height = 300;

  var color = d3.scale.category20();

  var force = d3.layout.force()
      .charge(-120)
      .linkDistance(80)
      .size([width, height]);

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
        .style("stroke-width", function(d) { return Math.sqrt(d.value); });

    var node = svg.selectAll(".node")
        .data(graph.nodes)
      .enter().append("circle")
        .attr("class", "node")
        .attr("r", function(d) { if (d.group == 1) return 20; return 30 })
        .style("fill", function(d) { if (d.group == 1) return "#005B63"; return "#005B63"; })
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
