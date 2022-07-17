import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Date last built</strong>
      <p id="date">Sun Jul 17 14:25:30 UTC 2022</p>
    </div>
  );
};

export default ExploreContainer;
