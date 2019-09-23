import url from '../URLS/url';
import * as httpLayer from './http-layer';



const mainUrl = url.baseUrl;
const mockUrl = url.mockableio;

export function getData(url){
 const api = mainUrl + url;
 return httpLayer.get(api);
 
}

export function getDataFromMokable(url){
   const api = mockUrl + url;
   return httpLayer.get(api)
}
