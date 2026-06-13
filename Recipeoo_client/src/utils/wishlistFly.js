const bounceWishlistTarget = (targetElement) => {
  targetElement.classList.remove('wishlist-bounce');
  void targetElement.offsetWidth;
  targetElement.classList.add('wishlist-bounce');

  window.setTimeout(() => {
    targetElement.classList.remove('wishlist-bounce');
  }, 650);
};

const getCenterPoint = (element) => {
  const rect = element.getBoundingClientRect();

  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
};

export const animateToWishlist = (sourceElement) => {
  if (!sourceElement || typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const targetElement = document.querySelector('[data-wishlist-target="true"]');

  if (!targetElement) return;

  const sourcePoint = getCenterPoint(sourceElement);
  const flyingHeart = document.createElement('div');

  flyingHeart.className = 'wishlist-fly-heart';
  flyingHeart.innerHTML = '❤';
  flyingHeart.style.position = 'fixed';
  flyingHeart.style.left = `${sourcePoint.x - 14}px`;
  flyingHeart.style.top = `${sourcePoint.y - 14}px`;
  flyingHeart.style.width = '28px';
  flyingHeart.style.height = '28px';
  flyingHeart.style.display = 'flex';
  flyingHeart.style.alignItems = 'center';
  flyingHeart.style.justifyContent = 'center';
  flyingHeart.style.fontSize = '24px';
  flyingHeart.style.color = '#ebb22f';
  flyingHeart.style.pointerEvents = 'none';
  flyingHeart.style.zIndex = '99999';
  flyingHeart.style.opacity = '1';
  flyingHeart.style.transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)';
  flyingHeart.style.transition =
    'left 0.18s ease, top 0.18s ease, transform 0.18s ease, opacity 0.18s ease';

  document.body.appendChild(flyingHeart);

  const startLeft = sourcePoint.x - 14;
  const startTop = sourcePoint.y - 14;

  const cleanUp = () => {
    flyingHeart.remove();
  };

  requestAnimationFrame(() => {
    flyingHeart.style.left = `${startLeft + 26}px`;
    flyingHeart.style.top = `${startTop - 34}px`;
    flyingHeart.style.transform = 'translate3d(0, 0, 0) scale(1.2) rotate(16deg)';
  });

  window.setTimeout(() => {
    flyingHeart.style.left = `${startLeft - 18}px`;
    flyingHeart.style.top = `${startTop - 78}px`;
    flyingHeart.style.transform = 'translate3d(0, 0, 0) scale(1.08) rotate(-18deg)';
  }, 180);

  window.setTimeout(() => {
    flyingHeart.style.left = `${startLeft + 22}px`;
    flyingHeart.style.top = `${startTop - 126}px`;
    flyingHeart.style.transform = 'translate3d(0, 0, 0) scale(1.12) rotate(12deg)';

    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, 360);

  window.setTimeout(() => {
    const targetPoint = getCenterPoint(targetElement);

    flyingHeart.style.transition =
      'left 0.95s cubic-bezier(0.18, 0.78, 0.24, 1), top 0.95s cubic-bezier(0.18, 0.78, 0.24, 1), transform 0.95s cubic-bezier(0.18, 0.78, 0.24, 1), opacity 0.95s ease';
    flyingHeart.style.left = `${targetPoint.x - 14}px`;
    flyingHeart.style.top = `${targetPoint.y - 14}px`;
    flyingHeart.style.transform = 'translate3d(0, 0, 0) scale(0.35) rotate(0deg)';
    flyingHeart.style.opacity = '0.15';
  }, 620);

  window.setTimeout(() => {
    bounceWishlistTarget(targetElement);
    cleanUp();
  }, 1620);
};
