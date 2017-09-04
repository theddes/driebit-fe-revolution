const limit = 20

const config = {
    name: 'Driebit Revolution',
    api: {
        base: 'https://www.entoen.nu/api',
        parameters: `&format=simple&limit=${limit}`
    },
    searchSettings: {
        limit,
        forcedLoadTime: 50 // ms per result.. for the sake of UX
    }
}

export default config
