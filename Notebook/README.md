# Sammie's Notebook

A lightweight multi-pane viewer for markdown notes, images, audio files, and DOCX documents.

Markdown Manager is built for browsing project folders visually and comfortably. It supports folder-based note collections, side-by-side pane layouts, image zooming, compact multi-row viewing, and quick navigation through uploaded directories.

---

## Features

### Folder-based browsing
Upload an entire folder and browse its contents in a collapsible sidebar tree.

### Multi-pane viewing
Open multiple files at once in separate panes so you can compare notes, references, images, and documents side by side.

### Multi-row layout
Create additional rows of panes to keep more content open at once while fitting everything to the visible window.

### Markdown viewing and editing
Open `.md` files, view rendered markdown, and switch into edit mode to make changes directly in the app.

### Image viewing with zoom and pan
Open image files in dedicated image panes with:
- mouse wheel zoom
- zoom buttons
- click-and-drag panning
- automatic pane width awareness based on image shape

### DOCX viewing
Open `.docx` files directly in the app with an in-browser rendered document view.

### Audio playback
Open supported audio files and play them directly in a pane.

### Content-aware pane sizing
Panes automatically size themselves based on what they contain. Text and document panes get more usable reading width, while image panes scale according to their aspect ratio.

### Compact rows mode
Fit all rows into the visible window by locking row heights and scaling pane layout accordingly.

### Fullscreen support
- Fullscreen individual panes with the pane fullscreen button or by double-clicking a pane
- Toggle fullscreen for the whole app with the `F` key

### GUI hide/show
Hide the sidebar and pane chrome for a cleaner viewing experience with the `H` key.

### Root folder title support
When a folder is uploaded, the root folder name becomes the page title.

### Root icon support
If a supported image file named `icon` exists in the root folder, it can be used for the sidebar toggle icon.

---

## Supported File Types

### Text
- `.docx`
- `.md`

### Images
- `.png`
- `.jpg`
- `.jpeg`

### Documents
- `.docx`

### Audio
- `.mp3`
- `.wav`
- `.ogg`

---

## How to Use

### 1. Upload a folder
Click the folder upload input in the sidebar and select a folder.

The app will:
- load the folder structure
- display the root folder name
- build a navigable file tree in the sidebar

### 2. Open files
Click a file in the sidebar to open it in the active pane.

### 3. Open a file in a new pane
Hold `Shift` while clicking a file to open it in a new pane.

### 4. Add panes
Use the **+ Add Pane** button in the Pane Menu to add another pane to the current row.

### 5. Add rows
Use the **+ Add New Row** button to create a new row with its own pane.

### 6. Select the active pane
Click a pane to make it the active pane. Newly opened files will load into the active pane unless opened with `Shift` click.

---

## Pane Controls

### Edit
For markdown files, click **Edit** to switch to the raw markdown editor.

### Save
Save changes made in the markdown editor.

### Cancel
Discard unsaved edits and return to the rendered markdown view.

### Fullscreen
Use the pane fullscreen button to fullscreen an individual pane.

### Close
Close the pane.

---

## Image Controls

When viewing an image:

### Zoom
- Use the mouse wheel to zoom in and out
- Or use the zoom buttons below the pane

### Pan
Click and drag inside the image pane to move around when zoomed in.

---

## Keyboard Shortcuts

### `H`
Hide or show the GUI

This hides:
- the sidebar
- pane headers
- pane controls

Useful for distraction-free viewing.

### `F`
Toggle fullscreen for the entire app

### `Esc`
Exit fullscreen  
or restore the GUI if it is hidden

---

## Sidebar Behavior

### Folder tree
Folders can be expanded and collapsed by clicking their names.

### Root folder name
The uploaded root folder name appears near the top of the sidebar and is used as the page title.

### Sidebar toggle icon
The icon at the top of the sidebar toggles the sidebar open and closed.

If a supported root-level file named `icon` is present, that icon may be used for the sidebar toggle image.

---

## Layout Behavior

### Content-aware sizing
Pane widths are automatically adjusted based on content type:
- images size according to aspect ratio
- markdown and DOCX panes are given more comfortable reading widths
- rows shrink panes proportionally when needed so everything fits on screen

### Compact Rows to Fit Window
When enabled, row heights are compressed so all rows remain visible within the window.

This is especially useful when working with many panes at once.

---

## Notes

- Markdown editing is currently supported for `.md` files only
- DOCX files are rendered for viewing, not editing
- Unsupported file types will display a message instead of opening normally
- Some browser behavior may vary slightly depending on environment and file handling

---

## Best Use Cases

Markdown Manager works especially well for:
- writing projects
- worldbuilding folders
- TTRPG notes
- reference image collections
- lore archives
- mixed note/document/image research folders
- personal documentation libraries

---

## Version

Current version: **v1.2.10**
