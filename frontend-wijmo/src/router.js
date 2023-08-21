
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import CompanyManager from "./components/ui/CompanyGrid"
import ProductManager from "./components/ui/ProductGrid"

import IventoryManager from "./components/ui/IventoryGrid"

import SalesOrderManager from "./components/ui/SalesOrderGrid"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/companies',
                name: 'CompanyManager',
                component: CompanyManager
            },
            {
                path: '/products',
                name: 'ProductManager',
                component: ProductManager
            },

            {
                path: '/iventories',
                name: 'IventoryManager',
                component: IventoryManager
            },

            {
                path: '/salesOrders',
                name: 'SalesOrderManager',
                component: SalesOrderManager
            },



    ]
})
