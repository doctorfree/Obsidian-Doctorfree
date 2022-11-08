
<h1 align="center">Obsidian Theme: Doctorfree</h1>
<div align="center">
<img src="https://github.com/doctorfree/Obsidian-Doctorfree/blob/822b43efb9138c8e252a29a0c3ddde1acbcb98c7/obsidian.png"><br>
v1.x | Designed & Coded with 💎 by Dr. Ronald Joe Record <br>
This custom theme is designed for use with [Obsidian](https://obsidian.md/)<br>
⚡ Inspired by the [Night Owl theme](https://github.com/bencodezen/obsidian-night-owl-theme) by [Ben Hong](https://twitter.com/bencodezen) and the [Obsidianite theme](https://github.com/bennyxguo/Obsidian-Obsidianite) by [Benny Guo](https://twitter.com/bennyxguo)<br>
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

# Release Notes

These are the release notes for Version 1.0.3 Release 1 of the Doctorfree Obsidian theme.

## Table of contents

1. [Installation](#installation)
1. [Configuration](#configuration)
1. [Removal](#removal)
1. [Support](#support)
1. [Changelog](#changelog)

## Installation

### Obsidian Marketplace

1. Open the **Settings** in Obsidian
1. Navigate to **Appearances** tab under **Options**
1. Under the **Themes** section, click on the `Browse` or `Manage` button
1. Search for `Doctorfree` in the Filter text input in the upper left corner
1. Click `Use this theme` and you're done! 🎉

### Manual from downloaded release

#### Download the release archive

[Download the latest release](https://github.com/doctorfree/Obsidian-Doctorfree/releases/latest).

Those familiar with `wget` can download this release from the command line with:

```shell
wget --quiet -O ~/Downloads/Obsidian-Doctorfree-v1.0.3r1.tar.gz \
  https://github.com/doctorfree/Obsidian-Doctorfree/archive/refs/tags/v1.0.3r1.tar.gz
```

### Extract the release archive

Currently release archives are available in either ZIP or compressed tar archive format.

To extract the ZIP archive:

```shell
cd /path/to/download # e.g. `cd ~/Downloads`
unzip Obsidian-Doctorfree-1.0.3r1.zip
```

To extract the compressed tar archive:

```shell
cd /path/to/download # e.g. `cd ~/Downloads`
tar xf ./Obsidian-Doctorfree-1.0.3r1.tar.gz
```

Once extracted, the Doctorfree Obsidian theme is now available in `Obsidian-Doctorfree-1.0.3r1/`. Copy the theme and manifest into an Obsidian vault `themes` folder:

```shell
cd Obsidian-Doctorfree-1.0.3r1
mkdir -p /path/to/vault/.obsidian/themes/Doctorfree
cp manifest.json /path/to/vault/.obsidian/themes/Doctorfree/manifest.json
cp theme.css /path/to/vault/.obsidian/themes/Doctorfree/theme.css
```

The downloaded archive and extracted folder can be deleted:

```shell
cd ..
rm -f Obsidian-Doctorfree-1.0.3r1.zip
rm -rf Obsidian-Doctorfree-1.0.3r1
```

or

```shell
cd ..
rm -f Obsidian-Doctorfree-1.0.3r1.tar.gz
rm -rf Obsidian-Doctorfree-1.0.3r1
```

### Manual from cloned repository

```shell
git clone https://github.com/doctorfree/Obsidian-Doctorfree.git
cd Obsidian-Doctorfree
mkdir -p /path/to/vault/.obsidian/themes/Doctorfree
cp manifest.json /path/to/vault/.obsidian/themes/Doctorfree/manifest.json
cp theme.css /path/to/vault/.obsidian/themes/Doctorfree/theme.css
```

## Configuration

1. Open the **Settings** in Obsidian
1. Navigate to **Appearances** tab under **Options**
1. Under the **Themes** section, click on the dropdown menu next to **Theme** heading
1. Select for `Doctorfree` and then you're done! 🎉'

### Obsidian Settings

- `Settings -> Appearance -> Basic color scheme`: *Dark*
- `Settings -> Appearance -> Themes`: *Doctorfree*

### Optional Obsidian Settings

- `Settings -> Appearance -> Font`:
    - I use *Mononoki Nerd Font* and *Mononoki Nerd Font Mono*
    - The default font size in Obsidian is too small, I bump it up to 24
- `Settings -> Appearance -> Advanced`: Disable *Show inline title*
- `Settings -> Editor -> Default view for new tabs`: *Reading view*

## Removal

To remove the Doctorfree Obsidian theme simply remove the extracted folder and its contents:

```shell
cd /path/to/your/vault/.obsidian/themes
rm -rf Doctorfree
```

## Support

Support the development and improvement of the Doctorfree Obsidian theme by [sponsoring the Projects of Doctorfree](https://github.com/sponsors/doctorfree).

<a href="https://www.buymeacoffee.com/doctorfree"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=doctorfree&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"></a>

## Changelog

View the full changelog for this release at https://github.com/doctorfree/Obsidian-Doctorfree/blob/v1.0.3r1/CHANGELOG.md
