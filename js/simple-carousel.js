/**
 * Created by grinderspro on 06.09.14. <grinderspro@gmail.com>
 */

var simpleCarousel = {

    // Grobal
    currentSlide: 0,
    currentStep: 0,
    itemStep: 1,
    itemWidth: 0,
    itemMargin: 0,
    itemHeight: 100,
    pageCount: 0,
    stepCount: 0,
    animationSpeed: 300,
    slideCount: 4,
    test: 0,

    init: function() {
        var self = this;

        this.pageCount = $('.simpleCarouselList').children().size();
        this.stepCount = this.pageCount - this.slideCount;

        $('#next_slide').on('click', function () {
            self.nextSlide();
        });

        $('#prev_slide').on('click', function() {
            self.prevSlide();
        });
    },

    nextSlide: function() {

        this.currentStep++;

        if (this.currentStep > this.stepCount) {
            this.currentStep = 0;
        }

        $('.simpleCarouselList').animate({
            top: -(this.currentStep * 100) * this.itemStep
        }, this.animationSpeed);

    },

    prevSlide: function() {

        this.currentStep--;

        if (this.currentStep < 0) {

            if (this.slideCount > this.pageCount) {
                this.currentStep = 0;
            } else {
                this.currentStep = this.pageCount - this.slideCount;
            }

        }

        $('.simpleCarouselList').animate({
            top: -(this.currentStep * 100) * this.itemStep
        }, this.animationSpeed);

    }

}

simpleCarousel.init();
