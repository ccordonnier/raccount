import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, editComment } from "../../actions/post.actions";
import { UidContext } from "../AppContext";

const EditDeleteComment = ({ comment, postId }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(editComment(postId, comment._id, text));
      setText("");
      setEdit(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm("Voulez-vous supprimer ce commentaire")) {
      dispatch(deleteComment(postId, comment._id));
    }
  };

  useEffect(() => {
    const checkAuthor = () => {
      if (uid === comment.commenterId) {
        setIsAuthor(true);
      }
    };

    checkAuthor();
  }, [uid, comment.commenterId]);

  return (
    <div>
      <div className="edit-comment">
        {isAuthor && !edit && (
          <>
            <span onClick={handleDelete}>
              <img src="./img/icons/trash.svg" alt="delete-comment" />
            </span>
            <span onClick={() => setEdit(!edit)}>
              <img src="./img/icons/edit.svg" alt="edit-comment" />
            </span>
          </>
        )}
        {isAuthor && edit && (
          <form action="" onSubmit={handleEdit} className="edit-comment-form">
            <input
              type="text"
              name="text"
              onChange={(e) => setText(e.target.value)}
              defaultValue={comment.text}
            />
            <br />
            <div className="btn">
              <label htmlFor="text" onClick={() => setEdit(!edit)}>
                Annuler
              </label>
              <input type="submit" value="Editer" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditDeleteComment;
