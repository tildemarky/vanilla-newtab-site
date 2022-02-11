const fs = require("fs/promises");
const path = require("path");
const CleanCSS = require("clean-css");

module.exports = async (data) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <style>
      ${await fs
        .readFile(path.resolve(__dirname, "./style.css"))
        .then((data) => new CleanCSS().minify(data).styles)}
    </style>
    <script async defer data-website-id="078dd6b0-7c5f-4ad8-acd7-5a9e71886435" src="https://umame.one/umami.js"></script>  </head>
  <body>
    <main>
        <h1>${data.title}</h1>
        ${data.content}
    </main>
    <footer>
        <a href="/privacy">Privacy Policy</a>
    </footer>
  </body>
</html>
`;
