# Installation

## ShellUI Mounting Function

### Mounting Function

```lua
	MountToScreen = function(node: VirtualNode, screenGui: ScreenGui)
		task.spawn(function()
			local inst = node.GetHardware()
			while not inst do task.wait(); inst = node.GetHardware() end
			(inst :: any).Parent = screenGui
		end)
```