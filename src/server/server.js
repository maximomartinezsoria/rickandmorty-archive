import express from 'express'
import dotenv from 'dotenv'
import developmentConfig from './developmentConfig'
import productionConfig from './productionConfig'
import renderApp from './renderApp'

dotenv.config()
const { ENV, PORT } = process.env

const app = express()

if (ENV === 'development') {
  developmentConfig(app)
} else {
  productionConfig(app)
}

app.get('*', renderApp)

app.listen(PORT, (error) => {
  if (error) {
    console.error(error)
    return
  }

  console.log(`Server listening on port: ${PORT}`)
})
