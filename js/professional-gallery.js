/* KnowBe4 mixed-media galleries: screenshots and native HTML5 video in the same carousel. */
const professionalGalleryMedia = {
  "knowledge-race": [
    {
      "type": "image",
      "src": "images/knowbe4/knowledge-race/KnowledgeRace_ChooseAMode_DrakePerkins.png",
      "label": "Choose a mode",
      "description": "Knowledge Race game-mode selection screen with options to host, join, or play solo"
    },
    {
      "type": "image",
      "src": "images/knowbe4/knowledge-race/KnowledgeRace_Settings_DrakePerkins.png",
      "label": "Settings menu",
      "description": "Knowledge Race settings menu with options for volume controls and gameplay instructions"
    },
    {
      "type": "image",
      "src": "images/knowbe4/knowledge-race/KnowledgeRace_GameSetup_DrakePerkins.png",
      "label": "Game setup",
      "description": "Knowledge Race game setup screen with accuracy mode and question timer settings"
    },
    {
      "type": "image",
      "src": "images/knowbe4/knowledge-race/KnowledgeRace_HowToPlay_DrakePerkins.png",
      "label": "How to play",
      "description": "Knowledge Race gameplay instructions"
    },
    {
      "type": "video",
      "src": "videos/knowbe4/knowledge-race/KnowledgeRace_SinglePlayer_Lose.mp4",
      "label": "Single-player gameplay",
      "description": "Knowledge Race single-player gameplay recording ending in a loss",
      "poster": "images/knowbe4/knowledge-race/KnowledgeRace_SinglePlayer_Lose-poster.jpg"
    },
    {
      "type": "video",
      "src": "videos/knowbe4/knowledge-race/KnowledgeRace_Multiplayer_Win.mp4",
      "label": "Multiplayer gameplay",
      "description": "Knowledge Race multiplayer gameplay recording ending in a win",
      "poster": "images/knowbe4/knowledge-race/KnowledgeRace_Multiplayer_Win-poster.jpg"
    }
  ],
  "workplace-hazard-patrol": [
    {
      "type": "image",
      "src": "images/knowbe4/workplace-hazard-patrol/WorkplaceHazardPatrol_GameTitle_DrakePerkins.png",
      "label": "Game Title Screen",
      "description": "Workplace Hazard Patrol game title screen"
    },
    {
      "type": "image",
      "src": "images/knowbe4/workplace-hazard-patrol/WorkplaceHazardPatrol_GameSettings_DrakePerkins.png",
      "label": "Game settings",
      "description": "Workplace Hazard Patrol game settings with music, effects, and animations options"
    },
    {
      "type": "image",
      "src": "images/knowbe4/workplace-hazard-patrol/WorkplaceHazardPatrol_Tutorial_DrakePerkins.png",
      "label": "Tutorial",
      "description": "Workplace Hazard Patrol tutorial with instructions and navigation buttons"
    },
    {
      "type": "image",
      "src": "images/knowbe4/workplace-hazard-patrol/WorkplaceHazardPatrol_Gameplay_DrakePerkins.png",
      "label": "Gameplay",
      "description": "Workplace Hazard Patrol interactive workplace scene and hazard-response controls"
    },
    {
      "type": "image",
      "src": "images/knowbe4/workplace-hazard-patrol/WorkplaceHazardPatrol_QuestionResponse_DrakePerkins.png",
      "label": "Question feedback",
      "description": "Workplace Hazard Patrol scenario feedback displayed after a player response"
    },
    {
      "type": "video",
      "src": "videos/knowbe4/workplace-hazard-patrol/WorkplaceHazardPatrol_Win.mp4",
      "label": "Successful gameplay",
      "description": "Workplace Hazard Patrol gameplay recording showing a successful outcome",
      "poster": "images/knowbe4/workplace-hazard-patrol/WorkplaceHazardPatrol_Win-poster.jpg"
    },
    {
      "type": "video",
      "src": "videos/knowbe4/workplace-hazard-patrol/WorkplaceHazardPatrol_Lose.mp4",
      "label": "Unsuccessful gameplay",
      "description": "Workplace Hazard Patrol gameplay recording showing an unsuccessful outcome",
      "poster": "images/knowbe4/workplace-hazard-patrol/WorkplaceHazardPatrol_Lose-poster.jpg"
    }
  ],
  "incident-reporting": [
    {
      "type": "image",
      "src": "images/knowbe4/incident-reporting/IR-1.png",
      "label": "Video-based training",
      "description": "Incident Reporting training interface with video and interactive elements"
    },
    {
      "type": "image",
      "src": "images/knowbe4/incident-reporting/IR-2.png",
      "label": "Assessment interface",
      "description": "Incident Reporting interface showing a question and video-based training controls"
    }
  ],
  "double-trouble-trivia": [
    {
      "type": "image",
      "src": "images/knowbe4/double-trouble-trivia/DTT-1.png",
      "label": "Game overview",
      "description": "Double Trouble Trivia game overview screenshot"
    },
    {
      "type": "image",
      "src": "images/knowbe4/double-trouble-trivia/DTT-2.png",
      "label": "Trivia gameplay",
      "description": "Double Trouble Trivia game interface with categories and scores"
    },
    {
      "type": "image",
      "src": "images/knowbe4/double-trouble-trivia/DTT-3.png",
      "label": "Question screen",
      "description": "Double Trouble Trivia quiz question interface"
    },
    {
      "type": "image",
      "src": "images/knowbe4/double-trouble-trivia/DTT-4.png",
      "label": "Game results",
      "description": "Double Trouble Trivia gameplay screenshot"
    }
  ],
  "human-firewall": [
    {
      "type": "image",
      "src": "images/knowbe4/human-firewall/HF-1.png",
      "label": "Game overview",
      "description": "Who Wants to Be a Human Firewall game screenshot"
    },
    {
      "type": "image",
      "src": "images/knowbe4/human-firewall/HF-2.png",
      "label": "Question screen",
      "description": "Who Wants to Be a Human Firewall question screen with game-show-style UI"
    },
    {
      "type": "image",
      "src": "images/knowbe4/human-firewall/HF-3.png",
      "label": "Gameplay",
      "description": "Who Wants to Be a Human Firewall gameplay screen"
    }
  ]
};

