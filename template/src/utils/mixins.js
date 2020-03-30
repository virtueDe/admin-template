export default {
  $exportCheckAll: {
    data() {
      return {
        checkAll: true,
        isIndeterminate: false,
      };
    },
    methods: {
      handleCheckedCitiesChange(value) {
        const checkedCount = value.length;
        this.checkAll = checkedCount === this.checkList.length;
        this.isIndeterminate =
          checkedCount > 0 && checkedCount < this.checkList.length;
      },
      handleCheckAllChange(value) {
        this.checkIndex = value
          ? (this.checkIndex = this.checkList.map((e) => {
              return e.index;
            }))
          : [];
        this.isIndeterminate = false;
      },
    },
  },
};
