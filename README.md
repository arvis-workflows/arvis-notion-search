# arvis-notion-search

> arvis workflow for searching Notion.

<img src="https://raw.githubusercontent.com/arvis-workflows/arvis-notion-search/master/screenshot.png" width="500">


## Install

```
$ npm install --global arvis-notion-search
```

Open Notion in your browser and open the developer tools and go to the network tab

Do a quick search using ctrl/cmd+p for anything

Find the network request called search and in the headers tab scroll the to bottom to find the req payload

<img src="https://raw.githubusercontent.com/arvis-workflows/arvis-notion-search/master/notion%20payload.png" width="500">

Grab the `space_id` value and then go to the cookies tab

<img src="https://raw.githubusercontent.com/arvis-workflows/arvis-notion-search/master/notion%20cookie%20headers.png" width="500">

Grab the values from `token_v2`

Change `space_id` & `token_v2` in arvis workflow environment variables.

Requires Node.js 8+, arvis 3 and the arvis Powerpack.

## Usage

In arvis, type `ns <keyword>` to search.

Select one of result and press enter to navigate to the Notion page for the result.

## 🔗 This workflow is converted from [alfred-workflow](https://github.com/AnNOtis/alfred-notion-search).

* Note that there might be some code change or different actions from the original workflow.

* Marked original workflow's creator to author.
