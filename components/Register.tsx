'use client';
import Header from './Header';
import Footer from './Footer';
import { TSregisterSchema, userRegisterSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { PiSortDescending } from 'react-icons/pi';
import Link from 'next/link';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSregisterSchema>({ resolver: zodResolver(userRegisterSchema) });

  const content = (
    <section className='section-style'>
      <div className='div-style'>
        <Header />
        <article className='center-with-flex w-screen h-screen '>
          <form action='' className='mb-[6rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div>
                <label htmlFor='firstname' className='form-text-style'>
                  Firstname:{' '}
                </label>
                <input
                  type='text'
                  {...register('firstName')}
                  name='firstName'
                  id='firstName'
                  className='form-input-style'
                />
              </div>
              {errors.firstName && (
                <p className='text-[#ff0000]'>{`${errors.firstName.message}`}</p>
              )}
              <div>
                {' '}
                <label htmlFor='lastName' className='form-text-style'>
                  Lastname:{' '}
                </label>
                <input
                  {...register('lastName')}
                  type='text'
                  name='lastName'
                  id='lastName'
                  className='form-input-style'
                />
              </div>
              {errors.lastName && (
                <p className='text-[#ff0000]'>{`${errors.lastName.message}`}</p>
              )}
            </div>
            <div>
              <label htmlFor='email' className=' form-text-style '>
                Email:{' '}
              </label>
              <input
                {...register('email')}
                type='text'
                name='email'
                id='email'
                className='form-input-style'
              />
            </div>
            {errors.email && (
              <p className='text-[#ff0000]'>{`${errors.email.message}`}</p>
            )}
            <div>
              <label htmlFor='password' className='form-text-style'>
                Password:{' '}
              </label>
              <input
                {...register('password')}
                type='text'
                name='password'
                id='password'
                className='form-input-style'
              />
            </div>
            {errors.password && (
              <p className='text-[#ff0000]'>{`${errors.password.message}`}</p>
            )}
            <div>
              password
              <label htmlFor='confirmPassword' className='form-text-style'>
                Confirm Password:{' '}
              </label>
              <input
                {...register('confirmPassword')}
                type='text'
                name='confirmPassword'
                id='confirmPassword'
                className='form-input-style'
              />
            </div>
            {errors.confirmPassword && (
              <p className='text-[#ff0000]'>{`${errors.confirmPassword.message}`}</p>
            )}
            <div>
              <button className=' bg-[#03045e] mx-auto w-[5rem] mt-3 shadow-xl text-white p-2 block font-bold rounded-lg'>
                Register
              </button>
              <p className='font-bold'>
                Already have an account?{' '}
                <Link
                  href='/login'
                  className='underline text-[1.2rem] font-bold  text-[#03045e]'>
                  Login.
                </Link>
              </p>
            </div>
          </form>
        </article>
      </div>
      <Footer />
    </section>
  );

  return content;
}
