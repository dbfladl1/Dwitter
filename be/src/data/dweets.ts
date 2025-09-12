import * as userRepository from "./auth";

let dweets = [
  {
    id: "1",
    text: "hssssaha",
    createdAt: Date.now().toString(),
    userId: "user01",
  },
  {
    id: "2",
    text: "hassha2",
    createdAt: Date.now().toString(),
    userId: "user01",
  },
];

export async function getAll() {
  return Promise.all(
    dweets.map(async (dweet) => {
      const { nickname, profileUrl } = (await userRepository.findByUserId(
        dweet.userId
      )) as { nickname: string; profileUrl: string };
      return { ...dweet, nickname, profileUrl };
    })
  );
}

export async function getAllByUserId(userId: string) {
  return getAll().then((dweets) =>
    dweets.filter((dweet) => dweet.userId === userId)
  );
}

export async function getById(id: string) {
  const found = dweets.find((d) => d.id === id);
  if (!found) {
    return null;
  }
  const { nickname, profileUrl } = (await userRepository.findByUserId(
    found.userId
  )) as { nickname: string; profileUrl: string };
  return { ...found, nickname, profileUrl };
}

export function add(text: string, userId: string) {
  const dweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date().toString(),
    userId,
  };
  dweets = [dweet, ...dweets];
  return getById(dweet.id);
}

export function update(id: string, text: string) {
  const dweet = dweets.find((d) => d.id === id);
  if (dweet) {
    dweet.text = text;
    return dweet;
  }
  return null;
}

export function remove(id: string) {
  dweets.filter((d) => d.id !== id);
  return true;
}
