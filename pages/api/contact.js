

export default function handler(req, res) {
  console.log(req.body.fullName);
  res.end();
}
