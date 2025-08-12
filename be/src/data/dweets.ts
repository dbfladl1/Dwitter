let dweets = [
  {
    id: "1",
    text: "haha",
    createdAt: Date.now().toString(),
    profileUrl:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
    name: "rimiss",
    userId: "dbfladl1",
  },
  {
    id: "2",
    text: "haha2",
    createdAt: Date.now().toString(),
    profileUrl:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
    name: "rimi",
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

export function addDweet(text: string, name: string, userId: string) {
  const dweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date().toString(),
    profileUrl:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
    name,
    userId,
  };
  dweets = [dweet, ...dweets];
  return dweet;
}

export function updateDweet(id: string, text: string) {
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