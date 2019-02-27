import * as types from '../types';

const state = {
    headertabList:[
        
            {id: 0, name: '居家', isActive: false, linkTo: '/home'},
            {id: 1, name: '餐厨', isActive: false, linkTo: '/cook'},
            {id: 2, name: '配件', isActive: false, linkTo: '/parts'},
            {id: 3, name: '服装', isActive: false, linkTo: '/cloth'},
            {id: 4, name: '洗护', isActive: false, linkTo: '/wash'},
            {id: 5, name: '婴童', isActive: false, linkTo: '/baby'},
            {id: 6, name: '杂货', isActive: false, linkTo: '/messy'},
            {id: 7, name: '饮食', isActive: false, linkTo: '/drink'},
            {id: 8, name: '志趣', isActive: false, linkTo: '/hobby'}
      
    
    ]
}
const actions = {
    changeHeadertabActive({commit},id){
        commit(types.CHANGE_HEADER_TAB,id);
    }
} 
const getters= {
    headertabList:state =>state.headertabList
}
const mutations = {
    [types.CHANGE_HEADER_TAB](state,id){
        state.headertabList.forEach(element=>{
            element.isActive = false
        });
        state.headertabList[id].isActive = true
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}
