const journey = [
  {
    years: "Jan, 2025 - Present",
    role: "IT Application Staff",
    institution: "Dinas Komunikasi dan Informatika, Kendari City",
  },
  {
    years: "Jan, 2023 - Feb, 2024",
    role: "Member of the Research and Technology Department",
    institution: "Himpunan Mahasiswa Teknik Informatika FT-UHO, Kendari City",
  },
  {
    years: "Jan, 2022 - Feb, 2022",
    role: "Programmer Intern",
    institution: "Badan Kependudukan dan Keluarga Berencana Nasional (BKKBN), Kendari City",
  },
  {
    years: "Sep, 2020 - Jun, 2024",
    role: "Student of Informatics Engineering",
    institution: "Halu Oleo University, Kendari City",
  },
];

const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {journey.map((item, index) => {
        const { years, role, institution } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            {/* Bullets */}
            <div className="flex flex-col w-max justify-center items-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-px h-[180px] bg-white/10"></div>
            </div>
            {/* Text */}
            <div className="max-w-[500px]">
              <p className="mb-6 text-lg text-white/50">{years}</p>
              <h1 className="h4 mb-2">{role}</h1>
              <p className="text-lg text-white/50">{institution}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
