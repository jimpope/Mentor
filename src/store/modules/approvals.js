import Axios from "axios";

const state = {
    pending: []
};

const getters = {
    allPending: (state) => {
        return state.pending;
    }
};

const actions = {
    async fetchApprovals({commit}){
        const response = await Axios.get('http://lnaphoeaz11.swift.com/driverservices/mentorapplication.nsf/jsonview?openagent&id=PendingApproval');
        //console.log(response);
        commit('setPending', response.data);
    }
};

const mutations = {
    setPending: (state, pending) => (state.pending = pending),
};

export default {
    state,
    getters,
    actions,
    mutations
}
