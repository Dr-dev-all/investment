const adminRoutes = (req, res, next) => {
  if (req.user.isAdmin === false) {
    return res.redirect("http://127.0.0.1:5000/auths/login");
  }

  next();
};

const userRoutes = (req, res, next) => {
  if (req.user.isAdmin !== false || req.user.isActive === false) {
    return res.redirect("http://127.0.0.1:5000/users/register");
  }

  next();
};

export default {
  adminRoutes,
  userRoutes,
};
