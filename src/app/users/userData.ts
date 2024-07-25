export interface UserData {
  users: [
    {
      id: number,
      firstName: string,
      lastName: string,
      maidenName: string,
      age: number
    },
  ],
  total: number,
  skip: number,
  limit: number
}
