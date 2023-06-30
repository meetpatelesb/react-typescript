import { FC, useState, ChangeEvent } from "react";
import { IMovieProps } from "../helper/interface/movie.interface";


// ---------------- type 1 -----------------------------------------------------------------------------------------------------------
// const User = ({name,age,available}: IAppProps) => {

export const Movie: FC<IMovieProps> = ({ name, budget, available, review }) => {
  const [country, setCountry] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h1>{budget}</h1>

      {/* <input
        placeholder="please enter country name"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCountry(event.target.value);
        }}
      /> */}

      <input placeholder="please enter country name" onChange={handleChange} />

      <h1>{country}</h1>
      <h1>{review}</h1>
    </div>
  );
};

 
