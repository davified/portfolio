const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller.js')

// app.use('/', router)
// app.use('/profile', router)
// app.use('/links', router)
// app.use('/projects', router)
// app.use('/skills', router)
// app.use('/education', router)
// app.use('/work', router)

// ROOT
router.get('/', (req, res) =>{
  res.status(200).json({
    title: "David Tan",
    profile: '/profile',
    links: '/links',
    projects: '/projects',
    skills: '/skills',
    education: '/education',
    work: '/work'
  })
})

// PROFILE
router.get('/profile', controller.getProfile)

// LINKS
router.get('/links', controller.getLinks)

// PROJECTS
router.get('/projects', controller.getProjects)
// PROJECTS (:id)
// router.get('/projects/:id', controller.getProjectsById)

// SKILLS
router.get('/skills', controller.getSkills)

// EDUCATION (removed :id)
router.get('/education', controller.getEducation)

// WORK (:id)
router.get('/work', controller.getWork)

// router.get('/work/:id', controller.getWorkById)

module.exports = router
