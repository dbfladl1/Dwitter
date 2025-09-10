let dweets = [
  {
    id: "1",
    text: "hssssaha",
    createdAt: Date.now().toString(),
    profileUrl:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
    nickname: "rimiss",
    userId: "dbfladl1",
  },
  {
    id: "2",
    text: "hassha2",
    createdAt: Date.now().toString(),
    profileUrl:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
    nickname: "rimi",
    userId: "dbfladl2",
  },
];

export function getAll() {
  return dweets;
}

export function getAllByUserId(userId: string) {
  return dweets.filter((d) => d.userId === userId);
}

export function getById(id: string) {
  return dweets.find((d) => d.id === id);
}

export function add(text: string, nickname: string, userId: string) {
  const dweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date().toString(),
    profileUrl:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
    nickname,
    userId,
  };
  dweets = [dweet, ...dweets];
  return dweet;
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