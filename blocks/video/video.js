import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const div = block.querySelector(':scope > div');

  const videoUrl = div?.querySelector('a')?.href;
  const altText = div?.textContent?.trim();

  block.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'video-wrapper';

  if (!videoUrl) {
    wrapper.innerHTML = '<p>No video configured.</p>';
  } else {
    const video = document.createElement('video');
    video.setAttribute('controls', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('alt', altText || 'Video');
    video.classList.add('video-block');

    const source = document.createElement('source');
    source.setAttribute('src', videoUrl);
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    wrapper.appendChild(video);
  }

  moveInstrumentation(div, wrapper);
  block.appendChild(wrapper);
}
