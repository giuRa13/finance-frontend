import React from 'react';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

type Props = {
    symbol: string;
    handleComment: (e: CommentFormInputs) => void;
};

type CommentFormInputs = {
    title: string;
    content: string;
};

const validation = Yup.object().shape({
    title: Yup.string().required(" A Title is required"),
    content: Yup.string().required("Some Content is  required"),
});


const StockCommentForm = ({symbol, handleComment}: Props) => {

    const {
        register, 
        handleSubmit, 
        formState:{errors}
    } = useForm<CommentFormInputs>({resolver: yupResolver(validation)});

  return (
    <form className="mt-8 ml-8 w-[30%]" onSubmit={handleSubmit(handleComment)}>
    <h2 className='text-blue2 text-lg font-semibold mb-4'>Leave a comment...</h2>
    <input
      type="text"
      id="title"
      className="mb-3 bg-white border border-green text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue2 dark:border-geen dark:placeholder-green dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Title"
      {...register("title")}
    />
    {errors.title ? <p className='text-red'>{errors.title.message}</p> : ""}
    <div className="py-2 px-4 mb-4 bg-blue2-lg rounded-lg border border-gray-200 dark:bg-blue2 dark:border-green">
      <label htmlFor="comment" className="sr-only">
        Your comment
      </label>
      <textarea
        id="comment"
        rows={6}
        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-gray-100 dark:placeholder-green dark:bg-blue2"
        placeholder="Write a comment..."
        {...register("content")}
      ></textarea>
      {errors.content ? <p className='text-red'>{errors.content.message}</p> : ""}
    </div>
    <button
      type="submit"
      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-blue2 bg-green rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
    >
      Post comment
    </button>
  </form>
  )
}

export default StockCommentForm