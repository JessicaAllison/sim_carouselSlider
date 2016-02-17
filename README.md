# sim_carouselSlider

## What is sim_carouselSlider
sim_carouselSlider is an easy to use carousel with a sliding effect. There are many settings to choose from, but it looks just fine without configuring any settings. Feel free to read through [sim_carouselSlider.js](https://github.com/JessicaAllison/sim_carouselSlider/blob/master/sim_carouselSlider.js). It's filled with comments making it easier than ever to understand.

**It's created purely with JavaScript.**

## Basic Usage
Basic Usage without any setting configurations.
```JavaScript
<div id="mySlider">
	<div class="sliderClass">First Slide</div>
	<div class="sliderClass">Second Slide</div>
	<div class="sliderClass">Third Slide</div>
	// However many slides your'd like to include...
</div>

// Make sure to add the following line anywhere after the slider initilization.
<script src='sim_carouselSlider.js'></script>

<script>
    var mySlides = document.getElementsByClassName('sliderClass');
    var simSld = new sim_carouselSlider(mySlides);
</script>
````

## Configuration
| Option | Description | Default |
| --- | --- | --- |
| `tabWrapperClass` | Set the class name of 'tabWrapper' | `"" (Empty String)` |
| `tabClass` | Set the class name of 'tabClass' | `"" (Empty String)` |
| `tabUnderlinerClass` | Set the class name of 'tabUnderlinerClass' | `"" (Empty String)` |
| `slidesWrapperClass` | Set the class name of 'slidesWrapperClass' | `"" (Empty String)` |
| `slidesClass` | Set the class name of 'slidesClass' | `"" (Empty String)` |
| `tabTitles` | Set the title names of the tabs | `1 - slides length (Accepts an array. Ex. ["First", "Second", "Third"]` |
| `tabUnderlinerColor` | Set the tab underline (selected tab) color | `"green" (Accepts any css type color format in a string)` |
| `animation` | Set css style animation | `"transform 0.7s cubic-bezier(0.45, 0.05, 0.55, 0.95)" (Accepts any css type transition value in a string)` |
| `beforeSlide` | Callback before the slide happens | `Empty Function` |
| `slide` | Callback while slide is happeneing | `Empty Function` |


## Examples

######Set class names
```JavaScript
var simSld_class = new sim_carouselSlider(mySlides, {
    tabWrapperClass: "myTabWrapper",
    tabClass: "myTab",
    tabUnderlinerClass: "tabUnderliner",
    slidesWrapperClass: "slidesWrapper",
    slidesClass: "slides"
});
```

######Set tab titles
```JavaScript
var simSld_titles = new sim_carouselSlider(mySlides, {
    tabTitles: ["First", 2, "3rd"]
});
```
######Set selected tab underliner
```JavaScript
var simSld_tabUnderliner = new sim_carouselSlider(mySlides, {
    tabUnderlinerColor: "orange" // Accepted Input Formats: "#ff0000", "rgb(50, 20, 255)", "rgba(80, 255, 50, .5)", "hsl(120, 100%, 75%)", "hsla(120, 100%, 25%, 0.3)"
});
```
######Set sliders animation
```JavaScript
var simSld_animation = new sim_carouselSlider(mySlides, {
    animation: 'transform 0.7s ease-in-out'
});
```
######Set Callback functions
```JavaScript
var simSld_callBacks = new sim_carouselSlider(mySlides, {
    beforeSlide: function (element) {
        // element = Slide that will come
    },
    slide: function (element) {
        // element = Slide that will come
    }
});
```

## Playground
**[JSFiddle](https://jsfiddle.net/chpaa0o5/)**
