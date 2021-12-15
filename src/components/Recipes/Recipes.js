import Recipe from "../Recipe/Recipe";
import "./Recipes.css";

function Recipes() {
  const recipes = [
    {
      id: 1,
      title: "Shakshuka",
      description: "easy to make",
      time: "20 minutes",
      rating: "4.8",
      image:
        "https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2020/01/15145107/14.jpg",
    },
    {
      id: 2,
      title: "Pasta Rose",
      description: "easy to make",
      time: "30 minutes",
      rating: "3.6",
      image:
        "https://www.chef-lavan.co.il/uploads/images/9218960b2dd3d8e18af09b87469dc82a.jpg",
    },
    {
      id: 3,
      title: "Brioche",
      description: "easy to make",
      time: "1 hour",
      rating: "5.2",
      image:
        "https://medias.hashulchan.co.il/www/uploads/2019/01/IMG_1841-2000x1125-1551182049.jpg",
    },
    {
      id: 4,
      title: "Fig salad",
      description: "easy to make",
      time: "20 minutes",
      rating: "3.5",
      image:
        "https://medias.hashulchan.co.il/www/uploads/2021/08/IMG_1737-2000x1125-1629727261.jpg",
    },
    {
      id: 5,
      title: "Italian soup",
      description: "easy to make",
      time: "2 hours",
      rating: "4.2",
      image:
        "https://medias.hashulchan.co.il/www/uploads/2016/01/650_500-153-2000x1125.jpg",
    },
  ];
  return (
    <div className="recipes-dsgn">
      {recipes.map(({ id, title, description, rating, time, image }) => (
        <Recipe
          key={id}
          id={id}
          title={title}
          description={description}
          image={image}
          rating={rating}
          time={time}
        />
      ))}
    </div>
  );
}
export default Recipes;
