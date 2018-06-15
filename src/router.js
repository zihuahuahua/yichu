import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Denglu from '@/components/Denglu'
import Shouye from '@/components/Shouye'
import News from '@/components/News'
import Chat from '@/components/Chat'
import Topic from '@/components/Topic'
import CircleDesk from '@/components/CircleDesk'
import Myself from '@/components/Myself'
import Music from '@/components/Music'
import Message from '@/components/Message'
import MessageHour from '@/components/MessageHour'
import SecondShouye from '@/components/SecondShouye'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/denglu',
            component: Denglu
        },
        {
            path: '/shouye',
            component: Shouye,
        },
        {
            path: '/news',
            component: News,
        },
        {
            path: '/chat',
            component: Chat,
        },
        {
            path: '/topic',
            component: Topic,
        },
        {
            path: '/circledesk',
            component: CircleDesk,
        },
        {
            path: '/myself',
            component: Myself,
        },
        {
            path: '/music',
            component: Music,
        },
        {
            path: '/message',
            component: Message,
        },
        {
            path: '/messagehour',
            component: MessageHour,
        },
        {
            path:'/shouye/:id',
            component:SecondShouye
        },
        {
            path: '/article',
            component: Article
        }
    ]
})