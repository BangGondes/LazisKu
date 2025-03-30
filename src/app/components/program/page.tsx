export default function Program() {
  return (
    <>
      <div className="flex flex-col items-center text-center py-16 px-6 animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-snug font-[Poppins]">
          Program Unggulan Kami ✨
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-lg font-[Poppins]">
          Kami menghadirkan berbagai program yang penuh manfaat, dirancang untuk
          membawa perubahan positif bagi masyarakat dan lingkungan.
        </p>
        <p className="mt-2 text-lg text-gray-500 max-w-lg font-[Poppins]">
          Yuk, temukan program yang paling cocok untukmu dan bergabung bersama
          kami! 🚀
        </p>
      </div>  

      <div className=" items-center py-24 px-10 bg-gray-50 gap-16 mb-4 shadow-lg">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">Program 1</h2>
            <p className="mt-4 text-lg text-gray-600">
              Description for Program 1.
            </p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-xl">
              Learn More
            </button>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">Program 2</h2>
            <p className="mt-4 text-lg text-gray-600">
              Description for Program 2.
            </p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}