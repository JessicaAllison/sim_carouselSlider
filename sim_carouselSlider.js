function sim_carouselSlider(slides, config) {

    /* ----------------------------------- */
    /* -------- Variable Creation -------- */
    /* ----------------------------------- */
    // Create variables
    var currentThis = this,
        slidesWidth = slides[0].offsetWidth,
        parentElem = slides[0].parentNode,
        slideLength = slides.length,

        // Create Elements
        slidesWrapper = document.createElement('div'),
        tabWrapper = document.createElement('div'),
        tabUnderliner = document.createElement('div');

    /* ---------------------------------- */
    /* ------- Configure Settings ------- */
    /* ---------------------------------- */
    // Default Paramater
    if (config === undefined) config = {};
    currentThis.config = {
        // Class Names
        tabWrapperClass: (config.tabWrapperClass || ''),
        tabClass: (config.tabClass || ''),
        tabUnderlinerClass: (config.tabUnderlinerClass || ''),
        slidesWrapperClass: (config.slidesWrapperClass || ''),
        slidesClass: (config.slidesClass || ''),

        // Tab Properties
        tabTitles: (config.tabTitles),
        tabUnderlinerColor: (config.tabUnderlinerColor || 'green'),

        // Other
        animation: (config.animation || 'transform 0.7s cubic-bezier(0.45, 0.05, 0.55, 0.95)'),

        // Callbacks
        beforeSlide: (config.beforeSlide || emptyFunction),
        slide: (config.slide || emptyFunction)
    };

    /* ------------------------------------ */
    /* ---------- Empty Function ---------- */
    /* ------------------------------------ */
    function emptyFunction() {

    }

    /* ------------------------------------------ */
    /* ----- Handle Slider Change/Animation ----- */
    /* ------------------------------------------ */
    function slideChange(e) {
        // Create Variable
        var targetIndex = Array.prototype.indexOf.call(tabWrapper.children, e.target);

        // Call 'beforeSlide' Callback
        currentThis.config.beforeSlide(slides[targetIndex]);
        // Apply Animation
        slidesWrapper.style.transform = 'translateX(-' + (targetIndex * (100 / slideLength)) + '%)';
        tabUnderliner.style.transform = 'translateX(' + (targetIndex * 100) + '%)';

        // Call 'slide' Callback
        currentThis.config.slide(slides[targetIndex]);
    }

    /* ---------------------------------- */
    /* ------ Initialize simSlider ------ */
    /* ---------------------------------- */
    function initSimSlider() {
        while (slides.length) {
            // Slide Settings
            slides[0].className += ' ' + currentThis.config.slidesClass; // Reason for slides[0] and not [i], see: http://stackoverflow.com/a/35260734/4861207
            slidesWrapper.appendChild(slides[0]);

            // Create and Style Tabs
            var tab = document.createElement('div');
            tab.style.width = (100 / slideLength) + '%';
            tab.style.cursor = 'pointer';
            tab.style.textAlign = 'center';

            if (currentThis.config.tabClass) tab.className = currentThis.config.tabClass;

            tab.innerHTML = (currentThis.config.tabTitles ? currentThis.config.tabTitles[slideLength - slides.length - 1] : slideLength - slides.length);
            tabWrapper.appendChild(tab);
        }

        // Add Class Names
        // Reason for if-statements: If className is empty, the HTML will have the attribute 'class' with no value.
        if (currentThis.config.tabWrapperClass) tabWrapper.className = currentThis.config.tabWrapperClass;
        if (currentThis.config.tabUnderlinerClass) tabUnderliner.className = currentThis.config.tabUnderlinerClass;
        if (currentThis.config.slidesWrapperClass) slidesWrapper.className = currentThis.config.slidesWrapperClass;

        // Add Event
        tabWrapper.addEventListener("click", function(e) {
            slideChange(e);
        });

        // Apply CSS Rules
        tabUnderliner.style.transition = currentThis.config.animation;
        tabUnderliner.style.width = (100 / slideLength) + '%';
        tabUnderliner.style.height = '3px';
        tabUnderliner.style.backgroundColor = currentThis.config.tabUnderlinerColor;

        slidesWrapper.style.display = tabWrapper.style.display = 'flex';
        slidesWrapper.style.transition = currentThis.config.animation;
        slidesWrapper.style.width = slideLength * slidesWidth + 'px';

        parentElem.style.overflow = 'hidden';
        parentElem.style.width = slidesWidth + 'px';

        // Add Element to DOM
        parentElem.appendChild(tabWrapper);
        parentElem.appendChild(tabUnderliner);
        parentElem.appendChild(slidesWrapper);
    }

    /* ---------------------------------- */
    /* -------- Inital Rendering -------- */
    /* ---------------------------------- */
    initSimSlider();
}
