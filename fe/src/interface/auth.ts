export interface UserRecord {
  id: string; // 사용자의 고유한 아이디
  userId: string; //사용자 아이디
  password: string; // 사용자 비밀번호
  nickname: string; // 사용자 닉네임
  email: string; // 사용자 메일 주소
  profileUrl?: string; // 사용자 프로필 사진 url
}

export type UserInput = Omit<UserRecord, "id">;

export type UserInfo = Omit<UserRecord, "password">; 