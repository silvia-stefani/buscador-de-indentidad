const google = require('googlethis');

exports.apigoogle = async (term) => {
  const options = {
    page: 0, 
    safe: false, // hide explicit results?
    additional_params: { 
      // add additional parameters here, see https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters and https://www.seoquake.com/blog/google-search-param/
      hl: 'es' 
    }
  }
  let response;
  try {
    response = await google.search(term, options);
    console.log(response); 
  } catch (error) {
    console.log(error);
    response = error;
  }
  
  return response;
};

