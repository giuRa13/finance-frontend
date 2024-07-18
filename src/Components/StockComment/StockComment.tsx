import React, { useEffect, useState } from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { commentGetAPI, commentPostAPI } from '../../Services/CommentSevice';
import { toast } from 'react-toastify';
import { CommentGet } from '../../Models/Comment';
import StockCommentList from '../StockCommentList/StockCommentList';
import Spinner from '../Spinner/Spinner';

type Props = {
    stockSymbol: string;
};

type CommentFormInputs = {
    title: string;
    content: string;
};

const StockComment = ({stockSymbol} : Props) => {

    const [comments, setComment] = useState<CommentGet[] | null>(null);

    useEffect(() => {
        getComments();
    }, []);

    const handleComment = (e: CommentFormInputs) => {
        commentPostAPI(e.title, e.content, stockSymbol)
        .then((res) => {
            if(res) {
                toast.success("Comment created successfully!");
                getComments();
            }
        }).catch((e) => {
            toast.warning(e);
        });
    };

    const getComments = () => {
        commentGetAPI(stockSymbol)
        .then((res) => {
            setComment(res?.data!);
        });
    };



  return (
    <>
    <div className='flex flex-col w-[30%] commentBox'>

        <div className='flex flex-col'>
            {comments ? (
                <>
                <h2 className='ml-8 mt-8 text-lg font-semibold text-blue2 '>Your Comments: </h2>
                <StockCommentList comments={comments!}/>
                </>
                ) : (
                <>
                <Spinner/>
                </>
            )}
            
        </div>

        <StockCommentForm symbol={stockSymbol} handleComment={handleComment}/>
    </div>
  </>
  )
}

export default StockComment;

