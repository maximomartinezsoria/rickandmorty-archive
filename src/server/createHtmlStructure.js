export default function createHtmlStructure(htmlApp, manifest) {
  const stylesPath = manifest ? manifest['main.css'] : 'css/app.css'
  const scriptsPath = manifest ? manifest['main.js'] : 'js/app.js'
  const vendorsPath = manifest ? manifest['vendors.js'] : 'js/vendor.js'

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rick And Morty Archive</title>
        <link rel="stylesheet" href="${stylesPath}">
      </head>
      <body>
        <div id="app">${htmlApp}</div>
        <script src="${scriptsPath}" type="text/javascript"></script>
        <script src="${vendorsPath}" type="text/javascript"></script>
      </body>
    </html>
`
}
