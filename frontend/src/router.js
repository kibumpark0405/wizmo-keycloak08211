
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import BasicCompanyManager from "./components/listers/BasicCompanyCards"
import BasicCompanyDetail from "./components/listers/BasicCompanyDetail"
import BasicProductManager from "./components/listers/BasicProductCards"
import BasicProductDetail from "./components/listers/BasicProductDetail"

import InventoryIventoryManager from "./components/listers/InventoryIventoryCards"
import InventoryIventoryDetail from "./components/listers/InventoryIventoryDetail"

import SalesSalesOrderManager from "./components/listers/SalesSalesOrderCards"
import SalesSalesOrderDetail from "./components/listers/SalesSalesOrderDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/basics/companies',
                name: 'BasicCompanyManager',
                component: BasicCompanyManager
            },
            {
                path: '/basics/companies/:id',
                name: 'BasicCompanyDetail',
                component: BasicCompanyDetail
            },
            {
                path: '/basics/products',
                name: 'BasicProductManager',
                component: BasicProductManager
            },
            {
                path: '/basics/products/:id',
                name: 'BasicProductDetail',
                component: BasicProductDetail
            },

            {
                path: '/inventories/iventories',
                name: 'InventoryIventoryManager',
                component: InventoryIventoryManager
            },
            {
                path: '/inventories/iventories/:id',
                name: 'InventoryIventoryDetail',
                component: InventoryIventoryDetail
            },

            {
                path: '/sales/salesOrders',
                name: 'SalesSalesOrderManager',
                component: SalesSalesOrderManager
            },
            {
                path: '/sales/salesOrders/:id',
                name: 'SalesSalesOrderDetail',
                component: SalesSalesOrderDetail
            },



    ]
})
