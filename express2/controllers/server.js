let data = [
  {id: 1, name: 'dcp', job: 'daun'},
  {id: 2, name: 'eblan', job: 'pet9'},
  {id: 3, name: 'konch', job: 'denrudik'},
  {id: 4, name: 'seriy', job: 'lesha'}
  ]

export const getAll = (req, res) => {
  res.status(200).json(data)
}

export const create = (req, res)=> {
  const newData = {
    id: Date.now().toString(),
    ...req.body
  }
  data.push(newData)
  res.status(201).json(newData)
}

export const remove = (req, res) => {
  data = data.filter(i => i.id !== req.params.id)
  res.json({message: 'denrudik2001'})
}