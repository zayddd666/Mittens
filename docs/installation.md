# Installation

## Choose an Installation Method

### Rbxm

Only rbxm is available for now.

<!-- Using VitePress base helper to guarantee it maps to /Mittens/mittens standalone.rbxm -->
<a :href="$withBase('/mittens standalone.rbxm')" download="mittens standalone.rbxm">
  <button class="rbxm-download-btn">
    Download latest rbxm
  </button>
</a>

<style scoped>
/* Clean, midnight/teal styling for the button */
.rbxm-download-btn {
  display: inline-block;
  background-color: #1a7a88; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none; 
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
  margin-top: 12px;
}

.rbxm-download-btn:hover {
  background-color: #228b9b;
}

.rbxm-download-btn:active {
  transform: scale(0.98);
}
</style>