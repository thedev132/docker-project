"use client"

import CTA from "@/components/ui/CTA/CTA"
import FAQs from "@/components/ui/FAQs/FAQs";
import Features from "@/components/ui/Features/Features";
import Hero from "@/components/ui/Hero/Hero";
import Pricing from "@/components/ui/Pricing/Pricing";
import Testimonial from "@/components/ui/Testimonial/Testimonial";
import VisualFeatures from "@/components/ui/VisualFeatures/VisualFeatures";
import { block } from 'million/react'

export default block(function Home() {
  return (
    <main className="bg-gray-900">
      <Hero />
      <VisualFeatures />
      <Features />
      <CTA />
      <Testimonial />
      <Pricing />
      <FAQs />
    </main>
  );
})
