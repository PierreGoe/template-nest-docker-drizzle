import { Injectable } from '@nestjs/common'
import { CreateMapDto } from './dto/create-map.dto'
import { UpdateMapDto } from './dto/update-map.dto'

@Injectable()
export class MapsService {
  create(createMapDto: CreateMapDto) {
    console.log('createMapDto:', createMapDto)
    return 'This action adds a new map'
  }

  findAll() {
    return `This action returns all maps`
  }

  findOne(id: number) {
    return `This action returns a #${id} map`
  }

  update(id: number, updateMapDto: UpdateMapDto) {
    console.log('updateMapDto:', updateMapDto)
    return `This action updates a #${id} map`
  }

  remove(id: number) {
    return `This action removes a #${id} map`
  }
}
