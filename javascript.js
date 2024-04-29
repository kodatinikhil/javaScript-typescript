/*  Fetch call using promise */
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  },
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});

/*  fetch call using async and await */
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
}

fetchData();

/* axios using promise */
const axios = require('axios');

// Define custom headers
const customHeaders = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
};

// Make the Axios call with custom headers
axios.get('https://api.example.com/data', {
  headers: customHeaders
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

/* axios using async and await*/
const axios = require('axios');

async function fetchData() {
  const customHeaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  };

  try {
    const response = await axios.get('https://api.example.com/data', {
      headers: customHeaders
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();



