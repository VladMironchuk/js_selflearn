import colors from 'colors'

export function logger(req, res, next) {
  console.log(colors.random(`request time: ${req.requestTime}`))
  next()
}

export function requestTime(req, res, next) {
  req.requestTime = Date.now()
  next()
}