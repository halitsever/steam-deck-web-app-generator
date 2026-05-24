<script setup lang="ts">
const { url, appName, useDocs, script, generating, copied, canGenerate, fileName, previewHost, generate, download, copy } = useAppState();

const previewInitial = computed(() => (appName.value || "A").trim().charAt(0).toUpperCase() || "A");
const lineCount = computed(() => script.value.split("\n").length);
const byteCount = computed(() => new Blob([script.value]).size);
</script>

<template>
  <!-- Create panel -->
  <section class="panel create-panel" aria-labelledby="panel-title">
    <div class="panel-header">
      <div class="panel-eyebrow">
        <span class="dot" aria-hidden="true" />
        NON-STEAM SHORTCUT
      </div>
      <h1 id="panel-title">Add a Web App to your Library</h1>
      <p class="panel-sub">Turn any website into a Game-Mode launcher. Fill the fields, generate the script, and run it once in Desktop Mode.</p>
    </div>

    <div class="panel-body">
      <!-- Live game tile preview — decorative, reflects form values -->
      <div class="game-tile" aria-hidden="true">
        <div class="game-tile-art">
          <div class="game-tile-initial">{{ previewInitial }}</div>
          <div class="game-tile-glow" />
        </div>
        <div class="game-tile-meta">
          <div class="game-tile-name">{{ (appName || "App Name").trim() || "App Name" }}</div>
          <div class="game-tile-host">
            <!-- Link icon -->
            <svg viewBox="0 0 24 24" fill="none" width="12" height="12" aria-hidden="true">
              <path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            </svg>
            {{ previewHost }}
          </div>
        </div>
      </div>

      <div class="form-grid">
        <!-- Site URL field -->
        <div class="field">
          <label for="f-url" class="field-label">
            <span class="field-icon" aria-hidden="true">
              <!-- Link icon -->
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              </svg>
            </span>
            <span class="field-label-text">Site URL</span>
            <span class="field-hint">Full address including https://</span>
          </label>
          <div class="field-control">
            <input id="f-url" v-model="url" type="url" placeholder="https://google.com" autocomplete="off" spellcheck="false" />
          </div>
        </div>

        <!-- App Name field -->
        <div class="field">
          <label for="f-name" class="field-label">
            <span class="field-icon" aria-hidden="true">
              <!-- Tag icon -->
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M3 12V4h8l10 10-8 8L3 12z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                <circle cx="8" cy="9" r="1.3" fill="currentColor" />
              </svg>
            </span>
            <span class="field-label-text">App Name</span>
            <span class="field-hint">Shown in your Steam Library</span>
          </label>
          <div class="field-control">
            <input id="f-name" v-model="appName" type="text" placeholder="Google" autocomplete="off" maxlength="48" />
          </div>
        </div>

        <!-- Toggle row -->
        <div class="toggle-row" role="group" aria-labelledby="f-docs">
          <div class="toggle-meta">
            <div class="toggle-icon" aria-hidden="true">
              <!-- Folder icon -->
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" stroke-width="1.6" />
              </svg>
            </div>
            <div class="toggle-text">
              <div id="f-docs" class="toggle-label">Use ~/Documents as default folder</div>
              <div class="toggle-hint">Recommended — the script will be created here.</div>
            </div>
          </div>
          <button type="button" role="switch" :aria-checked="useDocs" :class="['switch', { on: useDocs }]" @click="useDocs = !useDocs">
            <span class="switch-thumb" />
          </button>
        </div>
      </div>

      <!-- Generate CTA -->
      <button type="button" class="cta" :disabled="!canGenerate" @click="generate">
        <span class="cta-glow" aria-hidden="true" />
        <span class="cta-label">
          <!-- Spark / sparkle icon -->
          <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
            <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" fill="currentColor" />
          </svg>
          {{ generating ? "GENERATING…" : "GENERATE SCRIPT" }}
        </span>
        <span class="cta-pad" aria-hidden="true">
          <span class="pad-glyph" style="background: #3aa84a"><span>A</span></span>
        </span>
      </button>
    </div>
  </section>

  <!-- Terminal panel — appears after a successful generate -->
  <section v-if="script" class="panel terminal-panel" aria-label="Generated script preview">
    <div class="term-chrome">
      <div class="term-lights" aria-hidden="true">
        <span class="lt r" />
        <span class="lt y" />
        <span class="lt g" />
      </div>
      <div class="term-title">
        <span class="term-path">~/Documents/</span>
        <span class="term-file">{{ fileName }}</span>
      </div>
      <div class="term-actions">
        <button class="term-btn" aria-label="Copy script" @click="copy">
          <!-- Copy icon -->
          <svg viewBox="0 0 24 24" fill="none" width="14" height="14" aria-hidden="true">
            <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.8" />
            <path d="M4 16V6a2 2 0 012-2h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          </svg>
          <span>{{ copied ? "COPIED" : "COPY" }}</span>
        </button>
        <button class="term-btn primary" aria-label="Download script" @click="download">
          <!-- Download icon -->
          <svg viewBox="0 0 24 24" fill="none" width="14" height="14" aria-hidden="true">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>DOWNLOAD .SH</span>
        </button>
      </div>
    </div>
    <pre class="term-body"><code>{{ script }}</code></pre>
    <div class="term-footer">
      <span class="term-status">
        <span class="status-dot" aria-hidden="true" />
        READY · {{ lineCount }} lines · {{ byteCount }} bytes
      </span>
      <span class="term-hint">After download, run <code>chmod +x</code> and execute in Desktop Mode.</span>
    </div>
  </section>
</template>
