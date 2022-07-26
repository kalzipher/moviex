export interface Genrer {
  id: number;
  name: string;
  status?: boolean;
}

export interface GenrerResponse {
  genres: Genrer[];
}
