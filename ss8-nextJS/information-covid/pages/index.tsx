import Link from "next/link";
import axios from "axios";
import { data } from "autoprefixer";

type InforCovid = {
  Date: string;
  Confirmed: number;
  Active: number;
  Recovered: number;
  Deaths: number;
};

 const Home = ({inforCovid}: {inforCovid: InforCovid[]}) =>{
  return (
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Confirm</th>
      <th scope="col">Active</th>
      <th scope="col">Recovered</th>
      <th scope="col">Death</th>

    </tr>
  </thead>
  <tbody>
    {inforCovid.map((data, index) => (
      <tr key={index}>
      <td>{data.Date}</td>
      <td>{data.Confirmed}</td>
      <td>{data.Active}</td>
      <td>{data.Recovered}</td>
      <td>{data.Deaths}</td>
    </tr>
    ))}
    
  </tbody>
   
</table>
)
}

export async function getStaticProps(){
  const res = await fetch('https://api.covid19api.com/total/country/vietnam');
  const data = await res.json();
  return{
    props: {
      inforCovid: data,
    }
  };
}
export default Home