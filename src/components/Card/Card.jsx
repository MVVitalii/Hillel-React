/* eslint-disable react/prop-types */
const Card = ({ cardInfo }) => {
  const { id, image, level, title, user, rating, students, modules, duration, isMyCource, finishedModules } = cardInfo;
  return (
    <div className="card" key={id}>
      <div className="image__container">
        <img src={image} alt="" />
        <div className="level">{level}</div>
      </div>
      <h3 className="card__title">{title}</h3>

      <div className="card__info">
        <div className="user">
          <img src={user.avatar} alt="John Doe" />
          <p>{user.name}</p>
        </div>
        <div className="rating">
          <p>{rating}</p>
        </div>
      </div>

      {/* Якщо це карточка, яка відображає мої поточні курси  */}
      {isMyCource && (
        <div>
          <progress value={(finishedModules / modules) * 100} max="100"></progress>
          <div className="card__info">
            <p>
              {finishedModules} / {modules} Modules
            </p>
            <div>{(finishedModules / modules) * 100} %</div>
          </div>
        </div>
      )}

      <div className="card__info">
        <div>{students} Student</div>
        <div>{modules} modules</div>
        <div>{duration / 60} h</div>
      </div>
    </div>
  );
};
export default Card;
