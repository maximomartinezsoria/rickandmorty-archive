import readManifest from './readManifest'
import express from 'express'

export default function productionConfig(app) {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = readManifest()
    next()
  })
  app.use(express.static(`${__dirname}/public`))
}
