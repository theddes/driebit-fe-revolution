import Index from '@/views/Index'

const routes = [
    {
        path: '/:term?/:id?',
        name: 'Index',
        component: Index
    }
]

export default routes
