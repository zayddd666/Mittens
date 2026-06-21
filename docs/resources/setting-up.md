## Setting Up UI For ShellUI

# Set up the UI To get started with ShellUI

# Example Client Script

```luau
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
} (nil) -- You Pass nil here and not Screen.Ptr because its not inside any of ShellUI's UI Elements, if you want to Parent it inside a frame pass Frame.Ptr

ShellUI.MountToScreen(label, Screen)
```