// a very crude form of authorization!
export function auth(request, response, next) {
  const { secret } = request.query;

  if (secret !== "ju893jf92kd-2f71329") {
    return response.status(401).send("You shall not pass!");
  }

  next();
}
