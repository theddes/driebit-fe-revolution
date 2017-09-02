/**
* Async await wrapper for easier error handling
*/

export default function until (promise) {
    return promise.then(data => {
        return data
    }).catch(err => err.response)
}
