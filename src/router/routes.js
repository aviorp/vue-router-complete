
import Home from '../components/Home.vue';
import Header from '../components/Header.vue';
import NotFound from '../components/404.vue';

// ! lazy loading !
const User = resolve=> {
    require.ensure(['../components/User.vue'], ()=> {
     resolve(require('../components/User.vue'));
    });
};
const UserStart = resolve=> {
    require.ensure(['../components/UserStart.vue'], ()=> {
     resolve(require('../components/UserStart.vue'));
    });
};
const UserEdit = resolve=> {
    require.ensure(['../components/UserEdit.vue'], ()=> {
     resolve(require('../components/UserEdit.vue'));
    });
};
const UserDetail = resolve=> {
    require.ensure(['../components/UserDetail.vue'], ()=> {
     resolve(require('../components/UserDetail.vue'));
    });
};

export const routes = [

    {
        path: '/',
        components:{
            default:Home,
            'header-top':Header
        },
        name:'home'
    },
    {
        path: '/user/',
        component: User,
        children: [{
                path: '',
                component: UserStart
            },
            {
                path: ':id',
                component: UserDetail,
                // local middleware
                beforeEnter:(to,from,next)=> {
                    console.log('inside route setup');
                    next();
                }
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit'
            },
         
        ]
    },
    {
        path: '*',
        component: NotFound
    },
    {
        path:'/redirect-me',
        name:'redirect',
        redirect:'/user'
   },
];