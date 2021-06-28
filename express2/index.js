import express from 'express'
import path from 'path'
import {requestTime, logger} from "./middlewares.js";
import router from "./routes/servers.js";

const app = express()
const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'ejs'))

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(requestTime)
app.use(logger)
app.use(router)

app.get('/', (req, res) => {
  res.render('index', {
    title: 'main',
    active: 'main'
  })
})

app.get('/seriy', (req, res) => {
  res.render('seriy', {
    title: 'seriy',
    active: 'seriy'
  })
})

app.get('/sesach', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'seriy.html'))
})

app.listen(PORT, () => {
  console.log('server is running')
})
