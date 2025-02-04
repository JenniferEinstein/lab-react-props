import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";
import DonationForm from "./Components/DonationForm";


const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];


let totalDonate=0
for (let donation of donations){
  totalDonate += donation.amount;
  console.log(totalDonate)
}


function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">          
          <RecentDonations donations={donations}/>
        </section>
        <section className="">
          <Progress mango={totalDonate} targetAmount={targetAmount} />
  {/* The word Progress here means Go To the Progress component. The word mango is saying go find the variable Mango in the Progress component  */}
          <DonationForm id={donations}/>
        </section>
      </main>
    </>
  );
}

export default App;
