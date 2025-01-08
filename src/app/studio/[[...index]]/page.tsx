"use client"

import { NextStudio } from "next-sanity/studio";
import { SanityConfig } from "@/sanity/sanity.config";




export default function SanityStudio() {
    return(<NextStudio config={SanityConfig}/>)
}