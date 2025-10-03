import Alpine from 'alpinejs';

// Alpine.js components
Alpine.data('navigation', () => ({
  isOpen: false,
  toggle() {
    this.isOpen = !this.isOpen;
  },
  close() {
    this.isOpen = false;
  }
}));

Alpine.data('contactForm', () => ({
  formData: {
    name: '',
    email: '',
    message: ''
  },
  isSubmitting: false,
  isSubmitted: false,
  errors: {},
  
  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },
  
  validate() {
    this.errors = {};
    
    if (!this.formData.name.trim()) {
      this.errors.name = 'Name is required';
    }
    
    if (!this.formData.email.trim()) {
      this.errors.email = 'Email is required';
    } else if (!this.validateEmail(this.formData.email)) {
      this.errors.email = 'Please enter a valid email';
    }
    
    if (!this.formData.message.trim()) {
      this.errors.message = 'Message is required';
    }
    
    return Object.keys(this.errors).length === 0;
  },
  
  async submitForm() {
    if (!this.validate()) return;
    
    this.isSubmitting = true;
    
    try {
      // Simulate form submission - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.isSubmitted = true;
      this.formData = { name: '', email: '', message: '' };
      
      // Track form submission with Plausible
      if (window.plausible) {
        window.plausible('Form Submission', {
          props: { form: 'contact' }
        });
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      this.errors.submit = 'Something went wrong. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}));

Alpine.data('blogShare', () => ({
  shareUrl: '',
  shareTitle: '',
  
  init() {
    this.shareUrl = window.location.href;
    this.shareTitle = document.title;
  },
  
  shareTwitter() {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.shareUrl)}&text=${encodeURIComponent(this.shareTitle)}`;
    window.open(url, '_blank', 'width=600,height=400');
    
    if (window.plausible) {
      window.plausible('Share', { props: { platform: 'twitter' } });
    }
  },
  
  shareLinkedIn() {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
    
    if (window.plausible) {
      window.plausible('Share', { props: { platform: 'linkedin' } });
    }
  },
  
  copyLink() {
    navigator.clipboard.writeText(this.shareUrl).then(() => {
      // Show success message
      this.$dispatch('link-copied');
      
      if (window.plausible) {
        window.plausible('Share', { props: { platform: 'copy-link' } });
      }
    });
  }
}));

// Initialize Alpine
window.Alpine = Alpine;
Alpine.start();

// Additional utility functions
window.trackEvent = function(eventName, props = {}) {
  if (window.plausible) {
    window.plausible(eventName, { props });
  }
};

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});