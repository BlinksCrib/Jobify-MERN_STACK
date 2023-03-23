const attachCookie = ({ res, token }) => {
  const oneDay = 1000 * 60 * 60 * 48;

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    SameSite:None,
    secure: process.env.NODE_ENV === 'production',
  });
};

export default attachCookie;
