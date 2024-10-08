import { Container } from "../../components/container";

export function Home() {

  return (
    <Container>
      <section
        className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2"
      >
        <input
          className="w-full border-2 rounded-lg h-9 px-3 outline-none"
          placeholder="Digite o nome do carro"
        />
        <button
          className="bg-red-500 h-9 px-8 rounded-lg text-white font-semibold text-lg"
        >
          Buscar
        </button>
      </section>

      <h1
        className="font-bold text-center mt-6 text-2xl mb-4"
      >
        Carros novos e usados em todo o Brasil
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        <section className="w-full bg-white rounded-lg">
          <img 
            className="w-full rounded-lg mb-2 max-h-120 hover:scale-105 transition-all"
            src="https://s2-autoesporte.glbimg.com/pbRgfDw806mYL5mR1YB5wgWcCsI=/0x0:1589x949/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/V/6/QWbdz5RzOkQQqRkBvmBw/bmw-i5.jpg" 
            alt="Carro" 
          />
          <p className="font-bold mt-1 mb-2 px-2"> BMW 320i</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Ano 2016/2016 | 23.000 km</span>
            <strong className="text-black font-bold text-xl">R$ 190.000</strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-black">
              Campo Grande - MS
            </span>
          </div>

        </section>

     
        


      </main>


    </Container>
  )
}

