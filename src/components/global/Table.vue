<template>
  <div class="ayl-table">
    <ayl-search-box
      :query="table.query"
      :search-data="table.searchData"
      @on-search-change="onSearchChange"
    >
      <span slot="before">
        <slot name="ctrl-before"></slot>
      </span>
      <span slot="after" style="width: 100%;">
        <slot name="ctrl-button"></slot>
      </span>
    </ayl-search-box>
    <el-table
      :data="table.data"
      class="ayl-table"
      v-loading="table.loading"
      size="medium"
      max-height="550"
      :height="table.tableHeight"
      element-loading-text="数据加载中..."
      :header-cell-style="getRowClass"
      ref="table"
      @selection-change="handleSelectionChange"
      @sort-change="sortChange"
    >
      <!--多选-->
      <el-table-column
        type="selection"
        :width="table.columns[0].width || '50px'"
        v-if="
          table.columns && table.columns.some((t) => t.type === 'selection')
        "
      ></el-table-column>
      <!--单选-->
      <el-table-column
        :width="table.columns[0].width || '50px'"
        v-if="table.columns && table.columns.some((t) => t.type === 'radio')"
        :label="table.columns[0].title || ' '"
        :align="table.columns[0].align || 'center'"
      >
        <template slot-scope="scope">
          <el-radio
            v-model="table.columns[0].value"
            :label="scope.row[table.columns[0].key]"
            @change="radio(scope.row)"
            >&nbsp;
          </el-radio>
        </template>
      </el-table-column>
      <el-table-column
        v-for="(column, idx) in (table.columns && table.columns.filter(t => t.type !== 'selection' && t.type !== 'radio'))"
        :key="idx"
        :type="column.type"
        :label="column.title"
        :prop="column.key"
        :fixed="column.fixed"
        :width="column.width"
        :align="column.align || 'left'"
        :show-overflow-tooltip="column.showTooltip"
        :sortable="column.sortable"
      >
        <template slot-scope="scope">
          <cell
            v-if="column.render"
            :column="column"
            :row="scope.row"
            :index="scope.$index"
            :render="column.render"
          ></cell>
          <span v-else>
            <span v-if="column.filter">{{
              $filters[column.filter](scope.row[column.key])
            }}</span>
            <span v-if="column.$index">{{ scope.$index + 1 }}</span>
            <span v-if="column.enumType">{{
              $enums[column.enumType].getName(scope.row[column.key])
            }}</span>
            <span v-if="!column.filter && !column.enumType && !column.$index">{{
              scope.row[column.key] || '- -'
            }}</span>
            <!--<span v-if="!column.filter && !column.enumType && !column.$index">{{scope.row[column.key] || '- -'}}</span>-->
          </span>
          <!--<cell v-else :column='column' :row='scope.row' :index='scope.$index' :render='column.render'></cell>-->
        </template>
      </el-table-column>
    </el-table>

    <!--@size-change="handleSizeChange"-->
    <!--:page-size="100"-->
    <el-pagination
      background
      v-if="table.pagination"
      @current-change="$search(table)"
      :page-size="10"
      :current-page.sync="table.pagination.currentPage"
      layout="total, prev, pager, next, jumper"
      :total="table.pagination.totalNum"
    >
    </el-pagination>
  </div>
</template>
<script>
import cell from './cell';

export default {
  components: {
    cell,
  },
  created() {
    this.$set(this.table, 'loading', false);
    if (!this.table.hidePagination) {
      this.$set(this.table, 'pagination', {
        currentPage: 1,
        totalNum: 0,
      });
    }
  },
  props: {
    table: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      multipleSelection: [],
    };
  },
  methods: {
    onSearchChange(e) {
      this.$search(this.table, e);
      if (!this.table.hidePagination) {
        this.$set(this.table.pagination, 'currentPage', 1);
      }
    },
    getRowClass({ rowIndex }) {
      if (rowIndex === 0) {
        return 'background:#FAFAFA;color:#262626;font-weight:600;';
      }
      return '';
    },
    handleSelectionChange(val) {
      this.$emit('selection-change', val);
    },
    radio(val) {
      this.$emit('radio-change', val);
    },
    async sortChange({ prop, order }) {
      this.$set(
        this.table.query,
        'orderMode',
        order === 'ascending' ? 'asc' : 'desc'
      );
      this.$set(this.table.query, 'orderRule', prop);
      await this.$search(this.table);
    },
  },
};
</script>

<style lang="scss" scoped>
.ayl-table {
  /deep/ .el-pagination {
    margin-top: 24px;
    text-align: right;
  }
}
</style>
