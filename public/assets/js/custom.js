// JavaScript Document
$(".banner-slider").owlCarousel({
	//animateOut: 'fadeOut',
	autoplay: true,
	lazyLoad: true,
	dots: true,
	margin: 30,
	nav: true,
	navText: ['',''],
	loop: true,
	responsiveClass: true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		},
		1170:{
			items:1
		}
	}
});

// JavaScript Document
$(document).ready(function() {
	$(".tab-content ul li a").click(function() {
		$('.tab-content ul li a').removeClass();
		$(this).addClass('select');
		var index = $('.tab-content ul li a').index($(this));
		$('.tab-details > div').hide();
		$('.tab-details > div').filter(':eq(' + index + ')').show();
  	});
});

// file
$(document).ready(function() {
	var app = new Vue({
		el: '#app',
		data: {
		  files: [],
		  color: '#444444',
		},
		methods: {
		  handleFileDrop(e) {
			let droppedFiles = e.dataTransfer.files;
			if(!droppedFiles) return;
			// this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
			([...droppedFiles]).forEach(f => {
		  
		  this.files.push(f);
			});
			this.color="#444444"
		  },
		  handleFileInput(e) {
			let files = e.target.files;
			files = e.target.files
				  if(!files) return;
			// this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
			([...files]).forEach(f => {
		  
		  this.files.push(f);
			});
		  },
		  removeFile(fileKey){
			this.files.splice(fileKey, 1)
		  },
		  fileDragIn(){
			// alert("oof")
			// alert("color")
			this.color="white"
		  },
		  fileDragOut(){
			this.color="#444444"
		  }
		}
	  })
});
// file end

// JavaScript Document
$(".help-slider").owlCarousel({
	//animateOut: 'fadeOut',
	autoplay: false,
	lazyLoad: true,
	dots: true,
	margin: 30,
	nav: false,
	navText: ['',''],
	loop: true,
	responsiveClass: true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		},
		1170:{
			items:1
		}
	}
});

// JavaScript Document
$(".product-banner-slider01").owlCarousel({
	animateOut: 'fadeOut',
	autoplay: true,
	lazyLoad: true,
	dots: true,
	margin: 10,
	nav: false,
	navText: ['',''],
	loop: true,
	responsiveClass: true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		},
		1170:{
			items:1
		}
	}
});

// JavaScript Document
$(".products-slider01").owlCarousel({
	//animateOut: 'fadeOut',
	//autoplay: true,
	lazyLoad: true,
	dots: true,
	margin: 0,
	nav: true,
	navText: ['',''],
	loop: true,
	responsiveClass: true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		},
		1170:{
			items:4
		}
	}
});

// JavaScript Document
$(".services-slider01").owlCarousel({
	//animateOut: 'fadeOut',
	//autoplay: true,
	lazyLoad: true,
	dots: false,
	margin: 0,
	nav: false,
	navText: ['',''],
	loop: false,
	responsiveClass: true,
	responsive:{
		0:{
			items:1,
			autoplay: true,
			dots: true,
			loop: true
		},
		600:{
			items:3,
			autoplay: true,
			dots: true,
			loop: true
		},
		1000:{
			items:5,
			autoplay: true,
			dots: true,
			loop: true
		},
		1170:{
			items:6
		}
	}
});

// JavaScript Document
$(".e-slider").owlCarousel({
	//animateOut: 'fadeOut',
	autoplay: true,
	lazyLoad: true,
	dots: false,
	margin: 30,
	nav: true,
	navText: ['',''],
	loop: true,
	responsiveClass: true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:2
		},
		1170:{
			items:3
		}
	}
});

// JavaScript Document
(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-number'));

// JavaScript Document
var div_top = $('.nav-section').offset().top;

$(window).scroll(function() {
    var window_top = $(window).scrollTop() - 0;
    if (window_top > div_top) {
        if (!$('.nav-section').is('.sticky')) {
            $('.nav-section').addClass('sticky');
        }
    } else {
        $('.nav-section').removeClass('sticky');
    }
});