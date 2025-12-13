## Title

**8Introducing Restart Roblox Studio Simulator: Hot-Reload Your Game While You Code!**

---

## Post Body

Just released a VS Code extension that auto-restarts your Roblox simulator on file save. No more manual restarts between code changes!

I'm tired of the: Write code → Stop sim → Restart sim → Test cycle. It kills my momentum when I'm iterating. This extension handles the restart for you automatically—just save your file and the simulator restarts instantly. There's also an F2 hotkey if you want to force a restart anytime.

### Key Features

- **🔄 Auto-Reload on Save**: Automatically triggers a simulator restart when you save TypeScript, JavaScript, or Lua files
- **⚡ Manual Trigger**: Press `F2` anytime to restart your simulator instantly
- **📁 Smart File Filtering**: Only tracks `.ts`, `.tsx`, `.js`, `.jsx`, `.lua`, and `.luau` files
- **🎮 Studio-Ready Plugin**: Works seamlessly with Roblox Studio through the companion bridge plugin
- **⚙️ Configurable**: Toggle auto-reload on/off in VS Code settings

### Installation

**VS Code Extension:**

- Search for "Restart Roblox Studio Simulator" in the VS Code Extensions Marketplace and install!

**Roblox Studio Plugin (Required):**

1. Open Roblox Studio
2. Go to **Plugins** → **Manage Plugins**
3. Search for "Restart Roblox Simulator Bridge Plugin" or use this link:
   - [Install Plugin](https://create.roblox.com/store/asset/136865535235685/Restart-Roblox-Simulator-Bridge-Plugin)

### How It Works

[**INSERT VIDEO DEMO HERE: 1-2 minute demo showing the hot-reload workflow in action**]

**Quick walkthrough:**

1. Install both the extension and plugin
2. Open a Roblox project in VS Code
3. Connect the plugin (toolbar button appears once plugin is installed)
4. **Start coding** - Your simulator will auto-restart on save!

### Open Source & Feedback Welcome

This is an open-source project, so contributions and feedback are always welcome! Check out the GitHub repo:

- **Repository**: [github.com/jeremytenjo/restart-roblox-studio-simulator](https://github.com/jeremytenjo/restart-roblox-studio-simulator)
- **Issues/Feature Requests**: [GitHub Issues](https://github.com/jeremytenjo/restart-roblox-studio-simulator/issues)

### Special Thanks

Special shoutout to **zephyras** and **oryaelia** for their contributions and feedback during development!
