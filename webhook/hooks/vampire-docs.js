const repo = 'vampire-rip/vampire-docs'
const LISTEN = `push:${repo}/master`
const events = require('..')

const { docs: cwd } = require('../../dir')
const utils = require('../utils')({ cwd, repo })

events.on(LISTEN, args => {
  const { repository } = args.payload
  utils.forceCheckoutAndUpdate()
    .then(() => {
      console.log(`update to ${repository.name} succeed.`)
    }, error => {
      console.error(`update to ${repository.name} failed:`, error)
    })
})
