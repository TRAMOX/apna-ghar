import { Metadata } from "next";
import HeroSection from "./components/home/hero";
import Classes from "./components/home/classes";
import Subjects from "./components/home/subjects";
import Faq from "./components/home/faq";
import CustomerStories from "./components/home/customer-stories";
import Subscription from "./components/home/subscription";

export const metadata: Metadata = {
    title: "Home | Apna Ghar - Learn Class 1 to 12",
    description: "Your complete educational platform for classes 1-12. Access quality content, videos, notes, and practice materials.",
};


export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Classes section Starts-----------------  */}
      <Classes />
      {/* ---------------------Classes section Ends-----------------  */}

      {/* ---------------------Subjects section Starts-----------------  */}
      <Subjects />
      {/* ---------------------Subjects section Ends-----------------  */}

      {/* ---------------------Student Testimonials section Starts-----------------  */}
      <CustomerStories />
      {/* ---------------------Student Testimonials section Ends-----------------  */}

      {/* ---------------------Faq section Starts-----------------  */}
      <Faq />
      {/* ---------------------Faq section Ends-----------------  */}

      {/* ---------------------Subscription section Starts-----------------  */}
      <Subscription />
      {/* ---------------------Subscription section Ends-----------------  */}
    </main>
  )
}
