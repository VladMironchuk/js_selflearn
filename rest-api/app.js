const express = require('express')
const path = require('path')
const {v4} = require('uuid')

const app = express()
const PORT = process.env.PORT ?? 3000
const {log} = console

let contacts = [
  {id:v4(), name: "seriy",value: "poshel von", marked: false}
]

app.use(express.json())

app.get('/api/contacts', (req, res) => {
  res.status(200).json(contacts)
})

app.post('/api/contacts', (req, res) => {
  const contact = {...req.body, id: v4(), marked: false}
  contacts.push(contact)
  res.status(201).json(contact)
})

app.delete('/api/contacts/:id', (req, res) => {
  contacts = contacts.filter(i => i.id !== req.params.id)
  res.status(200).json({message: 'norm'})
})

app.put('/api/contacts/:id', (req, res) => {
  const idx = contacts.findIndex(i => i.id === req.params.id)
  contacts[idx] = req.body
  res.json(contacts[idx])
})

app.use(express.static(path.join(__dirname,'client')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'client', 'index.html'))
})

app.listen(PORT, () => {
  log('server is running')
})