import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Link } from "./link"

const newsArticles = [
    {
      title: "Team Wins First Place at National Robotics Competition",
      date: "May 15, 2024",
      category: "Competitions",
      excerpt:
        "Our team secured the top position at the National Robotics Championship with our innovative autonomous navigation system. The competition, which featured over 50 teams from across the country, challenged participants to design robots capable of navigating complex environments and performing specific tasks without human intervention.",
      img: "/placeholder.svg?height=300&width=500",
      featured: true,
      slug: "national-robotics-competition-win",
    },
    {
      title: "New Partnership with Tech Industry Leader",
      date: "April 28, 2024",
      category: "Partnerships",
      excerpt:
        "We're excited to announce our collaboration with a leading technology company to advance robotics research. This partnership will provide our team with access to cutting-edge hardware, software resources, and industry expertise to accelerate our development of next-generation robotic systems.",
      img: "/placeholder.svg?height=300&width=500",
      featured: true,
      slug: "tech-industry-partnership",
    },
    {
      title: "Robotics Workshop for Local Schools",
      date: "March 10, 2024",
      category: "Education",
      excerpt:
        "Our members conducted an educational workshop introducing robotics concepts to students from local schools. The hands-on session allowed students to build simple robots and learn about programming, mechanical design, and electronics in an engaging and accessible format.",
      img: "/placeholder.svg?height=300&width=500",
      featured: false,
      slug: "local-schools-workshop",
    },
    {
      title: "Open House Event Showcases Latest Projects",
      date: "February 25, 2024",
      category: "Events",
      excerpt:
        "Our annual Open House event was a tremendous success, with over 300 visitors exploring our lab and interacting with our latest robotic projects. Demonstrations included our autonomous delivery robot, haptic feedback arm, and swarm robotics platform.",
      img: "/placeholder.svg?height=300&width=500",
      featured: false,
      slug: "open-house-event",
    },
    {
      title: "Research Paper Accepted at International Conference",
      date: "February 10, 2024",
      category: "Research",
      excerpt:
        "Our team's research paper on novel approaches to robot perception has been accepted at the International Conference on Robotics and Automation (ICRA). This peer-reviewed publication highlights our innovative work in combining traditional computer vision with deep learning techniques.",
      img: "/placeholder.svg?height=300&width=500",
      featured: false,
      slug: "research-paper-accepted",
    },
    {
      title: "New Funding Grant for Assistive Robotics Research",
      date: "January 20, 2024",
      category: "Funding",
      excerpt:
        "We've been awarded a significant research grant to develop assistive robotic technologies for individuals with mobility impairments. This three-year project will focus on creating intuitive, adaptive robotic systems that can assist with daily tasks and enhance independence.",
      img: "/placeholder.svg?height=300&width=500",
      featured: true,
      slug: "assistive-robotics-grant",
    },
    {
      title: "Team Member Recognized with Young Innovator Award",
      date: "January 5, 2024",
      category: "Awards",
      excerpt:
        "One of our talented team members has been honored with the prestigious Young Innovator Award for their groundbreaking work in soft robotics. Their research on novel actuator designs has opened new possibilities for safe human-robot interaction in medical applications.",
      img: "/placeholder.svg?height=300&width=500",
      featured: false,
      slug: "young-innovator-award",
    },
    {
      title: "Robotics Demonstration at Science Museum",
      date: "December 12, 2023",
      category: "Outreach",
      excerpt:
        "Our team conducted an interactive robotics demonstration at the city's Science Museum as part of their 'Future Technology' exhibition. Visitors of all ages had the opportunity to control robots, learn about sensors and actuators, and explore careers in robotics.",
      img: "/placeholder.svg?height=300&width=500",
      featured: false,
      slug: "science-museum-demo",
    },
    {
      title: "New Laboratory Facilities Unveiled",
      date: "November 30, 2023",
      category: "Facilities",
      excerpt:
        "We're proud to announce the opening of our expanded laboratory facilities, featuring state-of-the-art equipment for robotics research and development. The new space includes dedicated areas for mechanical fabrication, electronics testing, and a motion capture arena for robot navigation experiments.",
      img: "/placeholder.svg?height=300&width=500",
      featured: true,
      slug: "new-laboratory-facilities",
    },
    {
      title: "Collaborative Project with Medical Research Center",
      date: "November 15, 2023",
      category: "Partnerships",
      excerpt:
        "We've initiated a collaborative project with the Regional Medical Research Center to develop surgical robotics solutions. This interdisciplinary effort brings together robotics engineers, medical professionals, and computer scientists to create more precise and less invasive surgical tools.",
      img: "/placeholder.svg?height=300&width=500",
      featured: false,
      slug: "medical-research-collaboration",
    },
    {
      title: "Annual Robotics Symposium Announced",
      date: "October 28, 2023",
      category: "Events",
      excerpt:
        "We're excited to announce our Annual Robotics Symposium, scheduled for January 2024. This event will bring together researchers, industry professionals, and students to share the latest advancements in robotics technology and applications.",
      img: "/placeholder.svg?height=300&width=500",
      featured: false,
      slug: "annual-symposium-announced",
    },
    {
      title: "Robotics Team Expands International Collaboration",
      date: "October 15, 2023",
      category: "Partnerships",
      excerpt:
        "Our robotics team has established a new international collaboration with researchers from three universities across Europe and Asia. This global partnership will focus on developing standardized frameworks for robot learning and knowledge sharing.",
      img: "/placeholder.svg?height=300&width=500",
      featured: false,
      slug: "international-collaboration",
    },
    {
      title: "New Undergraduate Robotics Curriculum Launched",
      date: "September 30, 2023",
      category: "Education",
      excerpt:
        "We've launched a comprehensive undergraduate curriculum in robotics engineering, designed to provide students with hands-on experience and theoretical knowledge across mechanical design, electronics, programming, and artificial intelligence.",
      img: "/placeholder.svg?height=300&width=500",
      featured: false,
      slug: "undergraduate-curriculum",
    },
    {
      title: "Robot Design Competition Results",
      date: "September 15, 2023",
      category: "Competitions",
      excerpt:
        "The results of our internal robot design competition are in! Student teams presented innovative solutions for agricultural robotics challenges, with the winning design featuring a novel approach to selective harvesting using computer vision.",
      img: "/placeholder.svg?height=300&width=500",
      featured: false,
      slug: "design-competition-results",
    },
    {
      title: "Robotics Startup Incubator Program Launches",
      date: "August 28, 2023",
      category: "Funding",
      excerpt:
        "We're launching a dedicated incubator program for robotics startups, providing mentorship, technical resources, and seed funding for promising ventures. Applications are now open for the inaugural cohort starting in January.",
      img: "/placeholder.svg?height=300&width=500",
      featured: false,
      slug: "startup-incubator-launch",
    },
  ]
  
  const categories = [
    "All Categories",
    "Competitions",
    "Partnerships",
    "Education",
    "Events",
    "Research",
    "Funding",
    "Awards",
    "Outreach",
    "Facilities",
  ]
  
  const years = ["All Years", "2024", "2023", "2022", "2021"]
  
  // Number of articles per page
  const ITEMS_PER_PAGE = 5
  
  export default function NewsPage() {
    
  
    return (
      <div className="flex-1 flex flex-col sm:flex-row gap-4">
                <Select defaultValue="All Categories">
                    <SelectTrigger className="w-full sm:w-[200px]">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {category}
                                </SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>

                <Select defaultValue="All Years">
                    <SelectTrigger className="w-full sm:w-[150px]">
                        <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            years.map((year) => (
                                <SelectItem key={year} value={year}>
                                    {year}
                                </SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
            </div>
    )
  }
  