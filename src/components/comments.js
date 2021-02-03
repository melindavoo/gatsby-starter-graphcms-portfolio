import React from 'react'
import Moment from 'react-moment'

function Comments(props) {

  const { 
    comments,
    commentsError,
    commentsLoading
  } = props

  return (
    <ul className="flex flex-col">
      <h3 className="font-medium text-lg py-4">Responses <span className="font-normal text-sm text-gray-500">({comments && comments.length})</span></h3>
      {comments && comments.map((comment => (
        <li className="flex flex-col px-2 py-4">
          <div className="flex items-center">
            <div>
              <div className="text-sm font-medium text-gray-900">
                {comment.name} <span className="text-sm text-gray-500">{comment.email}</span>
              </div>
              <div className="text-sm text-gray-500">
                <Moment fromNow>{comment.createdAt}</Moment>
              </div>
            </div>
          </div>
          <div className="py-2 mt-1 text-sm font-medium text-gray-900">{comment.content}</div>
        </li>
      )))}
    </ul>
  )
}

export default Comments
