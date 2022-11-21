import axios from 'axios';

//取得api
    // https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?%24filter=Picture%2FPictureUrl1%20ne%20null%20and%20Picture%2FPictureDescription1%20ne%20null&%24top=1&%24skip=" + payload + "&%24format=JSON
    // https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/NewTaipei?%24filter=Picture%2FPictureUrl1%20ne%20null%20and%20Picture%2FPictureDescription1%20ne%20null%20and%20Class1%20ne%20null%20and%20Level%20ne%20null&%24top=30&%24skip=" + payload + "&%24format=JSON
    // https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taoyuan?%24filter=Picture%2FPictureUrl1%20ne%20null%20and%20Picture%2FPictureDescription1%20ne%20null&%24top=30&%24skip=

const ScenicSpot = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/'
});

export const taipei =  ScenicSpot.get('Taipei?%24filter=Picture%2FPictureUrl1%20ne%20null%20and%20Picture%2FPictureDescription1%20ne%20null&%24top=1&%24skip=0&%24format=JSON');
export const newTaipei = ScenicSpot.get('NewTaipei?%24filter=Picture%2FPictureUrl1%20ne%20null%20and%20Picture%2FPictureDescription1%20ne%20null&%24top=1&%24skip=0&%24format=JSON');