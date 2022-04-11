import { useSelector } from "react-redux";
import Card from "./card.component";

const ContentContainer = () => {
  const playlist = useSelector((state) => state.playlist);
  return (
    <div className="content-container">
      <div className="content-list">
        <Card text={playlist} />
      </div>
    </div>
  );
};

export default ContentContainer;
