const mongoose = require('mongoose')

const ProfileSchema = mongoose.Schema({
  name: String,
  about: String,
  image: String
  // links: [LinkSchema],
  // projects: [ProjectSchema],
  // skills: [SkillSchema],
  // work: [WorkSchema],
  // education: [EducationSchema]
})

const SkillSchema = mongoose.Schema({
  skill: String,
  proficiency: Number
})

const LinkSchema = mongoose.Schema({
  linkType: String,
  url: String,
  logo: String
})

const ProjectSchema = mongoose.Schema({
  linkType: String,
  url: String,
  language: String,
  screenshot: String
})

const EducationSchema = mongoose.Schema({
  school: String,
  study: String,
  yearCompleted: String,
  honors: String,
  description: String
})

const WorkSchema = mongoose.Schema({
  employer: String,
  country: String,
  startDate: String,
  endDate: String,
  jobDescription: String
})

const Profile = mongoose.model('Profile', ProfileSchema)
const Skill = mongoose.model('Skill', SkillSchema)
const Link = mongoose.model('Link', LinkSchema)
const Project = mongoose.model('Project', ProjectSchema)
const Education = mongoose.model('Education', EducationSchema)
const Work = mongoose.model('Work', WorkSchema)

module.exports = {
  Profile: Profile,
  Skill: Skill,
  Link: Link,
  Project: Project,
  Education: Education,
  Work: Work
}
