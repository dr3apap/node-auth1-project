authentication = (req, res, next) => {
  // return () => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(404).json({
      message: "You are not authorized, therefore you shall not pass!!",
    });
  }

  // console.log("session", req.session);
  // };
};
