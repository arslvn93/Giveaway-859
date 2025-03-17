export const prizeImages = [
  "https://api.typeform.com/responses/files/ea11f57d932d624ed5938c78e4da092cc2e99dcfb94963f5b0bbe23dcfe7f9f1/raps_game.jpg", // Main Raptors game image
  "https://images.unsplash.com/photo-1562771240-dedf1a3d0c51?q=80&w=500", // Crowd and arena view
  "https://images.unsplash.com/photo-1599058918142-a7da94959df9?q=80&w=500", // Basketball action shot
];

export const prizeContent = {
  title: "Toronto Raptors Lower Bowl Tickets",
  description:
    "Experience the thrill of live NBA action! Win TWO lower bowl tickets to watch the Toronto Raptors in action on Friday, March 28, 2025. Perfect for a memorable night out—whether it’s an exciting date or quality time with a basketball fan.",
  features: [
    "Enjoy prime seating in the lower bowl for an up-close view of the game",
    "Tickets valued between $300 and $400",
    "Immerse yourself in the electrifying atmosphere of a live Raptors game",
    "Exclusive offer for true Toronto sports fans",
    "Simple entry process in just a few easy steps",
  ],
  value: "$350",
};

export const headerContent = {
  title: "Win Raptors Lower Bowl Tickets!",
  description:
    "Enter now for a chance to win TWO lower bowl tickets to watch the Toronto Raptors live on Friday, March 28, 2025. Don’t miss your shot at an unforgettable NBA experience!",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
};

export const navigationContent = {
  title: "Raptors Ticket Giveaway",
  links: [
    { name: "Home", href: "#" },
    { name: "Prize Details", href: "#prize" },
    { name: "How to Enter", href: "#howToEnter" },
    { name: "Rules", href: "#rules" },
    { name: "Contact", href: "#contact" },
  ],
};

export const howToEnterContent = {
  title: "How to Enter",
  description: "Getting started is easy! Follow these simple steps to enter our giveaway for Raptors tickets.",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Form",
      description: "Enter your name and email address in the form and submit your entry.",
    },
    {
      icon: "Share2",
      title: "Share with Friends",
      description: "Share this giveaway on social media for extra entries.",
    },
    {
      icon: "Users",
      title: "Confirm Entry",
      description: "Check your email to confirm your entry and you’re all set!",
    },
  ],
  benefits: [
    {
      icon: "Clock",
      title: "Quick & Easy",
      desc: "Takes less than a minute",
    },
    {
      icon: "Trophy",
      title: "Multiple Entries",
      desc: "Share for more chances",
    },
    {
      icon: "Gift",
      title: "Exclusive Prize",
      desc: "Lower bowl tickets valued at up to $400",
    },
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Giveaway",
    processingText: "Processing...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText:
      "By entering, you agree to our Terms & Conditions and Privacy Policy.",
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Check your email to confirm your entry.",
  },
  currentEntries: 150,
};

export const rulesContent = {
  title: "Rules & Eligibility",
  description:
    "Before entering the giveaway, please review the following rules and eligibility requirements.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer:
        "Anyone 18 years or older residing in the Greater Toronto Area is welcome to enter this giveaway.",
    },
    {
      question: "How long does the giveaway run?",
      answer:
        "The giveaway runs from March 3, 2025 until March 21, 2025. Make sure to enter before time runs out!",
    },
    {
      question: "How will the winner be selected?",
      answer:
        "The winner will be selected randomly from all valid entries using a certified random selection process.",
    },
    {
      question: "When and how will the winner be notified?",
      answer:
        "The winner will be notified via email within 48 hours after the giveaway ends. They must confirm within 72 hours to claim the prize.",
    },
    {
      question: "How many times can I enter?",
      answer:
        "Each person may enter once. Extra entries can be earned through social media shares (up to 3 additional entries).",
    },
    {
      question: "Is my information secure?",
      answer:
        "Absolutely. Your information will solely be used for this giveaway and will not be shared with third parties.",
    },
  ],
  imageUrl:
    "https://api.typeform.com/responses/files/ea11f57d932d624ed5938c78e4da092cc2e99dcfb94963f5b0bbe23dcfe7f9f1/raps_game.jpg",
  tipsForEntering: [
    "Double-check your email address before submitting your entry",
    "Share on social media for additional entry opportunities",
    "Mark your calendar for the draw date: March 21, 2025",
  ],
  importantNotice:
    "All winners will be contacted via the provided email. Please check your inbox (and spam folder) regularly after the giveaway ends.",
  supportEmail: "support@giveaway.com",
  termsText: "By entering, you agree to all rules and terms.",
  downloadRulesText: "Download Full Rules PDF",
};

export const contactContent = {
  title: "Get In Touch",
  email: "info@rapsgiveaway.com",
  phone: "416-555-1234",
  brokerage: {
    name: "Toronto Sports Entertainment",
    address: "123 Arena Blvd, Toronto",
  },
  disclaimer:
    "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy",
};

export const footerContent = {
  aboutText:
    "Raptors Ticket Giveaway brings you exclusive opportunities to witness live NBA action from the best seats in the house.",
  email: "info@rapsgiveaway.com",
  phone: "416-555-1234",
  quickLinks: ["Home", "About", "Prizes", "Contact", "Privacy Policy"],
  newsletterText:
    "Subscribe to our newsletter for the latest updates on giveaways and exclusive sports offers.",
  brokerage: {
    name: "Toronto Sports Entertainment",
    address: "123 Arena Blvd, Toronto",
  },
  disclaimer:
    "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  company: "The Sky Group Real Estate",
  privacyPolicyText: "Privacy Policy",
};

export const countdownContent = {
  endDate: new Date("March 21, 2025"),
};

export const colorScheme = {
  primary: {
    main: "red-600",
    light: "red-400",
    dark: "red-800",
    gradient: "from-red-500 to-red-700",
    text: "red-700",
    textLight: "red-500",
    textDark: "red-900",
    hover: "red-700",
    border: "red-200",
    background: "red-50",
    accent: "red-100",
    accentDark: "red-300",
  },
  secondary: {
    main: "white",
    text: "gray-800",
    textLight: "gray-600",
    textDark: "gray-900",
    border: "gray-200",
    background: "white",
    accent: "gray-100",
  },
  utility: {
    success: "green-600",
    successLight: "green-100",
    error: "red-600",
    errorLight: "red-100",
    warning: "yellow-600",
    warningLight: "yellow-100",
    info: "blue-600",
    infoLight: "blue-100",
  },
  gradients: {
    header: "from-red-100/70 via-red-50/40 to-transparent",
    countdownBg: "from-red-800 to-red-950",
    countdownText: "from-red-200 to-red-400",
    prizeTitle: "from-red-700 to-red-500",
    button: "from-red-500 to-red-600",
    buttonHover: "from-red-600 to-red-700",
  },
  shadows: {
    small: "shadow-md",
    medium: "shadow-lg",
    large: "shadow-xl",
    extraLarge: "shadow-2xl",
    glow: "shadow-[0_0_15px_rgba(251,191,36,0.3)]",
  },
  animations: {
    float: "animate-float",
    pulseSlow: "animate-pulse-slow",
    bounceSlow: "animate-bounce-slow",
  },
};