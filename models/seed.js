require('dotenv').config()
var seeder = require('mongoose-seed')
const Profile = require('./profile.js').Profile
const Skill = require('./profile.js').Skill
const Link = require('./profile.js').Link
const Project = require('./profile.js').Project
const Education = require('./profile.js').Education
const Work = require('./profile.js').Work

seeder.connect(process.env.MONGODB_URI, function () {
  seeder.loadModels('models/profile.js')
  seeder.clearModels(['Profile', 'Skill', 'Link', 'Project', 'Education', 'Work'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data)
  })
})

var data = [{
  'model': 'Profile',
  'documents': [
    {
      name: 'David Tan',
      about: 'I\'m a web developer',
      image: 'http://i.imgur.com/VacLVWt.png'
    }]
  }]
