import { Feylesof } from "../services/models";
import React from "react";

const FeylesofCard = (feylesofInput: Feylesof) => {
  return (
    <div className="w-full mx-auto flex">
      <div className="flex relative top-48 m-auto glass-block">
        <div className="profile-card js-profile-card">
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
                <div className="profile-card-inf__title">145</div>
                <div className="profile-card-inf__txt">Takipçiler</div>
              </div>
              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">66</div>
                <div className="profile-card-inf__txt">Takip Ettikleri</div>
              </div>

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">123</div>
                <div className="profile-card-inf__txt">Yazıları</div>
              </div>

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">85</div>
                <div className="profile-card-inf__txt">Yorumları</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeylesofCard;
