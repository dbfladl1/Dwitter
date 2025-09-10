import { User } from "../interface/user";

let users: User[] = [
  {
    id: "1",
    userId: "user01",
    password: "Password1!",
    nickname: "rimiss",
    email: "abc@abc.com",
    profileUrl: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

export async function findByUserId(userId: string) {
  return users.find((user) => user.userId === userId);
}

export async function createUser(user: {
  userId: string;
  password: string;
  nickname: string;
  email: string;
  url?: string;
}) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
