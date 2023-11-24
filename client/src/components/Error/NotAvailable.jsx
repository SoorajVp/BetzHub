import React from 'react'
import { Link } from 'react-router-dom'

const NotAvailable = () => {
  return (
      <div class="min-h-[90%] m-2 flex flex-grow items-center justify-center bg-red-50 rounded-md">
          <div class="rounded-lg bg-white px-16 py-8 text-center shadow-xl">
              <h1 class="mb-2 text-4xl font-bold">503</h1>
              <p class="text-gray-600">Oops! This page is not available.</p>
              <Link to="/" class="mt-4 inline-block rounded bg-primary px-4 py-2 font-semibold text-white hover:bg-red-500"> Go back </Link>
          </div>
      </div>
  )
}

export default NotAvailable