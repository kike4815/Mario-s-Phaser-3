function convertTime(data) {
  const dataTime = dataSplited[1].slice(0, 8);
  return dataTime;
}
function convertData(data) {
  const dataconverted = data.datetime.split("T");
  return dataconverted[0];
}
export default {
  convertTime,
  convertData,
};

/**problem with CORS */
