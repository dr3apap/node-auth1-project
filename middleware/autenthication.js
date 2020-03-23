authentication = () => {
  return (req, res, next) => {
    if (!req.session || !req.session.user) {
      return res.status(404).json({
        message: "You are not authorized, therefore you shall not pass!!",
      });
    }
    next();
  };
};
