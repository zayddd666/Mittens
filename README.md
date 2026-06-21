# ShellUI
A UI Framework in roblox



The first version of ShellUI

- Frame Support
- Button Support
- Text Support
- Aspect Ratio Support
- List Layout Support
Full Changelog: https://github.com/zayddd666/ShellUI/commits/0.1.0


Example Script:

```lua
-- EXAMPLE SCRIPT
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")

local lib = require(PATH.TO.SHELLUI) -- Put your path to ShellUI here!
local ShellUI = lib :: any

local Screen = Instance.new("ScreenGui")
Screen.IgnoreGuiInset = true
Screen.Parent = Players.LocalPlayer:WaitForChild("PlayerGui")

-- 3. Build your UI
local label = ShellUI.Label {
	Transparency = 1,
	Position = {0.5, 0.5},
	AnchorPoint = {0.5, 0.5},
	Size = {0.5, 0.2},
	Color = Color3.fromRGB(255, 255, 255),
	Text = "It Works!"
} (nil) -- You Pass nil here and not Screen.Ptr because its not inside any of ShellUI's UI Elements, if you want to Parent it inside a frame pass Frame.Ptr

lib.MountToScreen(label, Screen)
```

# Short History of ShellUI
So ShellUI was supposed to be a Leaderstat system for the players in the Current Server, Basically the same as the roblox lederboard. But then an idea popped up in my head and i decided it was supposed to be a UI Framework
