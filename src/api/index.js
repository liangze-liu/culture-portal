import request from '@/utils/request'
import qs from 'qs'
export function allData (data) {
  data = qs.stringify(data);
  // console.log(data);
  return request({
    url: "/openapi/cMainResource/query",
    method: "POST",
    data,
  })
}

export function allDetail (data) {
  console.log(data);
  return request({
    url: `/openapi/cMainResource/queryDetail?id=${data.id}&categoryId=${data.categoryId}`,
    data,
  })
}

export function characterType () {
  return request({
    url: '/cot/cCharacterType/CharacterType',
    method: "POST",
  })
}

export function allPic (data) {
  return request({
    url: '/cot/cPicture/getList?pictureId=' + data,
    method: "POST",
    data
  })
}

export function allVideo (data) {
  return request({
    url: '/cot/cFile/getVideo?videoId=' + data,
    data
  })
}

export function venType () {
  return request({
    url: '/cot/cTravelType/TravelType',
    method: "POST",
  })
}

export function tree () {
  return request({
    url: '/cot/basicOrg/listByTree',
    method: "POST"
  })
}

export function queryAll (data) {
  data = qs.stringify(data);
  // console.log(data);
  return request({
    url: "/openapi/cMainResource/query",
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset='
    },
    data,
  })
}

export function getVideo (data) {
  console.log(data);
  return request({
    url: '/cot/cFile/getVideo?videoId=' + data,
    method: 'POST',
  })
}

export function getChoiceness (data) {
  data = qs.stringify(data);
  return request({
    url: '/cot/cLink/pages',
    method: 'POST',
    data: data
  })
}