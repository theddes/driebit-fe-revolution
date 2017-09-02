const actions = {
    updateSearchResults (context, results) {
        // move this to interceptor?
        const processedResults = results.map((result, index) => {
            return {
                id: index,
                type: (typeof result.category !== String) ? result.category[0] : result.category,
                preview: result.preview_url || false,
                title: (result.title.trans) ? result.title.trans.nl : result.title,
                summary: (result.summary) ? (result.summary.trans) ? result.summary.trans.nl : result.summary || false : false
            }
        })
        setTimeout(() => {
            return context.commit('update_search_results', processedResults)
        }, 300)
    }
}

export default actions
