export default {
  uploadUrl() {
    return `${process.env.VUE_APP_API}/iot/files/upload`;
  },
  labelPosition: 'left',
  labelWidth: '108px',
};
