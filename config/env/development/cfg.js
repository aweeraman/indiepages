module.exports = {
  session_secret: "s3ssI0n_Sikri7",
  facebook: {
    api_key : "403530669838044",
    api_secret: "29f9c824f7f681da40237ef283a6832d",
    callback_url: "http://localhost:8080/auth/facebook/callback",
  },
  db_url: "mongodb://localhost/indiepages",
  db_options: {
    auto_reconnect: true,
    server: {
      poolSize: 5,
      socketOptions: {
        keepAlive: 1
      }
    }
  }
};
