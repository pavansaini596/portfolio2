/**
* Template Name: Personal - v2.1.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";
// theme.js - Add this as a new file
class ThemeManager {
  constructor() {
      this.themes = {
          default: {
              '--primary-color': '#6366F1',
              '--secondary-color': '#A855F7',
              '--tertiary-color': '#EC4899',
              '--bg-primary': '#0F0F1E',
              '--bg-secondary': '#151528'
          },
          ocean: {
              '--primary-color': '#0EA5E9',
              '--secondary-color': '#06B6D4',
              '--tertiary-color': '#14B8A6',
              '--bg-primary': '#0C1222',
              '--bg-secondary': '#111827'
          },
          sunset: {
              '--primary-color': '#F97316',
              '--secondary-color': '#F59E0B',
              '--tertiary-color': '#EF4444',
              '--bg-primary': '#1F1310',
              '--bg-secondary': '#2A1810'
          }
      };
      
      this.init();
  }
  
  init() {
      this.createThemeSwitcher();
      this.loadSavedTheme();
  }
  
  createThemeSwitcher() {
      const switcher = document.createElement('div');
      switcher.className = 'theme-switcher';
      switcher.innerHTML = `
          <button class="theme-btn" data-theme="default" title="Default Theme">
              <i class="fas fa-moon"></i>
          </button>
          <button class="theme-btn" data-theme="ocean" title="Ocean Theme">
              <i class="fas fa-water"></i>
          </button>
          <button class="theme-btn" data-theme="sunset" title="Sunset Theme">
              <i class="fas fa-sun"></i>
          </button>
      `;
      
      document.body.appendChild(switcher);
      
      // Add event listeners
      switcher.querySelectorAll('.theme-btn').forEach(btn => {
          btn.addEventListener('click', () => {
              this.applyTheme(btn.dataset.theme);
          });
      });
  }
  
  applyTheme(themeName) {
      const theme = this.themes[themeName];
      const root = document.documentElement;
      
      Object.entries(theme).forEach(([property, value]) => {
          root.style.setProperty(property, value);
      });
      
      localStorage.setItem('preferred-theme', themeName);
      
      // Update active button
      document.querySelectorAll('.theme-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.theme === themeName);
      });
  }
  
  loadSavedTheme() {
      const savedTheme = localStorage.getItem('preferred-theme') || 'default';
      this.applyTheme(savedTheme);
  }
}
// Add to your existing main.js

// Animated background blobs
function createAnimatedBackground() {
  const animatedBg = document.createElement('div');
  animatedBg.className = 'animated-bg';
  animatedBg.innerHTML = `
      <div class="gradient-blob blob-1"></div>
      <div class="gradient-blob blob-2"></div>
      <div class="gradient-blob blob-3"></div>
  `;
  document.body.prepend(animatedBg);
}

// Particles effect
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  particlesContainer.id = 'particles';
  
  for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
      particlesContainer.appendChild(particle);
  }
  
  document.body.prepend(particlesContainer);
}

// Enhanced cursor effect
function enhancedCursor() {
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  if (!cursor || !cursorFollower) return;
  
  document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(() => {
          cursorFollower.style.left = e.clientX + 'px';
          cursorFollower.style.top = e.clientY + 'px';
      }, 100);
  });
  
  // Magnetic effect on hover
  const magneticElements = document.querySelectorAll('.magnetic');
  
  magneticElements.forEach(elem => {
      elem.addEventListener('mousemove', (e) => {
          const rect = elem.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          elem.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });
      
      elem.addEventListener('mouseleave', () => {
          elem.style.transform = 'translate(0, 0)';
      });
  });
}

// Scroll progress indicator
function createScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + '%';
  });
}

// Enhanced skill bars animation
function enhanceSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const bar = entry.target;
              const width = bar.getAttribute('data-width');
              bar.style.width = width + '%';
              
              // Add shimmer effect
              bar.classList.add('shimmer');
          }
      });
  });
  
  skillBars.forEach(bar => observer.observe(bar));
}

// Text reveal animation
function textRevealAnimation() {
  const splitTexts = document.querySelectorAll('.split-text');
  
  splitTexts.forEach(text => {
      const content = text.textContent;
      text.innerHTML = '';
      
      [...content].forEach((char, index) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.animationDelay = `${index * 0.05}s`;
          span.classList.add('char');
          text.appendChild(span);
      });
  });
}

// Initialize new features
document.addEventListener('DOMContentLoaded', () => {
  createAnimatedBackground();
  createParticles();
  enhancedCursor();
  createScrollProgress();
  enhanceSkillBars();
  textRevealAnimation();
});
// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});
  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');
          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }
// Lazy loading images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounced scroll
window.addEventListener('scroll', debounce(() => {
    // Your scroll functions
}, 16));
  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

})(jQuery);