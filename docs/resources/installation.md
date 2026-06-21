<script setup>
import { withBase } from 'vitepress'
</script>

# Installation

## Choose an Installation Method

::: tabs

== Rbxm
Install the rbxm and add it to roblox studio!

<a :href="withBase('/shellui standalone.rbxm')" download="shellui standalone.rbxm">
  <button class="rbxm-download-btn">
    Download latest rbxm
  </button>
</a>

<style scoped>
/* --- STANDALONE DOWNLOAD BUTTON STYLING --- */
.rbxm-download-btn {
  display: inline-block;
  background-color: #1a7a88; /* Signature teal color */
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

== Pesde

In your terminal, run this command
```bash
pesde add zayddd666/shellui
```
:::