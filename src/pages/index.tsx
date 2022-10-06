import type { NextPage } from 'next'
import { useState } from 'react';

const Home: NextPage = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  return (
    <main className='bg-gray-100 min-h-screen'>
      <div className='max-w-5l mx-auto py-16'>
        <form className='py-4 space-y-4'>
          <div className='flex items-center justify-center py-4'>
            <h1 className='font-bold text-gray-700 text-lg'>
              Formulário 2 Semestre C.C.
            </h1>
          </div>
          <div className='flex items-center justify-center'>
            <label htmlFor='name' className='sr-only'>Nome</label>
            <input 
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              type='text'
              id='name'
              placeholder='Nome'
              className='shadow-md focus:ring-indigo-500 focus-border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md'
            />
          </div>
          <div className='flex items-center justify-center'>
            <label htmlFor='date' className='sr-only'>Data Saída</label>
            <input 
              value={date}
              onChange={(e) => {
                setDate(e.target.value)
              }}
              type='text'
              id='date'
              placeholder='Data de Saída'
              className='shadow-md focus:ring-indigo-500 focus-border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md'
            />
          </div>
          
          <div className='flex items-center justify-center'>
              <button type='submit' className='flex items-center justify-center text-sm w-64 rounded-sm shadow py-3 px-2 text-white bg-indigo-500'>
                Enviar Resposta
              </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Home
