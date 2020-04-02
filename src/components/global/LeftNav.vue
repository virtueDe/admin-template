<template>
  <div class="left-main">
    <!-- <span class="left-title">{{ $config.title }}</span> -->

    <!-- <div class="left-nav">
      <el-menu router unique-opened :default-active="routerPath">
        <div v-for="(item, idx) in menusChildren" :key="idx">
          <el-menu-item
            :index="item.path"
            v-if="!item.children.length"
            :class="{
              'menus-active':
                !$route.meta.JumpPath &&
                $route.path.split('/')[1] === item.path.split('/')[1],
            }"
          >
            <i class="iconfont" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
          <el-submenu :index="idx + ''" v-else>
            <template slot="title">
              <i class="iconfont" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group>
              <div v-for="(child, childIdx) in item.children" :key="childIdx">
                <el-menu-item :index="child.path" v-if="!child.children.length">
                  {{ child.name }}
                </el-menu-item>
                <el-submenu :index="idx + '1'" v-else>
                  <div slot="title" style="margin-left: 32px;">
                    <span>{{ child.name }}</span>
                  </div>
                  <el-menu-item
                    v-for="(childItem, childItemIdx) in child.children"
                    :key="childItemIdx"
                    :index="childItem.path"
                  >
                    <span style="margin-left: 10px;">{{ childItem.name }}</span>
                  </el-menu-item>
                </el-submenu>
              </div>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: JSON.parse(sessionStorage.getItem('menus')),
      menusChildren: [
        {
          path: '/home',
          icon: 'iconshouye',
          name: '首页',
          children: [],
        },
        {
          path: '/data-b1',
          icon: 'iconzhihuizhongxin',
          name: '指挥中心',
          children: [],
        },
        {
          path: '/search-order/search-order',
          icon: 'icondingdan',
          name: '订单查询',
          children: [],
        },
        {
          path: '/consign-order/consign-order',
          icon: 'icontuoyun',
          name: '托运录单',
          children: [],
        },
        {
          path: '/outgoing-allot/outgoing-allot',
          icon: 'icontiaodu',
          name: '外发调度',
          children: [],
        },
        {
          path: '/examine/to-examine',
          icon: 'iconjiaodanshenhe',
          name: '交单审核',
          children: [],
        },
        {
          path: '/order/order-accounting',
          icon: 'iconhesuan',
          name: '订单核算',
          children: [],
        },
        {
          path: '/accounting/customer-reconciliation',
          icon: 'iconduizhang',
          name: '会计对账',
          children: [
            {
              path: '/accounting/customer-reconciliation',
              icon: '',
              name: '结算客户对账',
              children: [],
            },
            {
              path: '/accounting/inside-driver',
              icon: '',
              name: '内部驾驶员统计',
              children: [],
            },
            {
              path: '/accounting/external-driver',
              icon: '',
              name: '外请车主统计',
              children: [],
            },
          ],
        },
        {
          path: '',
          icon: 'iconjiesuan',
          name: '出纳结算',
          children: [
            {
              path: '/cashier-settlement/contacts-unit',
              icon: '',
              name: '往来单位结算',
              children: [],
            },
            {
              path: '/cashier-settlement/owner-outside',
              icon: '',
              name: '外请车主结算',
              children: [],
            },
            {
              path:
                '/cashier-settlement/information-expense/information-expense',
              icon: '',
              name: '信息费报表',
              children: [],
            },
            {
              path: '/cashier-settlement/cashier-payment/cashier-payment',
              icon: '',
              name: '出纳收付报表',
              children: [],
            },
          ],
        },
        {
          path: '/safety-center',
          icon: 'iconanquan',
          name: '安全中心',
          children: [
            {
              path: '/safety-center/safety-monitoring',
              icon: '',
              name: '安全监控',
              children: [],
            },
            {
              path: '/safety-center/historical-playback',
              icon: '',
              name: '历史回放',
              children: [],
            },
            {
              path: '/safety-center/alarm-management',
              icon: '',
              name: '报警管理',
              children: [
                {
                  path: '/safety-center/alarm-management',
                  icon: '',
                  name: '报警中心',
                  children: [],
                },
                {
                  path: '/safety-center/evidence-center',
                  icon: '',
                  name: '证据中心',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          path: '/oil-management',
          icon: 'iconyouliang',
          name: '油量管理',
          children: [
            {
              path: '/oil-info/oil-info',
              icon: '',
              name: '油量概况',
              children: [],
            },
            {
              path: '/oil-real/oil-real',
              icon: '',
              name: '实时油量',
              children: [],
            },
            {
              path: '/oil-add/oil-add',
              icon: '',
              name: '加油情况',
              children: [],
            },
            {
              path: '/oil-drop/oil-drop',
              icon: '',
              name: '油量骤减',
              children: [],
            },
          ],
        },
        {
          path: '',
          icon: 'icontongji',
          name: '业务报表',
          children: [
            {
              path: '/business-report/customer-statements',
              icon: '',
              name: '客户报表',
              children: [],
            },
            {
              path: '/business-report/driver-report',
              icon: '',
              name: '驾驶员报表',
              children: [],
            },
            {
              path: '/business-report/vehicl-report',
              icon: '',
              name: '车辆报表',
              children: [],
            },
            {
              path: '/business-report/business-type-report',
              icon: '',
              name: '业务类型报表',
              children: [],
            },
            {
              path: '/business-report/site-report',
              icon: '',
              name: '地点报表',
              children: [],
            },
            {
              path: '/business-report/status-report',
              icon: '',
              name: '状态报表',
              children: [],
            },
          ],
        },
        {
          path: '',
          icon: 'iconjiashiyuan',
          name: '驾驶员管理',
          children: [
            {
              path: '/operation/internal-officer',
              icon: '',
              name: '内部驾驶员维护',
              children: [],
            },
            {
              path: '/operation/outside-management',
              icon: '',
              name: '外请车主维护',
              children: [],
            },
          ],
        },
        {
          path: '',
          icon: 'iconcheliang',
          name: '车辆管理',
          children: [
            {
              path: '/vehicle-management/fleet-management',
              icon: '',
              name: '车队管理',
              children: [],
            },
            {
              path: '/vehicle-management/car-management',
              icon: '',
              name: '车辆信息',
              children: [],
            },
            {
              path: '/vehicle-management/equipment-management',
              icon: '',
              name: '设备管理',
              children: [],
            },
            {
              path: '/vehicle-management/sim-management',
              icon: '',
              name: 'SIM卡管理',
              children: [],
            },
          ],
        },
        {
          path: '',
          icon: 'icondanwei',
          name: '往来单位管理',
          children: [
            {
              path: '/operation/operations-management',
              icon: '',
              name: '往来单位维护',
              children: [],
            },
          ],
        },
        {
          path: '',
          icon: 'iconxitong',
          name: '系统管理',
          children: [
            {
              path: '/system-manage/roleManage',
              icon: '',
              name: '权限分配',
              children: [],
            },
            {
              path: '/system-manage/userManage',
              icon: '',
              name: '人员管理',
              children: [],
            },
            {
              path: '/system-manage/company-management',
              icon: '',
              name: '企业管理',
              children: [],
            },
          ],
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.left-main {
  display: inline-block;
  width: $sidebarWidth;
  height: 100%;
  vertical-align: top;
  background-color: $-color-primary-2;
}

// .left-main
//   display: inline-block
//   width: $sidebarWidth
//   height: 100%
//   vertical-align: top
//   box-shadow: 2px 0 8px 0 rgba(255, 255, 255, 0.12)
//   background-color: $-background-color
//   position: relative
//   z-index: 3

//   .left-title
//     display: block
//     width: 100%
//     height: $sidebarHeaderHeight
//     font-weight: bold
//     color: $-color-white
//     font-size: $fontX
//     text-align: center
//     line-height: $sidebarHeaderHeight
//     letter-spacing: 2px

//   .left-nav
//     height: calc(100% - #{$sidebarHeaderHeight})
//     overflow-y: auto
//     overflow-x: hidden

//     /deep/ .el-menu
//     border-right: 0
//     background-color: $-background-color

//     /deep/ .el-menu-item, /deep/ .el-submenu__title
//     height: 48px
//     line-height: 48px
//     color: rgba($-color-white, .6)
//     padding-left: 24px !important

//     i
//       color: rgba($-color-white, .6)
//       margin-right: 10px

//       &:hover
//         background: rgba($color: $-color-primary-1, $alpha: 0.4)

//     /deep/ .el-submenu .el-menu .el-menu-item
//         padding-left: 58px !important

//     /deep/ .el-menu-item.is-active, .active
//         color: $-color-white
//         background-color: $-color-primary-1

//     .menus-active
//       background-color: $-color-primary-1
//       color: $-color-white

//       i
//         color: $-color-white
//
</style>
