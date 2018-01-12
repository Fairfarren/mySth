<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  #order {
    min-height: 100vh;
    box-sizing: border-box;
    padding: {
      top: 1px;
    }
    background: {
      color: #f2f1f6;
    }
  }
  .orderBox {
    padding: 0 1.56rem;
    margin: {
      top: 1.56rem;
    }
    background: {
      color: #fff;
    }
    >li:nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.56rem 0;
      border: {
        bottom: 1px solid #f2f1f6;
      }
      >span:nth-child(1) {
        @include fontSize(1.5rem, #333333);
      }
      >span:nth-child(2) {
        @include fontSize(1.625rem, #333333);
      }
    }
    >li:nth-child(2) {
      display: flex;
      justify-content: space-between;
      padding: 1.56rem 0;
      border: {
        bottom: 1px solid #f2f1f6;
      }
      >img {
        width: 11rem;
        height: 6.06rem;
        object-fit: cover;
      }
      >h3 {
        padding: 0 1.25rem;
        width: 100%;
        @include fontSize(1.75rem, #333333);
      }
      >span {
        @include fontSize(1.5rem, #333333);
      }
    }
    >li:nth-child(3) {
      display: flex;
      flex-direction: row-reverse;
      padding: 1.56rem 0;
      >span:nth-child(1) {
        @include fontSize(1.75rem, #ff2a2a);
      }
      >span:nth-child(2) {
        @include fontSize(1.5rem, #333333);
      }
    }
  }
  .noOrder {
    width: 100%;
    height: 100vh;
    position: relative;
    >div {
      display: inline-block;
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      top: 30%;
      text-align: center;
      img {
        width: 24.93rem;
      }
      p {
        @include fontSize(1.5rem, #333333);
        margin: {
          top: 1rem;
        }
      }
    }
  }
</style>

<template>
  <div id="order">
    <ul
      class="orderBox" v-if="orderList.length > 0"
      v-for="(value, index) in orderList"
    >
      <li>
        <span>{{ value.date }}</span>
        <span>交易成功</span>
      </li>
      <li>
        <img :src="value.img" alt="">
        <h3>
          {{ value.course_name }}
        </h3>
        <span>
          ￥{{ value.total_fee }}
        </span>
      </li>
      <li>
        <span>
          ￥{{ value.total_fee }}
        </span>
        <span>
          实际付款：
        </span>
      </li>
    </ul>
    <!-- <div class="noOrder" v-else>
      <div>
        <p>
          <img src="static/images/nosth.png" alt="">
        </p>
        <p>
          没有订单~
        </p>
      </div>
    </div> -->
    <NoList v-if="orderList.length === 0" noTitle="没有订单~"/>
  </div>
</template>

<script>
import NoList from '@/components/noList'

export default {
  components: {
    NoList
  },
  data () {
    return {
      page: 1,
      orderList: []
    }
  },
  methods: {
    getOderList () {
      this.axios.get(`/wx/people/order?page=${this.page}`).then(res => {
        if (res.data.status_code === 200) {
          this.orderList = res.data.order_list
        } else if (res.data.status_code === 401) {
          this.$store.commit('NOW401')
        } else {
          this.Toast.fail(res.data.msg)
        }
      }).catch(error => {
        console.log(error)
        this.Toast.fail('网络连接错误')
      })
    }
  },
  mounted () {
    this.getOderList()
  }
}
</script>
