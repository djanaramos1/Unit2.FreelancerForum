const names = ['Kim', 'Mike', 'Ria', 'Dame', 'Nicki', 'Lyn', 'Myla'];
const occupations = [
  'Nurse',
  'Developer',
  'Teacher',
  'Programmer',
  'Doctor',
  'Singer',
];
const freelancers = [
    { name: 'Kim', price: 25, occupation: 'Teacher' },
    { name: 'Myla', price: 52, occupation: 'Doctor' },
  ];
  const maxLength = 15;
  function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation =
      occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * 100);
      // Create new freelancer object and push into the freelancers array
  freelancers.push({ name, price, occupation });
}
function render() {
    /** `document.querySelector` is correctly used to select existing DOM elements. */
    const averagePrice = document.querySelector('#average-price');
    const tableBody = document.querySelector('#table-body');
    // Create an array of row elements from the freelancers array
  const rowElements = freelancers.map((freelancer) => {
    // Create a new row for each freelancer
    const newRow = document.createElement('tr');
    // Object destructuring: https://dmitripavlutin.com/javascript-object-destructuring/
    const { name, price, occupation } = freelancer;
    // Create "td" elements for each detail & add the text
    const nameDetail = document.createElement('td');
    nameDetail.innerText = name;

    const occupationDetail = document.createElement('td');
    occupationDetail.innerText = occupation;

    const priceDetail = document.createElement('td');
    priceDetail.innerText = `$${price}`;