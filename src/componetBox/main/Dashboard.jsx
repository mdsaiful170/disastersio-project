
import { useEffect, useState } from "react";
import DashboardHeader from "../ShearComponet/DashboardHeader";
import { Container } from "../shearComponet/Container";
const Dashboard = () => {
    const [isscolled ,setIsScrolled] = useState(false);
    useEffect(()=>{
        const handlescroll = ()=>{
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handlescroll);
        return ()=>{
            window.removeEventListener('scroll', handlescroll);
        }
    })
  return (
    <>
        <DashboardHeader className={`${isscolled ? "bg-textbgcolor" :"bg-headerbg"}`} />
     
    
    </>
  );
};

export default Dashboard;
