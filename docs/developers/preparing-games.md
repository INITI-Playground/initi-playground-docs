Title:   Preparing games for installation
Summary: How to make the game ready for installation to INITI Playground
Authors: Ondrej Prucha
Date:    March 4, 2025
blank-value:

# Preparing games for installation

Before uploading a game to INITI Playground, you need to create a few essential files. This includes the `metadata.json` file, which contains key details such as the game ID, name, and version, as well as `PNG images` for the game's menu graphics. These files, along with the game data, must be packaged into a ZIP file. This section will guide you through the process step by step.

## Prerequisites

- Game created using our SDK
- Empty USB drive
- INITI Playground updated to version 1.0.7 or later

## Creating a `metadata.json` file

The `metadata.json` file contains key information about the game, such as its name, version, and supported screen ratios. This guide will walk you through creating and structuring this file properly. 

### Understanding the `metadata.json` structure

``` json linenums="1"
{
	"id":"com.initiplayground.point",
	"name":"Point",
	"description":"Simple training game",
	"executablePath":"Point.exe",
	"version":"1.0.1",
	"supportedRatios":["16x9", "16x10", "4x3", "5x4"],
	"tags":["Default", "Fitness", "Competitive", "Teams", "Sport"]
}
```

<div id="nohead" class="nohead" markdown>

|                                   |            |                                                |
| --------------------------------- | ---------- | ---------------------------------------------- |
| **id** | (String, Required) | A unique identifier for the game, following the reverse domain notation (e.g., `"com.companyName.gameName"`). |
| **name** | (String, Required) | The display name of the game as it will appear in INITI Playground. |
| **description** | (String, Optional) | A brief description of the game’s purpose or gameplay. |
| **executablePath** | (String, Required) | The name of the main executable file that starts the game (e.g., `"MyGame.exe"`). |
| **version** | (String, Required) | The current version of the game in `major.minor.patch` format (e.g., `"1.0.1"`). |
| **supportedRatios** | (Array, Required) | A list of aspect ratios the game supports (e.g., `["16x9", "4x3"]`). These ensure the game displays correctly on different screen sizes. |
| **tags** | (Array, Optional) | A set of keywords that help categorize the game. |
</div>

### How to create the `metadata.json` file

- Open a text editor such as Notepad++, VS Code, or any JSON editor.
- Copy and paste the example JSON structure above.
- Replace the values with your game’s details.
- Save the file as `metadata.json` in UTF-8 encoding to ensure compatibility.
- Place it in the root directory of your game, alongside the executable.

### Validating the JSON file

Before proceeding, validate your `metadata.json` to ensure it’s formatted correctly. You can use an online JSON validator such as [jsonlint.com](https://jsonlint.com/)

## Creating menu graphics

To properly display your game in INITI Playground, you need to provide two PNG images for the game menu:

- Window Image – A background image representing your game.
- Button Image – A logo or stylized game title for selection.

This guide will walk you through the specifications and best practices for creating these images.

### Window Image (Game Preview Banner)

The window image serves as the background for the game menu, giving players a preview of the game’s theme.


<div class="center imageWidth" markdown>
![Window Image](assets/prepare-games-windowImage.jpg "Window Image")
</div>

<div id="nohead" class="nohead center" markdown>

|                                   |                                                |
| --------------------------------- | ---------------------------------------------- |
| **Format** | PNG |
| **Resolution** | 1872x1024 |
| **File Name** | This file must be named `windowImage.png` |
</div>


### Button Image (Game Selection Icon)

This smaller image is used as a selection button for the game in the INITI Playground menu. It should be simple, clear, and easy to recognize.

![Button Image](assets/prepare-games-buttonImage.jpg "Button Image"){: .center }

<div id="nohead" class="nohead center" markdown>

|                                   |                                                |
| --------------------------------- | ---------------------------------------------- |
| **Format** | PNG |
| **Resolution** | 640x390 |
| **File Name** | This file must be named `buttonImage.png` |
</div>

### Best practices for menu graphics

- **Keep It Clean & Readable**
    - Avoid excessive detail or small elements.
    - Use clear, high-contrast text.
- **Maintain Consistency**
    - Keep a unified color scheme and style across both images.

## Placing the images in your game folder

Both `windowImage.png` and `buttonImage.png` must be placed in the root folder of your game, along with `metadata.json` and the executable file.

    /MyGame/
    ├── buttonImage.png
    ├── metadata.json
    ├── MyGame.exe
    ├── MyGame_Data/
    ├── windowImage.png

Once you’ve created these images and placed them in the correct location, you’re ready to **package your game into a ZIP file** for installation.

## Creating a ZIP file for INITI Playground

To upload a game to INITI Playground, you must package all required files into a ZIP archive. It is crucial that the ZIP file does not contain any additional folders - the files must be in the root of the archive.

### Check the file structure

Before creating the ZIP file, ensure your game folder contains the following files in its root directory:

- `metadata.json` – Contains game information.
- `MyGame.exe` – The main game executable.
- `windowImage.png` – The game menu background.
- `buttonImage.png` – The game selection button.
- Any other necessary game files (e.g., assets, DLLs).

**Correct file structure before zipping:**

    /MyGame/
    ├── buttonImage.png
    ├── metadata.json
    ├── MyGame.exe
    ├── MyGame_Data/
    ├── windowImage.png
    ├── Other_Game_Files..

!!! warning
    Do NOT place the files inside an extra folder within the ZIP

        ❌ Wrong Structure (Creates an extra folder)
        /MyGame.zip
            ├── MyGame/
                    ├── metadata.json
                    ├── MyGame.exe
                    ├── windowImage.png

### Create zip using Windows File Explorer

1. Select all required files inside your game folder (DO NOT select the folder itself).
2. Right-click on the selected files and choose `Send to → Compressed (zipped) folder`.
3. Rename the ZIP file to match your game’s name (e.g., `MyGame.zip`).

### Create zip using Windows PowerShell

1. Open Command Prompt (`Win + R`, type `powershell`, and press `Enter`).
2. Navigate to your game folder using the `cd` command:

        cd C:\Path\To\MyGame

3. Run the following command to create a ZIP file:

        Compress-Archive -Path * -DestinationPath MyGame.zip
    This ensures all files are added without creating a subfolder.

Once you have successfully created your ZIP file, the final step is to copy it to a USB drive for installation on INITI Playground.

### Copy the ZIP zile to USB drive

1. Insert your USB drive into your computer.
2. Open the folder where your ZIP file is located.
3. Right-click the ZIP file (e.g., `MyGame.zip`) and select Copy.
4. Open `File Explorer` and navigate to your USB drive.
5. Paste the ZIP file onto the USB drive (`Right-click → Paste`).
6. Safely eject the USB drive before removing it.

With the game ZIP file on your USB drive, you can now proceed to install it to INITI Playground.


<br />

<div class="center" markdown>
[Installing games to INITI Playground](installing-games.md){ .md-button }
</div>

<br />