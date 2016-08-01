const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')


// GET ROOT
describe('GET /', () => {
  it('should return 200 response', (done) => {
    api.get('/')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
})

// GET PROFILE
describe('GET /profile', () => {
  it('should contain an object with name, about-me and an image url', (done) => {
    api.get('/profile')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(response.body).to.have.an('object')
      expect(response.body).to.contain.all.keys(['name', 'about', 'image'])
      done()
    })
  })
})

// GET LINKS
describe('GET /links', () => {
  it('should contain url links and logos for github and linkedin', (done) => {
    api.get('/links')
    .set('Accept', 'application/json')
    .end((error,response) => {
      expect(response.body).to.be.an('array')
      expect(response.body).to.have.deep.property('[0].linkType', 'github')
      expect(response.body).to.have.deep.property('[0].url', 'www.github.com/davified')
      done()
    })
  })
})
// GET PROJECTS (:id)
describe('GET /projects', () => {
  it('should contain an object with properties (project, url, language)', (done) => {
    api.get('/projects')
    .set('Accept', 'application/json')
    .end((error,response) => {
      expect(response.body).to.be.an('array')
      expect(response.body).to.have.deep.property('[0].project')
      expect(response.body).to.have.deep.property('[0].url')
      expect(response.body).to.have.deep.property('[0].language')
      done()
    })
  })
})

// GET SKILLS
describe('GET /skills', () => {
  it('should have an array of skills and corresponding level of mastery', (done) => {
    api.get('/skills')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(response.body).to.be.an('array')
      expect(response.body).to.have.deep.property('[0].skill')
      expect(response.body).to.have.deep.property('[0].level')
      done()
    })
  })
})

// GET EDUCATION (removed :id)
describe('GET /education', () => {
  it('should return an array', (done) => {
    api.get('/education')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(response.body).to.be.an('array')
      done()
    })
  })
})

// GET WORK (:id)
describe('GET /work', () => {
  it('should return an array of objects with the following attributes (employer, startDate, endDate, country)', (done) => {
    api.get('/work')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(response.body).to.be.an('array')
      expect(response.body).to.have.deep.property('[0].employer')
      expect(response.body).to.have.deep.property('[0].startDate')
      expect(response.body).to.have.deep.property('[0].endDate')
      expect(response.body).to.have.deep.property('[0].country')
      done()
    })
  })
  it('should return a specific instance of employment history by id', (done) => {
    api.get('/work/1')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(response.body).to.be.an('object')
      expect(response.body).to.contain.all.keys({'employer': 'Ministry of Trade and Industry'})
      done()
    })
  })
})
