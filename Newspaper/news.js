import { createServer } from "http";

const server = createServer(function (req, res) {
  const category = req.url;

  if (category == "/technology") {
    res.end("<html><body>Technology news</body></html>");
  } else if (category == "/soccer") {
    res.end("<html><body>Soccer news</body></html>");
  } else if (category == "/beauty") {
    res.end("<html><body>Beauty news</body></html>");
  } else {
    res.end("<html><body>Newspaper</body></html>");
  }
});
