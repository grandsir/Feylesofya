import { Feylesof } from "../services/models";
import React from "react";
import {FollowerModal} from "./Modals";


const FeylesofCard = (feylesofInput: Feylesof) => {
  return (
    <div className="w-full mx-auto flex">
      <div className="flex relative top-48 m-auto glass-block">
        <div className="profile-card">
          <div className="profile-card__img">
            <img src={feylesofInput.photo.url} />
          </div>
          <div className="profile-card__cnt js-profile-cnt">
            <div className="text-gray-100 italic text-xl">
              {feylesofInput.feylesofType}
            </div>
            <div className="profile-card__name">{feylesofInput.name}</div>
            <div className="profile-card__txt">{feylesofInput.bio}</div>
            <div className="profile-card-inf">

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">{feylesofInput.followers.length}</div>
                <div className="profile-card-inf__txt">Takipçiler</div>
                <FollowerModal/>
              </div>

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">{feylesofInput.following.length}</div>
                <div className="profile-card-inf__txt">Takip Ettikleri</div>
              </div>

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">{feylesofInput.posts.length}</div>
                <div className="profile-card-inf__txt">Yazıları</div>
              </div>

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">{feylesofInput.comments.length}</div>
                <div className="profile-card-inf__txt">Yorumlar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeylesofCard;
