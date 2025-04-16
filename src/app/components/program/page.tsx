export default function Program() {
  const programList = [
    {
      title: "Beasiswa Santri",
      description: "Bantuan pendidikan untuk santri kurang mampu.",
      link: "#",
    },
    {
      title: "Orang Tua Asuh",
      description: "Dukung santri dengan menjadi orang tua asuh.",
      link: "#",
    },
    {
      title: "Pembangunan Pondok",
      description: "Ayo bantu renovasi dan pembangunan pondok pesantren.",
      link: "#",
      image: "",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center text-center py-16 px-6 animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-snug font-[Poppins]">
          Program Kami ✨
        </h1>
        <p className="mt-2 text-lg text-gray-500 max-w-lg font-[Poppins]">
          Yuk, temukan program yang paling cocok untukmu dan bergabung bersama
          kami! 🚀
        </p>
      </div>

      <div className="py-24 px-6 bg-gray-50">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {programList.map((program, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl p-8 shadow-lg text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 animate-fadeIn"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {program.title}
              </h2>
              <p className="text-gray-600 text-base flex-grow">
                {program.description}
              </p>
              <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow transition duration-300 hover:bg-green-700 hover:shadow-xl">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
