import React from 'react';
import "./Spinner.css";

type Props = {}

const Spinner = (props: Props) => {
  return (
    <div id='spinner' className='mt-20 flex justify-center items-center'>

        <div className='w-20 h-20 border-4 border-green rounded-full
      border-b-blue2 animate-spin'
        role='status'>
        </div>

        <span className='ml-2'>Loading...</span>

    </div>
  )
}

export default Spinner