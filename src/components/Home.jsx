import React from 'react'
import Balanca from '/balança.svg'

export default function Home() {
  return (
    <main className='mt-16 '>
        <section className='flex justify-center items-center font-bold'>
            <div className='flex flex-col p-4 space-y-2 justify-center items-center'>
                <h1 className='text-green-600 text-5xl font-bold tracking-ultraWidest font-cormorant justify-center ml-4 '>NutriScale</h1>
                <h3 className='text-black mt-2 font-cormorant text-base'>A balança inteligente para controle alimentar</h3>
            </div>
         </section>

         <div className='"mt-5 p-6 flex'>
               <img src={Balanca} alt="Ilustração de uma balança de alimentos" className='mx-auto mb-3'/>
         </div>

        <section className='flex flex-col items-center justify-center'>
            <h2 className='uppercase text-center mt-4 mb-7 font-bold text-xl text-botaoSelecionado'>Porquê nos escolher?</h2>
            <div>
                <p>Descubra uma nova maneira de monitorar sua saúde com essa balança inteligente conectada ao aplicativo exclusivo, oferecendo análises precisas e insights personalizados em tempo real.</p>
            </div>

            <div>
                <p>Seja para controlar calorias, analisar nutrientes ou simplesmente manter o equilíbrio, essa ferramenta é a melhor aliada para seu bem-estar diário. </p>
            </div>
        </section>

        <section>
            <h2 className='uppercase text-center mt-4 mb-7 font-bold text-xl text-botaoSelecionado'>Qual nosso objetivo?</h2>

            <div className='flex p-4 '>
                <div className='mr-2 border border-blue-300'>
                    <p>O objetivo da NutriScale é auxiliar todas as pessoas na sua jornada rumo à alimentação saudável e balanceada, pois acreditamos que uma boa dieta é a chave para uma qualidade de vida melhor para todos. </p>
                </div>

                <div>
                    <p>Nós iremos te ajudar a manter o controle da sua alimentação e também a variá-la, de acordo com as necessidades da dieta que você estiver seguindo. </p>
                </div>
            </div>
          
        </section>
   
    </main>
  )
}
