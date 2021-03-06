import React from 'react';

function SaveButton(props) {
  // console.log('props.createBookSave', props.createBookSave);
  return (
    <button className="cursor-pointer bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded whitespace-no-wrap" onClick={() => props.saveBook(props.createBookSave)}>Save Book</button>
  );
}

export default SaveButton;
