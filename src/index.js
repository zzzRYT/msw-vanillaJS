// This is a simple Node.js application that
// does a network request and prints the response.

import { worker } from "./mocks/browser";

worker.start({
  serviceWorker: {
    options: {
      scope: "/api",
    },
  },
});

const btn = document.getElementById("testBtn");
btn.addEventListener("click", app);

function app() {
  fetch("/api/users", {
    method: "GET",
    headers: {
      Accept: "application / json",
    },
  })
    .then((res) => res.json)
    .then((res) => console.log(res));
}
