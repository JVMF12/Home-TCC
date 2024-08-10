import React from 'react'
import Balanca from '/balança.svg'

export default function Home() {
  return (
    <main className='mt-16 md:mt-12 overflow-x-hidden font-openSans'>
        <section className='flex justify-center items-center font-bold font-cormorant md:ml-7'>
            <div className='flex flex-col p-4 space-y-2 justify-center items-center'>
                <h1 className='text-green-600 text-8xl font-bold tracking-ultraWidest justify-center ml-4 '>NutriScale</h1>
                <h3 className='text-black mt-2 text-2xl'>A balança inteligente para controle alimentar</h3>
            </div>
         </section>

         <div className='"mt-5 p-6 flex'>
               <img src={Balanca} alt="Ilustração de uma balança de alimentos" className='mx-auto mb-3 md:w-60 md:h-40'/>
         </div>

        <section className='flex flex-col items-center justify-center '>
            <h2 className='uppercase text-center mt-4 mb-7 font-bold text-xl md:text-3xl text-botaoSelecionado'>Porquê nos escolher?</h2>

            <div className='flex flex-col md:flex-row p-3 h-60 w-80 mb-10'>
                <div className='mb-8 border border-fundoHeader bg-fundoHeader rounded-custom'>
                    <p className='m-5 text-xs'>Descubra uma nova maneira de monitorar sua saúde com essa balança inteligente conectada ao aplicativo exclusivo, oferecendo análises precisas e insights personalizados em tempo real.</p>
                </div>

                <div className=' border border-fundoHeader bg-fundoHeader rounded-custom'>
                    <p className='m-5 text-xs'>Seja para controlar calorias, analisar nutrientes ou simplesmente manter o equilíbrio, essa ferramenta é a melhor aliada para seu bem-estar diário. </p>
                </div>
            </div>
        
        </section>

        <section className='md:flex md:flex-col md:items-center md:justify-center'>
            <h2 className='uppercase text-center mt-4 mb-7 font-bold text-xl md:text-3xl text-botaoSelecionado'>Qual nosso objetivo?</h2>

            <div className='flex flex-col md:flex-row p-4 h-60 w-80 md:w-96 mb-3 ml-7 md:p-3 md:mr-96'>
                <div className='mb-10 md:mb-0 md:mr-10 border border-fundoHeader bg-fundoHeader rounded-custom'>
                    <p className='m-5 text-xs'>O objetivo da NutriScale é auxiliar todas as pessoas na sua jornada rumo à alimentação saudável e balanceada, pois acreditamos que uma boa dieta é a chave para uma qualidade de vida melhor para todos. </p>
                </div>

                <div className='border border-fundoHeader bg-fundoHeader rounded-custom '>
                    <p className='m-5 text-xs '>Nós iremos te ajudar a manter o controle da sua alimentação e também a variá-la, de acordo com as necessidades da dieta que você estiver seguindo. </p>
                </div>
            </div>
          
        </section>
   
    </main>
  )
}
