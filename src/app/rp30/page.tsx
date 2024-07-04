"use client";

import { useRef } from "react";

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);

  const scrollToOffer = () => {
    if (offerRef.current) {
      offerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="bg-[#0C1214] h-fit grid grid-cols-2 max-md:grid-cols-1">
        <div className="flex flex-col items-center">
          <img src="/banner.png" alt="" />
        </div>

        <div className="flex flex-col items-center gap-0">
          <h2 className="text-white text-center text-xl w-80 font-bold my-3">
            A rotina que você sempre sonhou esta há 30 dias de se tornar
            realidade.
          </h2>
          <p className="text-white text-center max-w-80 mb-3">
            Chegou a hora de dar um basta na procrastinação e começar a ser
            eficiente na busca dos seus objetivos.
          </p>

          <div className="flex flex-col items-center justify-center text-center my-3">
            <button
              onClick={scrollToOffer}
              className="text-black text-xl rounded-lg font-xl px-12 py-3 bg-[#FFB980] mb-3"
            >
              Quero Aprender
            </button>
            <p className="text-white text-xs tracking-[.5em]">
              PAGAMENTO SEGURO
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0C1214] py-12">
        <div className="flex flex-col items-center gap-4 px-14 pt-2 pb-8 border border-gray-600 rounded-2xl mx-6 shadow-[rgba(255,_185,_128,_0.2)_0px_7px_29px_0px]">
          <h2 className="text-white text-xl font-bold">Você...</h2>
          <ul className="text-white font-light list-disc flex flex-col gap-2">
            <li>Começa mil tarefas mas não finaliza nenhuma?</li>
            <li>
              Não consegue focar em uma única coisa por mais de 30 minutos?
            </li>
            <li>Sente que está sempre cansado(a) e sem energia?</li>
            <li>
              Está sempre se sentindo sobrecarregado(a) com as tarefas do dia a
              dia?
            </li>
            <li>
              Sente que está perdendo grandes oportunidade por não conseguir
              produzir com consistência?
            </li>
            <li>Quer ter mais tempo para fazer o que realmente gosta?</li>
          </ul>
        </div>
        <div className="flex flex-col items-center mt-6 gap-6">
          <h3 className="px-4 text-[#FFB980] text-center text-xl">
            Se pelo menos um dos pontos acima te representa...
          </h3>
          <h3 className="px-4 text-white font-bold text-center text-xl">
            Essa é a sua oportunidade de resolver esses problemas de uma vez por
            todas.
          </h3>
          <button
            onClick={scrollToOffer}
            className="text-black text-xl rounded-lg font-xl px-12 py-3 bg-[#FFB980] mb-4"
          >
            Começar Agora
          </button>
        </div>
      </section>

      <section className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-6 bg-[#0C1214]">
        <h1 className="px-4 text-white font-bold text-center text-xl">
          E se você pudesse eliminar 94.77% da sua procrastinação?
        </h1>
        <p className="px-4 text-[#FFB980] text-center">
          Em até 30 dias você vai aprender a escapar da armadilha da
          improdutividade e finalmente...
        </p>
        <div className="flex flex-col px-12 gap-4 mb-2">
          <div className="flex gap-3 items-center">
            <img
              className="h-6 select-none"
              src="/task.png"
              alt="Task done icon"
            />
            <h3 className="text-white text-base font-medium">
              Ser mais produtivo(a)
            </h3>
          </div>
          <div className="flex gap-3 items-center">
            <img
              className="h-6 select-none"
              src="/task.png"
              alt="Task done icon"
            />
            <h3 className="text-white text-base font-medium">
              Ter mais foco e energia
            </h3>
          </div>
          <div className="flex gap-3 items-center">
            <img
              className="h-6 select-none"
              src="/task.png"
              alt="Task done icon"
            />
            <h3 className="text-white text-base font-medium">
              Ter mais tempo livre para fazer o que você ama
            </h3>
          </div>
          <div className="flex gap-3 items-center">
            <img
              className="h-6 select-none"
              src="/task.png"
              alt="Task done icon"
            />
            <h3 className="text-white text-base font-medium">
              Melhorar a qualidade do seu trabalho
            </h3>
          </div>
          <div className="flex gap-3 items-center">
            <img
              className="h-6 select-none"
              src="/task.png"
              alt="Task done icon"
            />
            <h3 className="text-white text-base font-medium">
              Reduzir o estresse e a ansiedade
            </h3>
          </div>
          <div className="flex gap-3 items-center">
            <img
              className="h-6 select-none"
              src="/task.png"
              alt="Task done icon"
            />
            <h3 className="text-white text-base font-medium">
              Aumentar a autoconfiança e autoestima
            </h3>
          </div>
          <div className="flex gap-3 items-center">
            <img
              className="h-6 select-none"
              src="/task.png"
              alt="Task done icon"
            />
            <h3 className="text-white text-base font-medium">
              Alcançar seus objetivos mais rapidamente
            </h3>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <button
            onClick={scrollToOffer}
            className="text-black text-xl rounded-lg font-xl px-12 py-3 bg-[#FFB980] mb-4"
          >
            Estou Pronto
          </button>
        </div>
      </section>
      <section className="bg-[#0C1214] py-12">
        <div>
          <h2 className="text-white px-6 text-center font-medium text-2xl">
            Adquira o Método RP30 e{" "}
            <span className="font-bold">comece a se organizar ainda hoje:</span>
          </h2>

          <div
            id="offer"
            ref={offerRef}
            className="relative flex flex-col items-center my-10 mx-4 py-10 border rounded-xl border-gray-600 bg-[#1F201F]"
          >
            <div className="absolute top-[-25px] flex gap-3 bg-white py-3 px-6 rounded-xl shadow-[#ffff_0px_0px_15px_0px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000"
              >
                <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
              </svg>
              <h2 className="text-xl">Oferta limitada</h2>
            </div>

            <div className="relative flex flex-col items-center mb-6">
              <p className="text-gray-400 font-semibold">de</p>
              <h2 className="text-gray-400 text-xl text-end font-semibold">
                R$<span className="text-6xl">97</span>,00
              </h2>
              <span className="absolute h-[4px] bg-gray-400 w-full top-[52px]"></span>
            </div>

            <p className="text-gray-400 font-semibold">Por apenas:</p>
            <h2 className="text-[#1EFA09] text-4xl font-medium [text-shadow:_1px_0_10px_rgb(30_250_9)]">
              R$<span className="text-9xl">29</span>,97
            </h2>
            <a
              href="#"
              className="text-white text-lg font-medium rounded-lg font-xl my-4 px-12 py-3 bg-[#0D9300]"
            >
              COMEÇAR AGORA
            </a>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 justify-center items-center">
                <img src="/shield.png" alt="shield icon" className="w-6" />
                <p className="text-[#0D9300] text-xs font-bold">
                  Compra 100% Segura
                </p>
              </div>
              <img src="/methods.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}