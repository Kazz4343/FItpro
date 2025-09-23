import { Calendar, CheckCircle, TrendingUp, Users } from "lucide-react";


export const navItem = [
    {name: "Home", href: "#"},
    {name: "Programs", href:"#"},
    {name: "About", href:"#"},
    {name: "Pricing", href:"#"},
    {name: "Contract", href:"#"}
]

export const programs = [
  {
    title: "Strength Training",
    description:
      "Build muscle and increase your power with our comprehensive strength training programs.",
    image: "/strength.jpg",
  },
  {
    title: "Yoga & Flexibility",
    description:
      "Improve your flexibility, balance, and mindfulness through guided yoga sessions.",
    image: "/yoga.jpg",
  },
  {
    title: "Cardio Workouts",
    description:
      "Boost your cardiovascular health with high-energy cardio training sessions.",
    image: "/cardio.jpg",
  },
  {
    title: "Nutrition Guidance",
    description:
      "Get personalized nutrition plans to fuel your body and achieve your fitness goals.",
    image: "/nutrition.jpg",
  },
];

export const features = [
    {
      icon: CheckCircle,
      title: "Certified Professional Trainers",
      description:
        "Work with certified fitness professionals who have years of experience and expertise.",
    },
    {
      icon: TrendingUp,
      title: "Personalized Workout & Diet Plans",
      description:
        "Get customized plans tailored to your specific goals, fitness level, and preferences.",
    },
    {
      icon: Calendar,
      title: "Flexible Schedules",
      description:
        "Choose from online and offline sessions that fit your busy lifestyle and schedule.",
    },
    {
      icon: Users,
      title: "Community Support & Progress Tracking",
      description:
        "Join a supportive community and track your progress with our advanced monitoring tools.",
    },
  ];


export const review = [
  {
    name: "Sarah M.",
    story: "I lost 20lbs in 3 months with this program!",
    details:
      "The personalized training and nutrition plan made all the difference. I feel stronger and more confident than ever.",
    image: "/sarah.jpg",
    rating: 5,
  },
  {
    name: "John D.",
    story: "The trainers push me beyond my limits in a healthy way.",
    details:
      "Professional, motivating, and results-driven. I've gained muscle and improved my overall fitness significantly.",
    image: "/john.jpg",
    rating: 4,
  },
  {
    name: "Emily R.",
    story: "Flexible scheduling made it possible to stay consistent.",
    details:
      "As a busy mom, the online sessions and flexible timing helped me maintain my fitness routine without stress.",
    image: "/emily.jpg",
    rating: 5,
  },
];