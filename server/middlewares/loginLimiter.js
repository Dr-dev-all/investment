import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minutes,
  max: 5, // limit each IP to 5 requests per windowMs,
  message: {
    message:
      'Too many login attempt from this IP, please try again after a 60 seconds pause',
    handler: (req, res, next, options) => {
      res.status(options.statusCode).send(options.message);
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export default loginLimiter;
