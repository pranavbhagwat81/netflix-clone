export type GENRE_TYPE_DTO =
  | "Top Rated"
  | "In Theatres"
  | "Up Coming"
  | "Family"
  | "Horror"
  | "Action"
  | "Comedy"
  | "Kids"

export interface ProfileInfoDTO {
  name: string, 
  pic: string
}

export interface movieBlockDTO {
  key: GENRE_TYPE_DTO,
  isLarge: boolean;
  fetchURL: string
}

export type modalCloseEventDTO = "backdropClick" | "escapeKeyDown"

export interface movieDTO {
  "adult": boolean,
  "backdrop_path": string,
  "genre_ids": number[],
  "id": number,
  "original_language": string,
  "original_title"?: string,
  "name": string,
  "original_name"?:string,
  "overview": string,
  "popularity": number,
  "poster_path": string,
  "release_date": string,
  "title": string,
  "video": boolean,
  "vote_average": number,
  "vote_count": number
}