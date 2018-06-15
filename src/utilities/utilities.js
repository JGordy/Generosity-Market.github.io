// Reusable utility functions.
const Utils = {
  scrollTo: (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: document.getElementById(element).offsetTop
    });
  },
  getImageURL: (image) => {
    if (image.includes('base64')) {
      return `url(${image})`;
    } else {
      return require(`../Assets/Photography/Mobile/${image}`);
    }
  },
  getIconURL: icon => require(`../Assets/icons/PNG/${icon}`),
  sharePage: () => alert("Shared")
};

export default Utils;
