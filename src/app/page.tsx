
export default function Page() {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen max-h-full bg-[url('/face.png')] bg-cover bg-center ">
      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen max-h-full p-6">
        {/* Example content */}
        <div className="flex flex-col items-center mb-12">
          <img
            src="/face.png"
            alt=""
            className="rounded-full max-w-24 mt-10 mb-3"
          />
          <h1 className=" text-white text-xl font-bold">Marcelo Lopes</h1>
          <p className=" text-gray-300 text-sm">Estudos & Produtividade</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <a
            href="mailto:lopestalks@gmail.com"
            className="text-sm w-full py-5 text-center text-white bg-black bg-opacity-50 rounded-md hover:bg-opacity-75 ease-in-out transition-all duration-300"
          >
            E-mail profissional
          </a>
        </div>
      </div>
    </div>
  );
}
