import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8080'

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export function getCarousel () {
  return axios.get('getcarousel')
}

export function getClaList () {
  return axios.get('getClaList')
}

export function getPubMap () {
  return axios.get('getpubmap')
}

export function getHotCategory () {
  return axios.get('gethotcategory')
}

export function getSmallCarousel () {
  return axios.get('getsmallcarousel')
}

export function getHotBrands () {
  return axios.get('gethotbrands')
}

export function getPopRec () {
  return axios.get('getpoprec')
}

export function getLike () {
  return axios.get('getlike')
}
