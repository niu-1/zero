<template>
    <div>
        <Header></Header>
        <Swiper></Swiper>
        <Icons></Icons>
    </div>
</template>

<script>
import Header from '@/components/HomeHeader.vue'
import Swiper from '@/components/Swiper.vue'
import Icons from '@/components/Icons.vue'
export default {
    components: {
        Header,
        Swiper,
        Icons
    }
}
</script>

