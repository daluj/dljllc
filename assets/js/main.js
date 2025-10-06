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
    phonePrefix: '+1',
    phone: '',
    company: '',
    message: '',
    timeline: ''
  },
  isSubmitting: false,
  isSubmitted: false,
  turnstileVerified: false,
  turnstileToken: '',
  errors: {},
  
  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },
  
  validatePhone(phone) {
    // Remove all non-digit characters for validation
    const cleanPhone = phone.replace(/\D/g, '');
    // Basic validation: should have at least 7 digits
    return cleanPhone.length >= 7 && cleanPhone.length <= 15;
  },
  
  validatePhonePrefix(prefix) {
    // Basic validation for phone prefix: should start with + and contain digits
    const cleanPrefix = prefix.trim();
    return /^\+\d{1,4}$/.test(cleanPrefix);
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
    
    if (!this.formData.phonePrefix.trim()) {
      this.errors.phone = 'Phone prefix is required';
    } else if (!this.validatePhonePrefix(this.formData.phonePrefix)) {
      this.errors.phone = 'Please enter a valid phone prefix (e.g., +1)';
    } else if (!this.formData.phone.trim()) {
      this.errors.phone = 'Phone number is required';
    } else if (!this.validatePhone(this.formData.phone)) {
      this.errors.phone = 'Please enter a valid phone number';
    }
    
    if (!this.formData.message.trim()) {
      this.errors.message = 'Message is required';
    }
    
    if (!this.formData.timeline) {
      this.errors.timeline = 'Please select a timeline';
    }
    
    if (!this.turnstileVerified || !this.turnstileToken) {
      this.errors.turnstile = 'Please complete the security verification';
    }
    
    return Object.keys(this.errors).length === 0;
  },
  
  async submitForm() {
    if (!this.validate()) return;
    
    this.isSubmitting = true;
    
    try {
      // Prepare form data with Turnstile token
      const formPayload = {
        name: this.formData.name,
        email: this.formData.email,
        phone: `${this.formData.phonePrefix}${this.formData.phone}`,
        company: this.formData.company,
        message: this.formData.message,
        timeline: this.formData.timeline,
        'cf-turnstile-response': this.turnstileToken
      };
      
      // Submit form to backend API
      const response = await fetch('https://app.davidluengojuarez.com/webhook/new-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      this.isSubmitted = true;
      this.formData = { name: '', email: '', phonePrefix: '+1', phone: '', company: '', message: '', timeline: '' };
      this.turnstileVerified = false;
      this.turnstileToken = '';
      
      // Reset Turnstile widget
      if (window.turnstile) {
        window.turnstile.reset();
      }
      
      // Track form submission with Plausible
      if (window.plausible) {
        window.plausible('Form Submission', {
          props: { form: 'contact' }
        });
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Set appropriate error message based on error type
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        this.errors.submit = 'Network error. Please check your connection and try again.';
      } else if (error.message.includes('HTTP error')) {
        this.errors.submit = 'Server error. Please try again later.';
      } else {
        this.errors.submit = 'Something went wrong. Please try again.';
      }
      
      // Reset Turnstile widget on error
      if (window.turnstile) {
        window.turnstile.reset();
        this.turnstileVerified = false;
        this.turnstileToken = '';
      }
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

// Turnstile callback functions
window.onTurnstileCallback = function(token) {
  // Find the Alpine component instance
  const formElement = document.querySelector('[x-data="contactForm"]');
  if (formElement && formElement._x_dataStack) {
    const component = formElement._x_dataStack[0];
    component.turnstileToken = token;
    component.turnstileVerified = true;
    component.errors.turnstile = '';
  }
};

window.onTurnstileError = function() {
  const formElement = document.querySelector('[x-data="contactForm"]');
  if (formElement && formElement._x_dataStack) {
    const component = formElement._x_dataStack[0];
    component.turnstileVerified = false;
    component.turnstileToken = '';
    component.errors.turnstile = 'Security verification failed. Please try again.';
  }
};

window.onTurnstileExpired = function() {
  const formElement = document.querySelector('[x-data="contactForm"]');
  if (formElement && formElement._x_dataStack) {
    const component = formElement._x_dataStack[0];
    component.turnstileVerified = false;
    component.turnstileToken = '';
    component.errors.turnstile = 'Security verification expired. Please verify again.';
  }
};

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