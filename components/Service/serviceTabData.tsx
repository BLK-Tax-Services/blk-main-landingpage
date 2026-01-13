const serviceTabData = [
  {
    id: "personal", // Changed from tabOne
    title: "Personal Tax Preparation",
    items: [
      {
        id: "personal1",
        title: "Standard Tax Return",
        description: "Form 1040 for individual taxpayers to file their annual tax return.",
        price: "Starting at $149.99",
      },
      {
        id: "personal2",
        title: "Itemized Tax Return",
        description: "Form 1040 with Schedule A for itemized deductions.",
        price: "Starting at $249.99",
      },
      {
        id: "personal3",
        title: "Self-Employed Tax Return",
        description: "For sole proprietors, independent contractors, and those in business for themselves.",
        price: "Starting at $299.99",
      },
    ],
  },
  {
    id: "planning", // Changed from tabTwo
    title: "Tax Planning & Analysis",
    items: [
      {
        id: "analysis1",
        title: "Standard Tax Analysis",
        description: "Plan ahead with comprehensive tax analysis services.",
        price: "Starting at $75/hour",
      },
      {
        id: "analysis2",
        title: "Advanced Tax Strategy",
        description: "Optimize your taxes for maximum savings.",
        price: "Starting at $75/hour",
      },
      {
        id: "analysis3",
        title: "Tax Audit Prep",
        description: "Audit preparation and representation for peace of mind.",
        price: "Starting at $75/hour",
      },
    ],
  },
  {
    id: "business", // Changed from tabThree
    title: "Business Tax Services",
    items: [
      {
        id: "business1",
        title: "Small Business Tax",
        description: "Comprehensive support for small business tax returns.",
        price: "Starting at $299.99",
      },
      {
        id: "business2",
        title: "Business Tax Package",
        description: "Tailored solutions for small to medium sized businesses ($100k-$1m Revenue).",
        price: "Starting at $150/month",
      },
      {
        id: "business3",
        title: "Tax Audit Support",
        description: "Prepare and navigate audits with expert guidance.",
        price: "Starting at $75/hour",
      },
    ],
  },
];

export default serviceTabData;