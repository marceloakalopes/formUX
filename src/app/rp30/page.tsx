export default function Page() {
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
            <a
              href=""
              className="text-black text-xl rounded-lg font-xl px-12 py-3 bg-[#FFB980] mb-3"
            >
              Quero Aprender
            </a>
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
            Essa é a sua oportunidade de resolver esses problemas de uma
            vez por todas.
          </h3>
          <a
            href=""
            className="text-black text-xl rounded-lg font-xl px-12 py-3 bg-[#FFB980] mb-3"
          >
            Começar Agora
          </a>
        </div>
      </section>

      <section>
        <h1>Descubra se o Método RP30 é a Solução Perfeita para Você</h1>
        <p>Você se identifica com alguma das situações abaixo?
        Se sim, o Produtividade Biohacker foi feito sob medida para você</p>
      </section>
    </>
  );
}
