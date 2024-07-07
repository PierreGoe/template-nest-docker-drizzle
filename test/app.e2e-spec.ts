import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!')
  })

  describe('MapsController (e2e)', () => {
    it('/maps (GET)', () => {
      return request(app.getHttpServer())
        .get('/maps')
        .expect(200)
        .expect('This action returns all maps')
    })

    it('/maps/:id (GET)', () => {
      return request(app.getHttpServer())
        .get('/maps/1')
        .expect(200)
        .expect('This action returns a #1 map')
    })

    it('/maps (POST)', () => {
      return request(app.getHttpServer())
        .post('/maps')
        .send({ name: 'Test Map' })
        .expect(201)
        .expect('This action adds a new map')
    })

    it('/maps/:id (PATCH)', () => {
      return request(app.getHttpServer())
        .patch('/maps/1')
        .send({ name: 'Test Map' })
        .expect(200)
        .expect('This action updates a #1 map')
    })

    it('/maps/:id (DELETE)', () => {
      return request(app.getHttpServer())
        .delete('/maps/1')
        .expect(200)
        .expect('This action removes a #1 map')
    })
  })

  afterEach(async () => {
    await app.close()
  })
})
