import React, { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const ADD_COMMENT = gql`
  mutation addCommentForPost($postId: ID, $comment: String) {
    createComment(data: {
      name: "Mama Cass"
      post: {connect: {id: $postId}}
      email: "melinda@gatesfoundation.org"
      content: $comment
      commentBody: $comment}
    ) {
      id
    }
  }
`;

export default function AddCommentForm({postId}) {
  const [comment, setComment] = useState('');

  const [addComment, { data }] = useMutation(ADD_COMMENT);

  return (
    <main>
      <div className="add-comment">
        <label htmlFor="comment">What do you want to say?</label>
        <input 
          type="text" 
          name="comment" 
          value={comment}
          onChange={evt => setComment(evt.target.value)}
        />
        <button
          onClick={() => {
            addComment({ variables: { comment, postId } });
            setComment('');
          }}
        >
          Submit
        </button>
      </div>
    </main>
  );
}
