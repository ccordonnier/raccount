import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../actions/user.actions";
import { isEmpty } from "../utils";

const FollowHandler = ({ idToFollow, type }) => {
  const userData = useSelector((state) => state.userReducer);
  const [isFollowed, setIsFollowed] = useState(false);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(userData._id, idToFollow));
    setIsFollowed(true);
  };

  const handleUnfollow = () => {
    dispatch(unfollowUser(userData._id, idToFollow));
  };

  useEffect(() => {
    if (!isEmpty(userData.following)) {
      if (userData.following.includes(idToFollow)) {
        setIsFollowed(true);
      } else {
        setIsFollowed(false);
      }
    }
  }, [userData, idToFollow]);

  return (
    <>
      {isFollowed && !isEmpty(userData) && (
        <span className="unfollow-btn">
          {type === "suggestion" && (
            <button onClick={handleUnfollow}>Ne plus suivre</button>
          )}
          {type === "card" && (
            <img
              onClick={handleUnfollow}
              src="./img/icons/checked.svg"
              alt="checked"
            />
          )}
        </span>
      )}
      {!isFollowed && !isEmpty(userData) && (
        <span className="follow-btn">
          {type === "suggestion" && (
            <button onClick={handleFollow}>Suivre</button>
          )}
          {type === "card" && (
            <img
              onClick={handleFollow}
              src="./img/icons/check.svg"
              alt="checked"
            />
          )}
        </span>
      )}
    </>
  );
};

export default FollowHandler;
