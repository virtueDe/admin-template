<template>
  <div class="search-box" v-if="!$_.isEmpty(searchData)">
    <span class="ctrl-btn">
      <slot name="before" />
    </span>
    <div class="form" v-for="(item, idx) in searchDataIsVisible" :key="idx">
      <!--选择器-->
      <div v-if="item.type === 'select'" class="select">
        <span class="text">{{ item.title }}</span>
        <el-select
          v-model="query[item.model]"
          :style="{ width: item.width }"
          :placeholder="item.placeholder"
          clearable
          filterable
          @change="emitSearchChange"
        >
          <el-option
            v-for="(i, idx) in (item.enumType ? $enums[item.enumType].allList() : item.option)"
            :label="i.label"
            :value="i.value"
            :key="idx"
          />
        </el-select>
      </div>
      <!--选择器不可删除为空-->
      <div v-if="item.type === 'selectClear'" class="selectClear">
        <span class="text">{{ item.title }}</span>
        <el-select
          v-model="query[item.model]"
          :style="{ width: item.width }"
          :placeholder="item.placeholder"
          filterable
          @change="emitSearchChange"
        >
          <el-option
            v-for="(i, idx) in (item.enumType ? $enums[item.enumType].allList() : item.option)"
            :label="i.label"
            :value="i.value"
            :key="idx"
          />
        </el-select>
      </div>
      <!--基础多选-->
      <div v-if="item.type === 'multiple'" class="select">
        <span class="text">{{ item.title }}</span>
        <el-select
          v-model="item.model"
          :style="{ width: item.width }"
          clearable
          multiple
          collapse-tags
          :placeholder="item.placeholder"
          @change="(value) => checkMultiple(value, item)"
        >
          <el-option
            v-for="(i, idx) in item.option"
            :label="i.label"
            :value="i.value"
            :key="idx"
          />
        </el-select>
      </div>
      <!--多选联级选择器-->
      <div v-if="item.type === 'cascader'" class="cascader">
        <span class="text">{{ item.title }}</span>
        <el-cascader
          :style="{ width: item.width }"
          @change="(value) => cascaderChange(value, item)"
          :options="item.option"
          :props="{ multiple: true }"
          :show-all-levels="false"
          :placeholder="item.placeholder"
          clearable
          collapse-tags
        />
      </div>
      <!--时间区间-->
      <div v-if="item.type === 'dateSection'" class="date-section">
        <span class="text">{{ item.title }}</span>
        <el-date-picker
          class="date"
          :format="item.format ? item.format : 'yyyy-MM-dd'"
          value-format="timestamp"
          v-model="item.model"
          type="daterange"
          align="right"
          unlink-panels
          @change="(value) => dateChange(value, item)"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
          :picker-options="item.isOptions && pickerOptions"
        />
      </div>
      <!--时间-->
      <div v-if="item.type === 'date'">
        <span class="text">{{ item.title }}</span>
        <el-date-picker
          v-model="item.model"
          :format="item.dateType === 'month' ? 'yyyy年MM月' : 'yyyy-MM-dd'"
          class="date"
          value-format="timestamp"
          :type="item.dateType"
          @change="(value) => dateSingeChange(value, item)"
          placeholder="选择时间"
        />
      </div>
      <div v-if="item.type === 'input'" class="input">
        <el-input
          @keyup.enter.native="emitSearchChange"
          @clear="emitSearchChange"
          clearable
          v-model="query[item.model]"
          :placeholder="item.placeholder"
          :maxlength="item.maxlength"
        >
          <!--<el-button @click="emitSearchChange" slot="append" icon="el-icon-search"></el-button>-->
          <!--<i @click="$search(table)" slot="suffix" class="el-input__icon el-icon-search"></i>-->
        </el-input>
      </div>
    </div>
    <div style="display: inline-block;" class="mr20px">
      <el-button type="primary" @click="emitSearchChange">查 询</el-button>
    </div>
    <span class="ctrl-btn" style="flex: 1;">
      <slot name="after" />
    </span>
  </div>
</template>
<script>
export default {
  props: {
    searchData: {
      type: Array,
      default() {
        return [];
      },
    },
    query: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    searchDataIsVisible() {
      return this.searchData.filter((t) => !t.hide);
    },
  },
  data() {
    return {
      // 多选日期
      date: [],
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(
                new Date(new Date().setMonth(new Date().getMonth() - 1))
              );
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(
                new Date(new Date().setMonth(new Date().getMonth() - 3))
              );
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(
                new Date(new Date().setMonth(new Date().getMonth() - 6))
              );
              picker.$emit('pick', [start, end]);
            },
          },
        ],
      },
    };
  },
  methods: {
    emitSearchChange() {
      this.$emit('on-search-change', 1);
    },
    // cascader 值改变的时候
    cascaderChange(val, item) {
      if (val.length) {
        item.flat = val;
        this.query[item.model] = val.map((e) => {
          return e[2];
        });
      } else {
        this.query[item.model] = [];
      }
      this.emitSearchChange();
    },
    // 日期选择控件切换的回调
    dateChange(val, item) {
      if (val === null) {
        this.query[item.modelName[0]] = this.query[item.modelName[1]] = null;
      } else {
        // console.log(new Date(val[0]) ,new Date(val[1]))
        this.query[item.modelName[0]] = val[0];
        this.query[item.modelName[1]] = this.$dayjs(
          this.$dayjs(val[1]).format('YYYY-MM-DD 23:59:59')
        ).valueOf();
      }
      this.emitSearchChange();
    },
    // 日期单选控件切换的回调
    dateSingeChange(val, item) {
      this.query[item.model] = val;
      this.emitSearchChange();
    },
    //
    checkMultiple(val, item) {
      this.query[item.modelName] = val;
      this.emitSearchChange();
    },
  },
  mounted() {
    for (let i = 0; i < this.searchData.length; i++) {
      if (
        this.searchData[i].type === 'multiple' &&
        this.searchData[i].model.length !== 0
      ) {
        this.query[this.searchData[i].modelName] = this.searchData[i].model;
      }
    }
  },
};
</script>

<style lang="scss">
.search-box {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;

  .ctrl-btn {
    display: flex;
    height: 32px;
    align-items: center;
  }

  .text {
    margin-right: 14px;
    margin-bottom: 5px;
    font-weight: 400;
    color: $-font-color-1;
  }

  .form {
    margin-right: 15px;
    margin-bottom: 8px;
  }

  .date {
    width: 270px;
  }

  .el-select {
    width: 120px;
  }

  .el-cascader {
    width: 120px;
  }

  .input {
    width: 200px;
  }

  /deep/ .el-range-separator {
    width: 13%;
  }
}
</style>
