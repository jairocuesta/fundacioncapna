import React, { useState } from 'react';

type Props = { 
    comment: string;
    setComment: React.Dispatch<string>;
    isCommentVisible: boolean;
    setIsCommentVisible: React.Dispatch<boolean>;
    errorMessage: string;
}

const CommentBox = ({ comment, setComment, isCommentVisible,  setIsCommentVisible, errorMessage}: Props) => {
    
    const handleCheckboxChange = () => {
        setIsCommentVisible(!isCommentVisible); 
        if (!isCommentVisible) {
            setComment('');
        }
    };
    
    const handleCommentChange = (event: string) => {
        setComment(event);
    };

    return (
        <div className='flex flex-col gap-3'>
            <label className='text-xs flex gap-1 text-neutral-600'>
                <input
                    type="checkbox"
                    checked={isCommentVisible}
                    onChange={handleCheckboxChange}
                    style={{
                        accentColor: '#898C31',
                    }}
                />
                ¿Te gustaría dejar un comentario?
            </label>

            {isCommentVisible && (
                <div>
                    <textarea
                        value={comment}
                        onChange={(e) => handleCommentChange(e.target.value)}
                        placeholder="Escribe tu comentario aquí..."
                        className='custom-checkbox w-full border-b border-[#898C31] text-xs text-neutral-600 min-h-10 max-h-14'
                        rows={2}
                    />
                    {errorMessage && errorMessage !== "" && (
                        <div className="text-xs text-red-500 font-semibold">
                            {errorMessage}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default CommentBox;
