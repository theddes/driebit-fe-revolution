/**
* Super simple async await wrapper for easier error handling
* - removes the need for try catch blocks
*/

export default function until (promise) {
    return promise.then(data => {
        return data
    }).catch(err => err.response)
}
