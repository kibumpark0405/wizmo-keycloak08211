<template>
    <div>
        <Number label="Stock" v-model="value.stock" :editMode="editMode"/>
        <ProductId offline label="ProductId" v-model="value.productId" :editMode="editMode" @change="change"/>

        <v-divider class="border-opacity-100 my-divider"></v-divider>
        <v-layout row justify-end>
            <v-btn
                width="64px"
                color="primary"
                @click="save"
            >
                저장
            </v-btn>
        </v-layout>
    </div>
</template>


<script>
import BaseEntity from './base-ui/BaseEntity'

export default {
    name: 'Iventory',
    mixins:[BaseEntity],
    components:{
    },
    
    data: () => ({
        path: "iventories"
    }),
    created(){
    },
    computed:{
    },
    methods: {
    },
}
</script>

