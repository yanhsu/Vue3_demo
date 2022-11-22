import { createStore } from "vuex"
import axios from "axios";

const store = createStore({
    //狀態儲存庫
    state: {
        data: {}, //api資料
        isLoad: false, //是否為loading
        errorMsg: '', //錯誤訊息
        isError: false //是否有錯誤
    },
    mutations: {
        //更新api 資料
        updateData(state, payload) {
            console.log(payload)
            state.data = payload
        },
        //更新Loading狀態
        updateLoad(state, payload) {
            state.isLoad = payload
        },
        //更新錯誤訊息
        updateErrorMsg(state, payload) {
            state.errorMsg = payload.errorMsg
            state.isError = payload.isError
        }
    },
    actions: {
        //取得api資料動作
        async getData({ commit }, payload) {
            try {
                //開啟loading  
                commit('updateLoad', true);
                // console.log('payload:' + JSON.stringify(payload))

                let res = await axios.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/"+payload.city+"?%24filter=Picture%2FPictureUrl1%20ne%20null%20and%20Picture%2FPictureDescription1%20ne%20null%20and%20Class1%20ne%20null&%24top=1&%24skip=" + payload.skip + "&%24format=JSON", {
                    headers: { 'Accept': 'application/json' },
                });
                console.log(res)

                //更新api資料
                commit('updateData', res.data);
                //關閉loading   
                commit('updateLoad', false);
            } catch (error) { //錯誤處理
                console.log(error)
                //關閉loading
                commit('updateLoad', false);
                //設定錯誤訊息
                commit('updateErrorMsg', {
                    errorMsg: '取得api 錯誤',
                    isError: true
                })
            }
        }
    }
})

export default store