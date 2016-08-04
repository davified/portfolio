var profile = {
  name: 'David Tan',
  about: 'I\'m a software developer. I provide tools to help businesses and companies turn concepts into reality. In my free time, I love to trek, dive, take photos and climb mountains.',
  image: 'http://i.imgur.com/VacLVWt.png'
}

var links = [
  {
    linkType: 'GitHub',
    url: 'www.github.com/davified',
    logo: 'http://vectorlogofree.com/wp-content/uploads/2014/05/37318-github-logo-icon-vector-icon-vector-eps.png'
  },
  {
    linkType: 'LinkedIn',
    url: 'https://sg.linkedin.com/in/dtan1',
    logo:
    'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-square2-128.png'
  },
  {
    linkType: '500px',
    url: 'https://500px.com/davified',
    logo: 'http://vectorlogofree.com/wp-content/uploads/2014/05/49342-500px-logo-icon-vector-icon-vector-eps.png'
  }
]

const projects = [
  {
    project: 'Snake',
    url: 'http://davified.github.io/snake-game/',
    language: ['Vanilla Javascript'],
    screenshot: 'http://giphy.com/embed/l46C8KYsBZZVhjVNC'
  },
  {
    project: 'Volunteer Now',
    url: 'http://volunteer-now.herokuapp.com/',
    language: ['Ruby', 'Rails'],
    screenshot: 'http://i.imgur.com/STDwHzL.jpg'
  },
  {
    project: 'Readr',
    url: 'http://volunteer-now.herokuapp.com/',
    language: ['Node.js', 'Express', 'jQuery'],
    screenshot: 'http://giphy.com/embed/l3fQoqYotnRJjcNq0'
  },
  {
    project: 'Carparks-SG',
    url: 'http://volunteer-now.herokuapp.com/',
    language: ['Node.js', 'Express', 'Leaflet.js'],
    screenshot: 'http://i.imgur.com/gCMyDPY.jpg'
  }
]

const skills = [{skill: 'Javascript', proficiency: 6},
                {skill: 'Ruby', proficiency: 8},
                {skill: 'Python', proficiency: 7},
                {skill: 'Rails', proficiency: 6},
                {skill: 'MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS)', proficiency: 6},
                {skill: 'Web Design', proficiency: 7},
                {skill: 'Data Engineering', proficiency: 7},
                {skill: 'Webscraping', proficiency: 7},
                {skill: 'Data Analysis', proficiency: 7
}]

var education = [
  {
    school: 'National University of Singapore',
    study: 'Political Science',
    yearCompleted: '2013',
    honors: 'Second Upper Class Honours',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    school: 'General Assembly',
    study: 'Web Development',
    yearCompleted: '2016',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]
const work = [
  {
    employer: 'Ministry of Trade and Industry',
    country: 'Singapore',
    startDate: 'August 2013',
    endDate: 'April 2016',
    jobDescription: 'Research and trade policy analysis'
  },
  {
    employer: 'International Centre for Trade and Sustainable Development (ICTSD)',
    country: 'Geneva, Switzerland',
    startDate: 'May 2012',
    endDate: 'July 2012',
    jobDescription: 'Research and publications'
  },
  {
    employer: 'International Development Systems (IDS)',
    country: 'Washington DC, US',
    startDate: 'May 2011',
    endDate: 'July 2011',
    jobDescription: 'Research and publications'
  }
]

function getProfile (req, res) {
  // if (err) res.status(401).json({message: 'getProfile error'})
  res.status(200).json(profile)
}

function getLinks (req, res) {
  res.status(200).json(links)
}

function getProjects (req, res) {
  res.status(200).json(projects)
}

// function getProjectsById (req, res) {
//   res.status(200).json()
// }

function getSkills (req, res) {
  res.status(200).json(skills)
}

function getEducation (req, res) {
  res.status(200).json(education)
}

function getWork (req, res) {
  res.status(200).json(work)
}

// function getWorkById (req, res) {
//   res.status(200).json()
// }

module.exports = {
  getProfile: getProfile,
  getLinks: getLinks,
  getProjects: getProjects,
  getSkills: getSkills,
  getEducation: getEducation,
  getWork: getWork
}
