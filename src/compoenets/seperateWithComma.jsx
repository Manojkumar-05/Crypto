export default function convertToIndianFormat(number) {
  const rupee = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  console.log(rupee);
  return rupee;
}
