import { http } from '../utils/http'

export function fetchRoomList() {
  return http.httpRequestGet('http://43.140.248.221:3000/comment/music?id=186016&limit=1', {})
}