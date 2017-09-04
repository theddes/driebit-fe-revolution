import Index from '@/views/Index'

const routes = [
    {
        path: '/:term?/:id?', // : designates a `param` and ? makes it optional
        name: 'Index',
        component: Index
    }
]

export default routes
