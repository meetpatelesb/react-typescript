import { ReviewStars } from "../../helper/constants/enum";

export interface IMovieProps {
  name: string;
  budget: number;
  available?: boolean;
  review: ReviewStars;

  // ------------if it has arguments then ---- name has string type--------------------------------------------------------------------
  // getName: (name:string)=> string;

  //------------- if function is not return anything then it will be void type---------------------------------------------------------
  // getName?: (name: string) => void;
}
