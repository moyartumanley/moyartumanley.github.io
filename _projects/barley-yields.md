---
layout: page
title: MN Barley Yields
description: d3.js visualizations from my Data-driven Information Visualizations course.
img: assets/img/barley/barley-2.jpg
importance: 3
category: data visualization
---
My code can be found [here](https://observablehq.com/@mmanley-portfolio/barley-yields)!
The dataset is from Bill Cleveland's book [Visualizing Data](https://www.amazon.com/Visualizing-Data-William-S-Cleveland/dp/0963488406), on barley yields in Minnesota. The dataset below includes the yield from six different sites in Minnesota for 1931 and 1932.

<iframe width="100%" height="492" frameborder="0"
  src="https://observablehq.com/embed/@mmanley-portfolio/moyartu-introduction-to-d3-course-assignment@205?cells=data"></iframe>

---

## Comparing Yield Amounts Via Different Charts
### Barchart
Basic comparison of aggregate yields between sites. Yields are color-coded by year: 1931 - red, 1932 - purple.

<iframe width="100%" height="325" frameborder="0"
  src="https://observablehq.com/embed/@mmanley-portfolio/moyartu-introduction-to-d3-course-assignment@210?cells=bar_legend%2Cbarchart"></iframe>

### Dotplot
Provides an easier way to compare across sites, barley varieties and harvest years. I also wanted to add interactivity to the chart. Overall, the plot shows the spread of yields within each site and the differences between sites. Similar to the barchart above, yields are coded by year: 1931 - red, 1932 - purple.

<iframe width="100%" height="476" frameborder="0"
  src="https://observablehq.com/embed/@mmanley-portfolio/moyartu-introduction-to-d3-course-assignment@210?cells=viewof+order%2Cdot_legend%2Cchart"></iframe>

---
## Barley Species
### Scatterplot with shapes
Marks are limited to the first 6 varieties of Barley since the d3 library on Observable only has six shapes. Adding shapes adds another level of encoding where the viewer can now see the species of barley and its associated yield. However, we lose data for the species that could not be represented by a shape.

  <iframe width="100%" height="465" frameborder="0"
  src="https://observablehq.com/embed/@mmanley-portfolio/moyartu-introduction-to-d3-course-assignment@210?cells=shape_legend%2Cscatterplot"></iframe>