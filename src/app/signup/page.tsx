"use client"

import Head from "next/head";
import Link from "next/link";
import Brand from "@/components/ui/Brand/Brand";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { GoogleIcon } from "@/components/Icons/GoogleIcon";

export default function Login() {
  return (
    <main className="bg-gray-900 font-poppins">
      <Head>
        <title>Login - Mailgo</title>
      </Head>
      <main className='w-full h-screen flex flex-col items-center justify-center px-4'>
        <div className='max-w-sm w-full text-gray-300'>
          <div className='text-center'>
            <Brand className='mx-auto w-32' />
            <div className='mt-5 space-y-2'>
              <h1 className='text-white text-2xl font-bold sm:text-3xl'>
                Sign Up For Mailgo
              </h1>
              <p className=''>
                Have have an account?{" "}
                <Link
                  href='/#pricing'
                  className='font-medium text-purple-500 hover:text-purple-600 duration-150'>
                  Login Here
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className='mt-8 space-y-5'>

            <div className="font-medium text-gray-300">
              <Input
                placeholder="Name"
                type='text'
                required
                className='w-full mt-2 text-[16px] text-gray-300 bg-gray-800 focus:bg-gray-900 focus:border-violet-500 border-[2px]'
              />
            </div>

            <div className="font-medium">  
              <Input
                placeholder="Username"              
                type='text'
                required
                className='w-full mt-2 text-gray-300 bg-gray-800 focus:bg-gray-900 focus:border-violet-500 border-[2px]'
              />
            </div>

            <div className="font-medium">
              <Input
                placeholder="Email"              
                type='email'
                required
                className='w-full mt-2 text-gray-300 bg-gray-800 focus:bg-gray-900 focus:border-violet-500 border-[2px]'
              />
            </div>

            <div className="font-medium">
              <Input
                placeholder="Password"
                type='password'
                required
                className='w-full mt-2 text-gray-300 bg-gray-800 focus:bg-gray-900 focus:border-violet-500 border-[2px] mb-1'
              />
            </div>

            <Button className='w-full text-gray-800 bg-gray-100 hover:bg-gray-200 ring-offset-2 focus:ring rounded-lg'>
              Sign in
            </Button>
            <button
              type='button'
              className='w-full flex items-center justify-center gap-x-3 py-2.5 border border-gray-800 rounded-lg text-sm font-medium bg-gray-800/40 hover:bg-gray-800 ease-linear duration-150'>
              <GoogleIcon className={""}/>
              Continue with Google
            </button>
          </form>
        </div>
      </main>
    </main>
  );
}
