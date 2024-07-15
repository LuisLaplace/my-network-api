const isEmailValid = (email) => {
    const emailRegex = /.+@.+\..+/;
    return emailRegex.test(email);
  };
  
  module.exports = {
    isEmailValid,
  };
  