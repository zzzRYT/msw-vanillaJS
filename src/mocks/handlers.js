import { http, HttpResponse } from "msw";

const userData = [
  {
    id: 1,
    name: "유저1",
    uid: "user1",
    password: "pass1",
  },
  {
    id: 2,
    name: "유저2",
    uid: "user2",
    password: "pass2",
  },
];

const handlers = [
  http.get("/api/users", () => {
    return HttpResponse.json(userData);
  }),
];

export default handlers;
