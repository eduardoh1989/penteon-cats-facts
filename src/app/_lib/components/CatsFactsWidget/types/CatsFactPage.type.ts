import CatsFactCardData from "./CatsFactCardData.type"

export interface CatsFactPage {
  list: CatsFactCardData[];
  page: number;
  nextCursor: number | null;
}

export default CatsFactPage;
