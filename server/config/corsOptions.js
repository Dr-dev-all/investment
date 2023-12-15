import allowedOrigins from "./allowedOrigins.js";

export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) === -1) {
      return callback(null, true);
    } else {
      return callback("Origin not allowed", false);
    }
  },
  credential: true,
  "Access-Control-Allow-Credentials": true,
  optionsSuccessStatus: 200,
};
