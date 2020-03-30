export default {
  str2ymd(val) {
    if (!val) return '- -';
    const newDate = new Date(val);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    function formatNumber(n) {
      n = n.toString();
      return n[1] ? n : `0${n}`;
    }
    return [year, month, day].map(formatNumber).join('-');
  },
  str2ymdhm(val) {
    if (!val) return '- -';
    const newDate = new Date(val);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const hour = newDate.getHours();
    const minute = newDate.getMinutes();
    const second = newDate.getSeconds();
    function formatNumber(n) {
      n = n.toString();
      return n[1] ? n : `0${n}`;
    }
    return `${[year, month, day].map(formatNumber).join('-')} ${[
      hour,
      minute,
      second,
    ]
      .map(formatNumber)
      .join(':')}`;
  },
};
