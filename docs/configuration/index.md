# Packages

<div class="card-grid">
  <div class="card">
    <h3 class="card-title">AspectRatio</h3>
    <p class="card-desc">Manages and enforces a strict aspect ratio layout for UI elements to keep scaling uniform.</p>
    <div class="card-links">
      <a href="/ShellUI/components/aspectratio">Docs</a>
    </div>
  </div>

  <div class="card">
    <h3 class="card-title">Button</h3>
    <p class="card-desc">A customizable, interactive element handling hover states, click events, and active animations.</p>
    <div class="card-links">
      <a href="/ShellUI/components/button">Docs</a>
    </div>
  </div>

  <div class="card">
    <h3 class="card-title">Corner</h3>
    <p class="card-desc">Controls UI corner roundness and radius properties cleanly across screen boundaries.</p>
    <div class="card-links">
      <a href="/ShellUI/components/corner">Docs</a>
    </div>
  </div>

  <div class="card">
    <h3 class="card-title">Frame</h3>
    <p class="card-desc">The structural base component used for structural layouts, clipping, and page organization.</p>
    <div class="card-links">
      <a href="/ShellUI/components/Frame">Docs</a>
    </div>
  </div>

  <div class="card">
    <h3 class="card-title">Label</h3>
    <p class="card-desc">Handles text blocks, handling automatic font scaling, wrapping, and text layouts smoothly.</p>
    <div class="card-links">
      <a href="/ShellUI/components/label">Docs</a>
    </div>
  </div>

  <div class="card">
    <h3 class="card-title">List</h3>
    <p class="card-desc">Automatically sorts and aligns collections of UI child items either vertically or horizontally.</p>
    <div class="card-links">
      <a href="/ShellUI/components/list">Docs</a>
    </div>
  </div>

  <div class="card">
    <h3 class="card-title">Stroke</h3>
    <p class="card-desc">Adds custom borders, handling outer, inner, or centered lines on layout containers.</p>
    <div class="card-links">
      <a href="/ShellUI/components/stroke">Docs</a>
    </div>
  </div>

  <div class="card">
    <h3 class="card-title">TextInput</h3>
    <p class="card-desc">An interactive interface text box field handling keyboard inputs and string capturing.</p>
    <div class="card-links">
      <a href="/ShellUI/components/textinput">Docs</a>
    </div>
  </div>
</div>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-alt);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color 0.25s, background-color 0.25s;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
}

.card-title {
  color: var(--vp-c-brand-1) !important;
  font-size: 18px !important;
  font-weight: 600;
  margin: 0 0 8px 0 !important;
  border: none !important;
  padding: 0 !important;
}

.card-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0 0 16px 0;
  flex-grow: 1;
}

.card-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.25s;
}

.card-links a:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}
</style>