function initializeProfessionalGallery(container) {
  const items = professionalGalleryMedia[container.dataset.gallery];
  if (!items?.length) return;

  let activeIndex = 0;

  const stage = document.createElement('div');
  stage.className = 'pro-gallery-stage';

  const caption = document.createElement('p');
  caption.className = 'pro-gallery-caption';
  caption.setAttribute('aria-live', 'polite');

  const previous = document.createElement('button');
  previous.type = 'button';
  previous.className = 'pro-gallery-arrow';
  previous.textContent = '‹';
  previous.setAttribute('aria-label', 'Previous media');

  const next = document.createElement('button');
  next.type = 'button';
  next.className = 'pro-gallery-arrow';
  next.textContent = '›';
  next.setAttribute('aria-label', 'Next media');

  const count = document.createElement('span');
  count.className = 'pro-gallery-count';
  count.setAttribute('aria-live', 'polite');
  count.setAttribute('aria-atomic', 'true');

  const actions = document.createElement('div');
  actions.className = 'pro-gallery-actions';
  actions.append(previous, count, next);

  const thumbs = document.createElement('div');
  thumbs.className = 'pro-gallery-thumbs';
  thumbs.setAttribute('role', 'group');
  thumbs.setAttribute('aria-label', 'Select a screenshot or video');

  const thumbButtons = items.map((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'pro-gallery-thumb';
    const kind = item.type === 'video' ? 'video' : 'screenshot';
    button.setAttribute('aria-label', `Show ${kind} ${index + 1} of ${items.length}: ${item.label}`);

    const image = document.createElement('img');
    image.src = item.type === 'video' ? item.poster : item.src;
    image.alt = '';
    image.loading = 'lazy';
    button.append(image);

    if (item.type === 'video') {
      const playLabel = document.createElement('span');
      playLabel.className = 'pro-gallery-video-mark';
      playLabel.textContent = '▶';
      playLabel.setAttribute('aria-hidden', 'true');
      button.append(playLabel);
    }

    button.addEventListener('click', () => display(index, true));
    thumbs.append(button);
    return button;
  });

  container.setAttribute('role', 'region');
  container.setAttribute('aria-roledescription', 'carousel');
  container.setAttribute('aria-label', `${container.dataset.title || 'Project'} media gallery`);
  container.replaceChildren(stage, caption, actions, thumbs);

  function display(index, userInitiated = false) {
    // Removing the previous video stops playback and frees its controls.
    const playingVideo = stage.querySelector('video');
    if (playingVideo) playingVideo.pause();

    activeIndex = (index + items.length) % items.length;
    const item = items[activeIndex];
    let mediaElement;

    if (item.type === 'video') {
      mediaElement = document.createElement('video');
      mediaElement.controls = true;
      mediaElement.preload = 'none';
      mediaElement.playsInline = true;
      mediaElement.poster = item.poster;
      mediaElement.setAttribute('aria-label', item.description);
      const source = document.createElement('source');
      source.src = item.src;
      source.type = 'video/mp4';
      mediaElement.append(source);
    } else {
      mediaElement = document.createElement('img');
      mediaElement.src = item.src;
      mediaElement.alt = item.description;
      mediaElement.loading = 'lazy';
    }

    mediaElement.className = 'pro-gallery-media';
    stage.replaceChildren(mediaElement);
    caption.textContent = `${item.type === 'video' ? 'Video' : 'Screenshot'}: ${item.label}`;
    count.textContent = `${activeIndex + 1} / ${items.length}`;
    thumbButtons.forEach((button, i) => {
      const active = i === activeIndex;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
      if (active && userInitiated) {
        // Scroll only the thumbnail strip; never jump the main document.
        thumbs.scrollLeft = button.offsetLeft - thumbs.offsetLeft - (thumbs.clientWidth - button.clientWidth) / 2;
      }
    });
  }

  previous.addEventListener('click', () => display(activeIndex - 1, true));
  next.addEventListener('click', () => display(activeIndex + 1, true));
  container.addEventListener('keydown', (event) => {
    // Do not interfere with the video's native keyboard controls.
    if (event.target.closest('video') || !event.target.closest('button')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      display(activeIndex + (event.key === 'ArrowRight' ? 1 : -1), true);
    }
  });

  display(0);
}

document.querySelectorAll('.professional-section .pro-media-gallery[data-gallery]').forEach(initializeProfessionalGallery);
