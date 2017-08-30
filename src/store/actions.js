const actions = {
    async setName (context, name) {
        return context.commit('set_name', name)
    }
}

export default actions
