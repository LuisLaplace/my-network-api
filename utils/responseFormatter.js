const formatResponse = (data, message = 'Success') => {
    return {
      status: 'success',
      message,
      data,
    };
  };
  
  module.exports = formatResponse;
  