<template>
  <section class="panel donate-panel">
    <div class="panel-header">
      <div class="panel-eyebrow">
        <span class="dot" aria-hidden="true" />
        SUPPORT THE PROJECT
      </div>
      <h1>Buy the maintainer a coffee</h1>
      <p class="panel-sub">
        Steam Deck Web App Generator is free and open source. If it saved you time,
        consider supporting Halit Sever — the human who keeps the lights on.
      </p>
    </div>

    <div class="donate-grid">
      <a
        class="donate-card"
        href="https://github.com/sponsors/halitsever"
        target="_blank"
        rel="noreferrer"
      >
        <div class="donate-card-icon">
          <!-- Heart icon -->
          <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
            <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="donate-card-title">GitHub Sponsors</div>
        <div class="donate-card-sub">Monthly support, any amount.</div>
      </a>

      <a
        class="donate-card"
        href="https://github.com/halitsever/steam-deck-web-app-generator"
        target="_blank"
        rel="noreferrer"
      >
        <div class="donate-card-icon">
          <!-- GitHub icon -->
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
            <path d="M12 .5C5.7.5.7 5.5.7 11.8c0 5 3.2 9.2 7.7 10.7.6.1.8-.2.8-.6v-2c-3.1.7-3.8-1.5-3.8-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 1.1.9-.3 1.8-.4 2.8-.4s1.9.1 2.8.4c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.5-1.5 7.7-5.7 7.7-10.7C23.3 5.5 18.3.5 12 .5z" />
          </svg>
        </div>
        <div class="donate-card-title">Star on GitHub</div>
        <div class="donate-card-sub">Free, takes 2 seconds.</div>
      </a>
    </div>

    <button class="ghost-btn" @click="navigateTo('/')">← Back to Create</button>
  </section>
</template>
