const courses = [
  {
    title: 'NEURAL NETWORKS',
    number: 'CSE425',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20425%3A%20neural%20networks%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'COMPUTER NETWORKS',
    number: 'CSE421',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20421%3A%20computer%20networks%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'DIGITAL SYSTEM DESIGN',
    number: 'CSE461',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20461%3A%20introduction%20to%20robotics%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'VLSI DESIGN',
    number: 'CSE460',
    link:
      'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20460%3A%20vlsi%20design%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'COMPUTER ARCHITECTURE',
    number: 'CSE340',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20340%3A%20computer%20architecture%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'ARTIFICIAL INTELLIGENCE',
    number: 'CSE422',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20422%3A%20artificial%20intelligence%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'COMPILER DESIGN',
    number: 'CSE420',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20420%3A%20compiler%20design%20(%203%20credits)',
    university: 'Brac University',
  },
  {
    title: 'DIGITAL ELECTRONICS AND PULSE TECHNIQUES',
    number: 'CSE350',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20350%3A%20digital%20electronics%20and%20pulse%20techniques%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'COMPUTER GRAPHICS',
    number: 'CSE423',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20423%3A%20computer%20graphics%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'ELECTRONIC DEVICES AND CIRCUITS',
    number: 'CSE251',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20250%3A%20circuits%20and%20electronics%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'SYSTEM ANALYSIS AND DESIGN',
    number: 'CSE471',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20471%3A%20system%20analysis%20and%20design%20(%203%20credits)',
    university: 'Brac University',
  },
  {
    title: 'Linear Algebra and Fourier Analysis',
    number: 'MAT216',
    link:
      'https://www.bracu.ac.bd/academics/departments/mathematics-and-natural-sciences/courses-offered-mns-department-different#:~:text=mat%20216%20math%20iv%20linear%20algebra%20and%20fourier%20analysis%203%20credits',
    university: 'Brac University',
  },
  {
    title: 'COMPUTER INTERFACING',
    number: 'CSE360',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20360%3A%20computer%20interfacing%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'Complex Variables and Laplace Transformations',
    number: 'MAT215',
    link: 'https://www.bracu.ac.bd/academics/departments/mathematics-and-natural-sciences/courses-offered-mns-department-different#:~:text=mat%20215%20math%20iii%20complex%20variables%20and%20laplace%20transformations%203%20credits',
    university: 'Brac University',
  },
  {
    title: 'CIRCUITS AND ELECTRONICS',
    number: 'CSE250',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20250%3A%20circuits%20and%20electronics%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'SOFTWARE ENGINEERING',
    number: 'CSE470',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20470%3A%20software%20engineering%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'MICROPROCESSORS',
    number: 'CSE341',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20341%3A%20microprocessors%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'AUTOMATA AND COMPUTABILITY',
    number: 'CSE331',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20331%3A%20automata%20and%20computability%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'OPERATING SYSTEMS',
    number: 'CSE321',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20321%3A%20operating%20systems%20(%203%20credits)',
    university: 'Brac University',
  },
  {
    title: 'DATABASE SYSTEMS',
    number: 'CSE370',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20370%3A%20database%20systems%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'DATA COMMUNICATIONS',
    number: 'CSE320',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20320%3A%20data%20communications%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'NUMERICAL METHODS',
    number: 'CSE330',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20330%3A%20numerical%20methods%20(%203%20credits)',
    university: 'Brac University',
  },
  {
    title: 'DIGITAL LOGIC DESIGN',
    number: 'CSE260',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20260%3A%20digital%20logic%20design%20(3%20credits)',
    university: 'Brac University',
  },
  {
    title: 'DISCRETE MATHEMATICS',
    number: 'CSE230',
    link: 'https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/bachelor-science-computer-science-and/cse-0#:~:text=cse%20230%3A%20discrete%20mathematics%20(3%20credits)',
    university: 'Brac University',
  },
];

export default courses;
