import fs from 'fs'

export default function getManifest() {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`))
  } catch (error) {
    console.log(error)
  }
}
